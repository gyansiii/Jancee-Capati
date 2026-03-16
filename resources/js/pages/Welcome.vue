<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { useToast } from '@/components/ui/toast';
import {
    portfolioPalettes,
    useColorPalette,
} from '@/composables/useColorPalette';
import { aboutme, contactus } from '@/routes';

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
        description: 'The welcome page colors have been updated.',
        variant: 'info',
    });
};
</script>

<template>
    <Head title="My Portfolio" />

    <div
        class="portfolio-strong-text min-h-screen"
        :style="{ backgroundColor: 'rgb(var(--portfolio-app-rgb))' }"
    >
        <div
            class="portfolio-stage-gradient pointer-events-none absolute inset-0"
        />

        <div
            class="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10 lg:px-10"
        >
            <header
                class="portfolio-card-surface flex flex-col gap-4 rounded-[2rem] px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
                <div>
                    <p class="ui-eyebrow">My Portfolio</p>
                    <h1 class="mt-1 text-2xl font-semibold tracking-[-0.03em]">
                        Jancee Capati
                    </h1>
                </div>

                <div class="flex flex-wrap items-center gap-3">
                    <p class="ui-label">Palette</p>
                    <div class="flex flex-wrap items-center gap-2">
                        <button
                            v-for="palette in portfolioPalettes"
                            :key="palette.value"
                            type="button"
                            class="flex h-11 w-11 items-center justify-center rounded-full border transition hover:scale-105"
                            :class="
                                colorPalette === palette.value
                                    ? 'border-[rgb(var(--portfolio-accent-rgb)/0.55)] bg-[rgb(var(--portfolio-accent-rgb)/0.14)] shadow-lg'
                                    : 'border-[rgb(var(--portfolio-accent-rgb)/0.18)] bg-[rgb(var(--portfolio-surface-strong-rgb)/0.24)]'
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
                                    v-for="swatch in paletteSwatches[
                                        palette.value
                                    ]"
                                    :key="swatch"
                                    class="size-2.5 rounded-full"
                                    :style="{ backgroundColor: swatch }"
                                />
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            <main class="flex flex-1 items-center py-16">
                <div
                    class="grid w-full gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
                >
                    <section class="space-y-6">
                        <p
                            class="portfolio-pill inline-flex px-4 py-1 text-sm font-semibold"
                        >
                            Welcome to my personal website
                        </p>

                        <div class="space-y-4">
                            <h2 class="ui-hero-title max-w-3xl sm:text-6xl">
                                My Portfolio
                            </h2>
                            <p class="ui-body max-w-2xl text-lg">
                                A personal space where I present my work,
                                highlight the projects I am building, and share
                                my journey toward becoming a skilled developer.
                            </p>
                        </div>

                        <div class="flex flex-wrap gap-4">
                            <Link
                                :href="aboutme().url"
                                class="portfolio-button-primary rounded-full px-6 py-3 text-sm font-semibold"
                            >
                                Read About Me
                            </Link>
                            <Link
                                :href="contactus().url"
                                class="portfolio-button-tonal px-6 py-3 text-sm font-semibold"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </section>

                    <section class="grid gap-4">
                        <div class="portfolio-card-surface rounded-[2rem] p-6">
                            <p class="ui-label">Learning by building</p>
                            <p class="ui-body mt-3">
                                I am continuously improving my Laravel, Vue, and
                                frontend design skills, building this portfolio
                                gradually through projects and learning
                                experiences.
                            </p>
                        </div>

                        <div class="grid gap-4 sm:grid-cols-2">
                            <div
                                class="portfolio-card-surface-strong rounded-[1.75rem] p-6"
                            >
                                <p class="ui-label">About Me</p>
                                <p class="ui-muted mt-2">
                                    a passionate developer who enjoys building
                                    web applications, learning new technologies,
                                    and improving my programming skills
                                </p>
                            </div>

                            <div
                                class="portfolio-card-surface rounded-[1.75rem] p-6"
                            >
                                <p class="ui-label">Projects</p>
                                <p class="ui-muted mt-2">
                                    A growing collection of projects and work I
                                    created to showcase my skills, creativity,
                                    experience, and continuous learning journey.
                                </p>
                            </div>

                            <div
                                class="portfolio-card-surface rounded-[1.75rem] p-6 sm:col-span-2"
                            >
                                <p class="ui-label">Contact</p>
                                <p class="ui-muted mt-2">
                                    If you want to connect with me for
                                    opportunities, collaboration, or project
                                    inquiries, you can now visit my contact
                                    page.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    </div>
</template>
