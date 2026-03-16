<script setup lang="ts">
import PortfolioShell from '@/components/PortfolioShell.vue';
import { home } from '@/routes';

const stacks = [
    {
        name: 'Laravel',
        description: 'I use Laravel for routing, backend structure, controllers, and building clean full-stack features.',
        level: 'Backend Framework',
    },
    {
        name: 'Vue',
        description: 'Vue helps me build pages with reusable components and a more organized frontend structure.',
        level: 'Frontend Framework',
    },
    {
        name: 'Inertia',
        description: 'Inertia lets me connect Laravel and Vue smoothly without building a separate API first.',
        level: 'Bridge Layer',
    },
    {
        name: 'Tailwind CSS',
        description: 'Tailwind is what I use to style layouts, spacing, typography, and responsive page sections.',
        level: 'Styling System',
    },
];
</script>

<template>
    <PortfolioShell
        title="Tech Stack"
        badge="Tech Stack"
        heading="My "
        accent="Tech Stack"
        subtitle="The tools I use to build and improve my projects."
        description="This page highlights the technologies I am currently practicing and the tools I rely on while building portfolio pages and Laravel plus Vue applications."
        primary-label="View Tech Stack"
        primary-href="#tech-stack"
        secondary-label="Back Home"
        :secondary-href="home().url"
        profile-image="/images/profile.jpeg"
    >
        <article id="tech-stack" class="mx-auto mt-10 w-full max-w-[96rem] scroll-mt-24 rounded-[1.75rem] border border-cyan-400/20 bg-slate-950/72 p-6 lg:col-span-2 xl:mt-16">
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">Tech Stack</p>
            <h2 class="mt-3 text-2xl font-semibold text-white">Tools I am building with</h2>
            <p class="mt-4 text-sm leading-7 text-slate-400">
                I am focused on a stack that helps me build structured pages, improve my frontend design, and connect interface work with real Laravel application logic.
            </p>

            <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <div
                    v-for="stack in stacks"
                    :key="stack.name"
                    class="rounded-2xl border border-slate-800 bg-slate-900/72 p-4"
                >
                    <p class="text-lg font-semibold text-white">{{ stack.name }}</p>
                    <p class="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{{ stack.level }}</p>
                    <p class="mt-4 text-sm leading-6 text-slate-400">{{ stack.description }}</p>
                </div>
            </div>

            <div class="mt-8 grid gap-4 md:grid-cols-2">
                <div class="rounded-2xl border border-slate-800 bg-slate-900/72 p-4">
                    <p class="text-sm font-semibold text-white">Current focus</p>
                    <p class="mt-2 text-sm leading-6 text-slate-400">
                        I am improving how I structure pages, organize UI components, and build more polished layouts with a consistent visual language.
                    </p>
                </div>
                <div class="rounded-2xl border border-slate-800 bg-slate-900/72 p-4">
                    <p class="text-sm font-semibold text-white">What I want next</p>
                    <p class="mt-2 text-sm leading-6 text-slate-400">
                        I want to deepen my Laravel patterns, get faster with Vue components, and make my portfolio feel more complete and professional.
                    </p>
                </div>
            </div>
        </article>
    </PortfolioShell>
</template>
