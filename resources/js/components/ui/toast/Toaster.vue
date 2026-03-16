<script setup lang="ts">
import Toast from './Toast.vue';
import { useToast } from './use-toast';

const { dismiss, state } = useToast();
</script>

<template>
    <div
        class="pointer-events-none fixed top-4 right-0 z-[100] flex w-full max-w-sm flex-col gap-3 px-4 sm:top-6 sm:right-6"
    >
        <TransitionGroup name="toast">
            <Toast
                v-for="toast in state.toasts"
                :key="toast.id"
                :toast="toast"
                @dismiss="dismiss(toast.id)"
            />
        </TransitionGroup>
    </div>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
    transition:
        opacity 0.2s ease,
        transform 0.2s ease;
}

.toast-enter-from,
.toast-leave-to {
    opacity: 0;
    transform: translateY(-0.5rem);
}
</style>
