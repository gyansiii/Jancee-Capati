<script setup lang="ts">
import PortfolioShell from '@/components/PortfolioShell.vue';
import { myproject } from '@/routes';

const experiences = [
    {
        title: 'Portfolio Development',
        period: 'Current',
        description: 'Building my own portfolio site to practice Laravel, Inertia, Vue, responsive layouts, and reusable page components.',
    },
    {
        title: 'Frontend Layout Practice',
        period: 'Ongoing',
        description: 'Exploring spacing, typography, cards, hero sections, and page composition to create cleaner and more confident interfaces.',
    },
    {
        title: 'Learning Full-Stack Workflow',
        period: 'Ongoing',
        description: 'Working on connecting frontend pages with Laravel routes and improving how I structure projects from backend to UI.',
    },
];
</script>

<template>
    <PortfolioShell
        title="Work Experience"
        badge="Work Experience"
        heading="My "
        accent="Experience"
        subtitle="Projects and practice that are shaping my skills right now."
        description="I am still growing my experience, so this page highlights the practical work and learning-based projects I am actively building as part of my development journey."
        primary-label="View Experience"
        primary-href="#work-experience"
        secondary-label="My Projects"
        :secondary-href="myproject().url"
        profile-image="/images/profile.jpeg"
    >
        <article id="work-experience" class="mx-auto mt-10 w-full max-w-[96rem] scroll-mt-24 rounded-[1.75rem] border border-cyan-400/20 bg-slate-950/72 p-6 lg:col-span-2 xl:mt-16">
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">Work Experience</p>
            <h2 class="mt-3 text-2xl font-semibold text-white">Hands-on learning experience</h2>
            <p class="mt-4 text-sm leading-7 text-slate-400">
                My current experience comes from building projects, refining interfaces, and practicing how to turn ideas into working Laravel and Vue pages.
            </p>

            <div class="mt-8 space-y-4">
                <div
                    v-for="experience in experiences"
                    :key="experience.title"
                    class="rounded-2xl border border-slate-800 bg-slate-900/72 p-5"
                >
                    <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <p class="text-lg font-semibold text-white">{{ experience.title }}</p>
                        <p class="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{{ experience.period }}</p>
                    </div>
                    <p class="mt-3 text-sm leading-6 text-slate-400">{{ experience.description }}</p>
                </div>
            </div>

            <div class="mt-8 grid gap-4 md:grid-cols-2">
                <div class="rounded-2xl border border-slate-800 bg-slate-900/72 p-4">
                    <p class="text-sm font-semibold text-white">What I am learning from it</p>
                    <p class="mt-2 text-sm leading-6 text-slate-400">
                        These projects are helping me improve my confidence with routing, component reuse, visual hierarchy, and page-level design decisions.
                    </p>
                </div>
                <div class="rounded-2xl border border-slate-800 bg-slate-900/72 p-4">
                    <p class="text-sm font-semibold text-white">Where I want to grow</p>
                    <p class="mt-2 text-sm leading-6 text-slate-400">
                        I want to keep building stronger real-world projects, improve my frontend precision, and gain more experience with complete application flows.
                    </p>
                </div>
            </div>
        </article>
    </PortfolioShell>
</template>
