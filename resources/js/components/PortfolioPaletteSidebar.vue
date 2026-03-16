<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/toast';
import {
    portfolioPalettes,
    useColorPalette,
} from '@/composables/useColorPalette';
import { cn } from '@/lib/utils';

const { colorPalette, updateColorPalette } = useColorPalette();
const { toast } = useToast();

const paletteSwatches = {
    default: ['#FFFFFF', '#FFFFF0', '#D3D3D3', '#A9A9A9'],
    mist: ['#191D23', '#57707A', '#C5BAC4', '#DEDCDC'],
    mint: ['#80EE98', '#46DFB1', '#09D1C7', '#213A58'],
    luna: ['#A7EBF2', '#54ACBF', '#26658C', '#011C40'],
    skijan: ['#00010D', '#2D0140', '#660273', '#A305A6'],
} as const;

const selectPalette = (
    value: (typeof portfolioPalettes)[number]['value'],
    label: string,
): void => {
    updateColorPalette(value);

    toast({
        title: `${label} palette selected`,
        description:
            'The portfolio colors have been updated across the interface.',
        variant: 'info',
    });
};
</script>

<template>
    <aside class="fixed top-1/2 right-6 z-20 hidden -translate-y-1/2 xl:block">
        <Card
            class="portfolio-nav-shell min-h-[24rem] w-[4.5rem] justify-center gap-3 px-3 py-4"
        >
            <CardContent class="flex flex-col items-center gap-3 px-0">
                <button
                    v-for="palette in portfolioPalettes"
                    :key="palette.value"
                    type="button"
                    :class="
                        cn(
                            'flex h-12 w-12 items-center justify-center rounded-full border transition hover:scale-105',
                            'border-[rgb(var(--portfolio-accent-rgb)/0.18)] bg-[rgb(var(--portfolio-surface-strong-rgb)/0.24)] text-[rgb(var(--portfolio-accent-text-rgb))]',
                            colorPalette === palette.value &&
                                'border-[rgb(var(--portfolio-accent-rgb)/0.55)] bg-[rgb(var(--portfolio-accent-rgb)/0.14)] shadow-lg',
                        )
                    "
                    :style="
                        colorPalette === palette.value
                            ? {
                                  boxShadow:
                                      '0 16px 28px -22px rgb(var(--portfolio-glow-bottom-rgb) / 0.85)',
                              }
                            : undefined
                    "
                    :aria-label="`Apply ${palette.label} color palette`"
                    :title="palette.label"
                    @click="selectPalette(palette.value, palette.label)"
                >
                    <span class="grid grid-cols-2 gap-1">
                        <span
                            v-for="swatch in paletteSwatches[palette.value]"
                            :key="swatch"
                            class="size-2.5 rounded-full"
                            :style="{ backgroundColor: swatch }"
                        />
                    </span>
                </button>
            </CardContent>
        </Card>
    </aside>
</template>
