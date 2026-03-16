<script setup lang="ts">
import { router } from '@inertiajs/vue3';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import {
    globalLoaderStartEvent,
    globalLoaderStopEvent,
} from '@/composables/useGlobalLoader';

type LoaderEventDetail = {
    minimumDuration?: number;
};

const isVisible = ref(false);
const activeOperations = ref(0);
const hideTimer = ref<number | null>(null);
const visibleSince = ref(0);
const minimumVisibleMs = ref(650);

let removeStartListener: (() => void) | null = null;
let removeFinishListener: (() => void) | null = null;
let removeErrorListener: (() => void) | null = null;
let removeInvalidListener: (() => void) | null = null;
let handleLoaderStart: ((event: Event) => void) | null = null;
let handleLoaderStop: ((event: Event) => void) | null = null;

const loaderMessage = computed((): string => {
    return activeOperations.value > 1 ? 'Loading experience' : 'Switching view';
});

const clearTimer = (timer: number | null): void => {
    if (timer !== null) {
        window.clearTimeout(timer);
    }
};

const openLoader = (minimumDuration?: number): void => {
    clearTimer(hideTimer.value);
    minimumVisibleMs.value = Math.max(minimumDuration ?? 650, 250);

    if (!isVisible.value) {
        isVisible.value = true;
        visibleSince.value = window.performance.now();
    }

    activeOperations.value += 1;
};

const closeLoader = (minimumDuration?: number): void => {
    const nextCount = Math.max(activeOperations.value - 1, 0);
    activeOperations.value = nextCount;

    if (minimumDuration !== undefined) {
        minimumVisibleMs.value = Math.max(minimumDuration, minimumVisibleMs.value);
    }

    if (nextCount > 0 || !isVisible.value) {
        return;
    }

    const elapsed = window.performance.now() - visibleSince.value;
    const remaining = Math.max(minimumVisibleMs.value - elapsed, 0);

    hideTimer.value = window.setTimeout(() => {
        isVisible.value = false;
        minimumVisibleMs.value = 650;
    }, remaining);
};

onMounted(() => {
    removeStartListener = router.on('start', () => {
        openLoader(650);
    });

    removeFinishListener = router.on('finish', () => {
        closeLoader(650);
    });

    removeErrorListener = router.on('error', () => {
        closeLoader(300);
    });

    removeInvalidListener = router.on('invalid', () => {
        closeLoader(300);
    });

    handleLoaderStart = (event: Event) => {
        const customEvent = event as CustomEvent<LoaderEventDetail>;
        openLoader(customEvent.detail?.minimumDuration);
    };

    handleLoaderStop = (event: Event) => {
        const customEvent = event as CustomEvent<LoaderEventDetail>;
        closeLoader(customEvent.detail?.minimumDuration);
    };

    window.addEventListener(globalLoaderStartEvent, handleLoaderStart);
    window.addEventListener(globalLoaderStopEvent, handleLoaderStop);
});

onBeforeUnmount(() => {
    clearTimer(hideTimer.value);
    removeStartListener?.();
    removeFinishListener?.();
    removeErrorListener?.();
    removeInvalidListener?.();

    if (handleLoaderStart) {
        window.removeEventListener(globalLoaderStartEvent, handleLoaderStart);
    }

    if (handleLoaderStop) {
        window.removeEventListener(globalLoaderStopEvent, handleLoaderStop);
    }
});
</script>

<template>
    <Transition name="global-loader">
        <div
            v-if="isVisible"
            class="fixed inset-0 z-[140] flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_34%),linear-gradient(180deg,_rgba(2,6,23,0.96),_rgba(3,7,18,0.985))] px-6 py-8"
        >
            <div class="pointer-events-none absolute inset-0 opacity-70">
                <div
                    class="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.05)_1px,transparent_1px)] bg-[size:34px_34px]"
                />
                <div
                    class="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle,_rgba(34,211,238,0.16),_transparent_62%)]"
                />
            </div>

            <div class="relative flex flex-col items-center gap-5">
                <img
                    src="/images/loading.gif"
                    alt="Loading portfolio content"
                    class="w-full max-w-[20rem] rounded-[1.75rem] border border-cyan-300/16 shadow-[0_0_72px_rgba(34,211,238,0.18)]"
                />

                <p
                    class="text-center text-xs font-medium tracking-[0.38em] text-cyan-100/72 uppercase"
                >
                    {{ loaderMessage }}
                </p>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.global-loader-enter-active,
.global-loader-leave-active {
    transition:
        opacity 220ms ease,
        transform 220ms ease;
}

.global-loader-enter-from,
.global-loader-leave-to {
    opacity: 0;
    transform: scale(1.015);
}
</style>
