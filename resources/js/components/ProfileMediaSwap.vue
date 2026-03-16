<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { cn } from '@/lib/utils';

const props = withDefaults(
    defineProps<{
        imageSrc?: string;
        hoverSrc?: string;
        alt?: string;
        fallbackLabel?: string;
        containerClass?: string;
        mediaClass?: string;
    }>(),
    {
        alt: 'Profile media',
        fallbackLabel: 'JMC',
        containerClass: '',
        mediaClass: '',
    },
);

const shouldRenderHoverMedia = ref(false);
const isHoverCapable = ref(false);
let hasCheckedHoverCapability = false;

const hasHoverMedia = computed((): boolean => {
    return Boolean(
        props.imageSrc &&
            props.hoverSrc &&
            isHoverCapable.value &&
            shouldRenderHoverMedia.value,
    );
});

const detectHoverCapability = (): void => {
    if (typeof window === 'undefined' || hasCheckedHoverCapability) {
        return;
    }

    isHoverCapable.value = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    hasCheckedHoverCapability = true;
};

const prepareHoverMedia = (): void => {
    detectHoverCapability();

    if (props.hoverSrc && isHoverCapable.value) {
        shouldRenderHoverMedia.value = true;
    }
};

onMounted(() => {
    detectHoverCapability();
});
</script>

<template>
    <div
        :class="
            cn(
                'group relative isolate overflow-hidden rounded-full',
                containerClass,
            )
        "
        @mouseenter="prepareHoverMedia"
        @focusin="prepareHoverMedia"
    >
        <template v-if="imageSrc">
            <img
                :src="imageSrc"
                :alt="alt"
                loading="eager"
                decoding="async"
                fetchpriority="high"
                :class="
                    cn(
                        'h-full w-full object-cover transition-opacity duration-300',
                        hasHoverMedia &&
                            'motion-safe:group-focus-within:opacity-0 motion-safe:group-hover:opacity-0',
                        mediaClass,
                    )
                "
            />
            <img
                v-if="hasHoverMedia"
                :src="hoverSrc"
                :alt="`${alt} animated preview`"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
                :class="
                    cn(
                        'pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 motion-safe:group-focus-within:opacity-100 motion-safe:group-hover:opacity-100',
                        mediaClass,
                    )
                "
            />
        </template>
        <div
            v-else
            class="portfolio-card-surface-strong portfolio-strong-text flex h-full w-full items-center justify-center text-sm font-medium tracking-[0.5em] uppercase"
        >
            {{ fallbackLabel }}
        </div>
    </div>
</template>
