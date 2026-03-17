<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { ref } from 'vue';
import ProfileMediaSwap from '@/components/ProfileMediaSwap.vue';
import { useToast } from '@/components/ui/toast';
import {
    portfolioPalettes,
    portfolioPaletteSwatches,
    useColorPalette,
} from '@/composables/useColorPalette';
import { aboutme, contactus } from '@/routes';

const { colorPalette, updateColorPalette } = useColorPalette();
const { toast } = useToast();
const isWelcomePreviewVisible = ref(false);

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

const toggleWelcomePreview = (): void => {
    isWelcomePreviewVisible.value = !isWelcomePreviewVisible.value;
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
                class="portfolio-card-surface portfolio-animate-fade-up flex flex-col gap-4 rounded-[2rem] px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
                <div class="flex items-center gap-4">
                    <div
                        class="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-[rgb(var(--portfolio-accent-rgb)/0.18)] bg-[rgb(var(--portfolio-surface-strong-rgb)/0.65)] p-1 shadow-lg sm:h-16 sm:w-16"
                        :style="{
                            boxShadow:
                                '0 18px 30px -24px rgb(var(--portfolio-glow-bottom-rgb) / 0.88)',
                        }"
                    >
                        <ProfileMediaSwap
                            image-src="/images/profile-hover.gif"
                            hover-src="/images/profile.jpeg"
                            alt="Jancee Capati profile photo"
                            container-class="h-full w-full"
                            media-class="h-full w-full rounded-full"
                        />
                    </div>

                    <div>
                        <p class="ui-eyebrow">My Portfolio</p>
                        <h1
                            class="mt-1 text-2xl font-semibold tracking-[-0.03em]"
                        >
                            Jancee Capati
                        </h1>
                    </div>
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
                                    v-for="swatch in portfolioPaletteSwatches[
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
                    <section
                        class="portfolio-animate-fade-up portfolio-animate-fade-up-delay-1 space-y-6"
                    >
                        <div class="relative inline-flex w-fit overflow-visible">
                            <div
                                id="welcome-preview"
                                class="pointer-events-none absolute bottom-full left-1/2 z-10 mb-4 w-[min(18rem,80vw)] -translate-x-1/2 transition duration-300 ease-out"
                                :class="
                                    isWelcomePreviewVisible
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-6 opacity-0'
                                "
                                aria-hidden="true"
                            >
                                <div
                                    class="portfolio-card-surface overflow-hidden rounded-[1.75rem] border border-[rgb(var(--portfolio-accent-rgb)/0.18)] p-3 shadow-[0_24px_60px_-34px_rgb(var(--portfolio-glow-bottom-rgb)/0.9)] backdrop-blur-sm"
                                >
                                    <img
                                        src="/images/port.gif"
                                        alt="Animated developer illustration"
                                        class="h-48 w-full rounded-[1.25rem] object-cover"
                                    />
                                    <p class="ui-muted mt-3 text-center text-sm">
                                        This is my secret 🤫 a mix of logic, creativity, and late-night coding sessions that bring projects to life.
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
                                class="portfolio-pill relative inline-flex cursor-pointer px-4 py-1 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--portfolio-accent-rgb)/0.45)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--portfolio-app-rgb))]"
                                :aria-expanded="isWelcomePreviewVisible"
                                aria-controls="welcome-preview"
                                @click="toggleWelcomePreview"
                            >
                                {{
                                    isWelcomePreviewVisible
                                        ? 'Welcome to my personal website'
                                        : 'Welcome to my personal website'
                                }}
                            </button>
                        </div>

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

                    <section
                        class="portfolio-animate-fade-up portfolio-animate-fade-up-delay-2 grid gap-4"
                    >
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
