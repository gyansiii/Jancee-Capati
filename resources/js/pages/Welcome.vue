<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { aboutme, contactus, myproject } from '@/routes';
</script>

<template>
    <Head title="My Portfolio" />

    <div
        class="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#e0f2fe_45%,#fef3c7_100%)] text-slate-900"
    >
        <div
            class="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10 lg:px-10"
        >
            <header
                class="flex items-center justify-between rounded-full border border-white/70 bg-white/60 px-5 py-3 shadow-sm backdrop-blur"
            >
                <div>
                    <p
                        class="text-xs font-medium tracking-[0.3em] text-sky-700 uppercase"
                    >
                        My Portfolio
                    </p>
                    <h1 class="text-2xl font-semibold text-slate-950">
                        Jancee Capati
                    </h1>
                </div>

                <nav class="flex items-center gap-3 text-sm font-medium">
                    <Link
                        :href="aboutme().url"
                        class="rounded-full px-4 py-2 text-slate-700 transition hover:bg-slate-900 hover:text-white"
                    >
                        About Me
                    </Link>
                    <Link
                        :href="myproject().url"
                        class="rounded-full bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-700"
                    >
                        My Projects
                    </Link>
                    <Link
                        :href="contactus().url"
                        class="rounded-full px-4 py-2 text-slate-700 transition hover:bg-slate-900 hover:text-white"
                    >
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
                            class="inline-flex rounded-full border border-sky-200 bg-white/80 px-4 py-1 text-sm font-medium text-sky-700 shadow-sm"
                        >
                            Welcome to my personal website
                        </p>

                        <div class="space-y-4">
                            <h2
                                class="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl"
                            >
                                My Portfolio
                            </h2>
                            <p
                                class="max-w-2xl text-lg leading-8 text-slate-700"
                            >
                                A personal space where I present my work,
                                highlight the projects I am building, and share
                                my journey toward becoming a skilled developer.
                            </p>
                        </div>

                        <div class="flex flex-wrap gap-4">
                            <Link
                                :href="aboutme().url"
                                class="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-500"
                            >
                                Read About Me
                            </Link>
                            <Link
                                :href="myproject().url"
                                class="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900"
                            >
                                View My Projects
                            </Link>
                            <Link
                                :href="contactus().url"
                                class="rounded-full border border-sky-200 bg-sky-50 px-6 py-3 text-sm font-semibold text-sky-700 transition hover:border-sky-500 hover:bg-sky-100"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </section>

                    <section class="grid gap-4">
                        <div
                            class="rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-xl shadow-sky-100 backdrop-blur"
                        >
                            <p
                                class="text-sm font-medium tracking-[0.3em] text-amber-600 uppercase"
                            >
                                Learning by building
                            </p>
                            <p class="mt-3 text-base leading-7 text-slate-700">
                                I am continuously improving my Laravel, Vue, and
                                frontend design skills, building this portfolio
                                gradually through projects and learning
                                experiences.
                            </p>
                        </div>

                        <div class="grid gap-4 sm:grid-cols-2">
                            <div
                                class="rounded-[1.75rem] bg-slate-900 p-6 text-white shadow-lg"
                            >
                                <p
                                    class="text-sm tracking-[0.25em] text-sky-300 uppercase"
                                >
                                    About Me
                                </p>
                                <p
                                    class="mt-2 text-sm leading-6 text-slate-300"
                                >
                                    a passionate developer who enjoys building
                                    web applications, learning new technologies,
                                    and improving my programming skills
                                </p>
                            </div>

                            <div
                                class="rounded-[1.75rem] bg-amber-300 p-6 text-slate-950 shadow-lg shadow-amber-100"
                            >
                                <p
                                    class="text-sm tracking-[0.25em] text-amber-900 uppercase"
                                >
                                    Projects
                                </p>
                                <p
                                    class="mt-2 text-sm leading-6 text-amber-950/80"
                                >
                                    A growing collection of projects and work I
                                    created to showcase my skills, creativity,
                                    experience, and continuous learning journey.
                                </p>
                            </div>

                            <div
                                class="rounded-[1.75rem] border border-sky-200 bg-sky-100 p-6 text-slate-950 shadow-lg shadow-sky-100 sm:col-span-2"
                            >
                                <p
                                    class="text-sm tracking-[0.25em] text-sky-700 uppercase"
                                >
                                    Contact
                                </p>
                                <p
                                    class="mt-2 text-sm leading-6 text-slate-700"
                                >
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
