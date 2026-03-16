<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { aboutme, contactus, myproject } from '@/routes';
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
                class="portfolio-card-surface flex items-center justify-between rounded-full px-5 py-3"
            >
                <div>
                    <p class="ui-eyebrow">My Portfolio</p>
                    <h1 class="mt-1 text-2xl font-semibold tracking-[-0.03em]">
                        Jancee Capati
                    </h1>
                </div>

                <nav class="flex items-center gap-3 text-sm font-medium">
                    <Link :href="aboutme().url" class="portfolio-nav-link">
                        About Me
                    </Link>
                    <Link
                        :href="myproject().url"
                        class="portfolio-button-primary rounded-full px-4 py-2 text-sm font-semibold"
                    >
                        My Projects
                    </Link>
                    <Link :href="contactus().url" class="portfolio-nav-link">
                        Contact
                    </Link>
                </nav>
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
                                :href="myproject().url"
                                class="portfolio-button-secondary rounded-full px-6 py-3 text-sm font-semibold"
                            >
                                View My Projects
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
