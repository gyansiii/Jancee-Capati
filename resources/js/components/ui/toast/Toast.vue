<script setup lang="ts">
import { X } from 'lucide-vue-next';
import type { HTMLAttributes } from 'vue';
import { computed } from 'vue';
import { cn } from '@/lib/utils';
import type { ToastInstance } from './use-toast';

const props = defineProps<{
    class?: HTMLAttributes['class'];
    toast: ToastInstance;
}>();

defineEmits<{
    dismiss: [];
}>();

const variantClass = computed(() => {
    const variants = {
        default:
            '[&_[data-slot=toast-description]]:text-current/78 [&_[data-slot=toast-title]]:text-current',
        success:
            '[&_[data-slot=toast-description]]:text-current/78 [&_[data-slot=toast-title]]:text-current',
        destructive:
            '[&_[data-slot=toast-description]]:text-current/78 [&_[data-slot=toast-title]]:text-current',
        info: '[&_[data-slot=toast-description]]:text-current/78 [&_[data-slot=toast-title]]:text-current',
    } as const;

    return variants[props.toast.variant ?? 'default'];
});

const variantStyle = computed(() => {
    const variants = {
        default: {
            borderColor: 'rgb(var(--portfolio-accent-rgb) / 0.24)',
            background:
                'linear-gradient(180deg, rgb(var(--portfolio-surface-rgb) / 0.96), rgb(var(--portfolio-surface-rgb) / 0.88))',
            color: 'rgb(var(--portfolio-accent-text-rgb))',
            boxShadow:
                '0 22px 44px -30px rgb(var(--portfolio-glow-bottom-rgb) / 0.42)',
        },
        success: {
            borderColor: 'rgb(16 185 129 / 0.28)',
            background:
                'linear-gradient(180deg, rgb(236 253 245 / 0.96), rgb(209 250 229 / 0.9))',
            color: 'rgb(6 78 59)',
            boxShadow: '0 22px 44px -30px rgb(16 185 129 / 0.28)',
        },
        destructive: {
            borderColor: 'rgb(239 68 68 / 0.26)',
            background:
                'linear-gradient(180deg, rgb(254 242 242 / 0.96), rgb(254 226 226 / 0.9))',
            color: 'rgb(127 29 29)',
            boxShadow: '0 22px 44px -30px rgb(239 68 68 / 0.24)',
        },
        info: {
            borderColor: 'rgb(var(--portfolio-accent-rgb) / 0.3)',
            background:
                'linear-gradient(180deg, rgb(var(--portfolio-accent-rgb) / 0.16), rgb(var(--portfolio-surface-rgb) / 0.94))',
            color: 'rgb(var(--portfolio-accent-text-rgb))',
            boxShadow:
                '0 22px 44px -30px rgb(var(--portfolio-glow-bottom-rgb) / 0.42)',
        },
    } as const;

    return variants[props.toast.variant ?? 'default'];
});
</script>

<template>
    <div
        data-slot="toast"
        :style="variantStyle"
        :class="
            cn(
                'pointer-events-auto relative overflow-hidden rounded-2xl border p-4 shadow-lg backdrop-blur-xl',
                variantClass,
                props.class,
            )
        "
    >
        <button
            type="button"
            class="absolute top-3 right-3 rounded-lg p-1 text-current/70 transition hover:bg-current/8 hover:text-current"
            @click="$emit('dismiss')"
        >
            <X class="size-4" />
            <span class="sr-only">Dismiss notification</span>
        </button>

        <div class="pr-7">
            <p
                v-if="toast.title"
                data-slot="toast-title"
                class="text-sm font-semibold tracking-tight"
            >
                {{ toast.title }}
            </p>
            <p
                v-if="toast.description"
                data-slot="toast-description"
                class="mt-1 text-sm leading-6"
            >
                {{ toast.description }}
            </p>
        </div>
    </div>
</template>
