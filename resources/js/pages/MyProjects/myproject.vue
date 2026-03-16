<script setup lang="ts">
import PortfolioShell from '@/components/PortfolioShell.vue';
import { aboutme, home } from '@/routes';

const projects = [
    {
        title: 'Portfolio Website',
        description: 'A personal site built to practice Laravel, Inertia, Vue, and styled page layouts.',
        stack: 'Laravel, Vue, Tailwind',
    },
    {
        title: 'About Me Page',
        description: 'A dedicated section for introducing my background, interests, and learning direction.',
        stack: 'Inertia Routing',
    },
    {
        title: 'Project Showcase',
        description: 'A growing space where I can present the work I am creating and improving over time.',
        stack: 'Reusable Components',
    },
    {
        title: 'UI Layout Practice',
        description: 'An ongoing experiment in gradients, glassmorphism, spacing, and neon portfolio styling.',
        stack: 'Tailwind CSS',
    },
];
</script>

<template>
    <PortfolioShell
        title="My Projects"
        badge="Portfolio Showcase"
        heading="My "
        accent="Projects"
        subtitle="A growing collection of my design and development practice."
        description="These projects show the kind of work I am learning to build: structured pages, reusable UI pieces, portfolio layouts, and clean Laravel plus Vue integrations."
        primary-label="Read About Me"
        :primary-href="aboutme().url"
        secondary-label="Back Home"
        :secondary-href="home().url"
        :interactive="false"
        profile-image="/images/profile.jpeg"
    >
        <article class="mx-auto mt-10 w-full max-w-[96rem] rounded-[1.75rem] border border-cyan-400/20 bg-slate-950/72 p-6 lg:col-span-2 xl:mt-16">
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">Portfolio Showcase</p>
            <h2 class="mt-3 text-2xl font-semibold text-white">Selected work and process</h2>
            <p class="mt-4 text-sm leading-7 text-slate-400">
                These entries represent the kind of work I am learning right now: routing pages correctly, building reusable Vue components, and shaping a portfolio that feels personal and polished.
            </p>

            <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <div
                    v-for="project in projects"
                    :key="project.title"
                    class="rounded-[1.5rem] border border-slate-800 bg-slate-900/72 p-4"
                >
                    <div class="h-28 rounded-2xl bg-[linear-gradient(135deg,rgba(37,99,235,0.75),rgba(124,58,237,0.7),rgba(34,211,238,0.6))]" />
                    <p class="mt-4 text-lg font-semibold text-white">{{ project.title }}</p>
                    <p class="mt-2 text-sm leading-6 text-slate-400">{{ project.description }}</p>
                    <p class="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{{ project.stack }}</p>
                </div>
            </div>

            <div class="mt-8 grid gap-4 md:grid-cols-2">
                <div class="rounded-2xl border border-slate-800 bg-slate-900/72 p-4">
                    <p class="text-sm font-semibold text-white">How I build</p>
                    <p class="mt-2 text-sm leading-6 text-slate-400">
                        I usually start with routing and page structure, then create reusable layout pieces, and finally refine the interface with spacing, gradients, and contrast.
                    </p>
                </div>
                <div class="rounded-2xl border border-slate-800 bg-slate-900/72 p-4">
                    <p class="text-sm font-semibold text-white">Next steps</p>
                    <p class="mt-2 text-sm leading-6 text-slate-400">
                        I want to replace placeholders with real screenshots, add project links, and write case studies that explain each project goal, process, and outcome.
                    </p>
                </div>
            </div>
        </article>
    </PortfolioShell>
</template>
