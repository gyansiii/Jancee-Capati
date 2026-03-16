<script setup lang="ts">
import PortfolioShell from '@/components/PortfolioShell.vue';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { home } from '@/routes';

type StackCard = {
    name: string;
    logo: string;
    mastery: string;
    accent: string;
};

type StackSection = {
    title: string;
    items: StackCard[];
};

const stackSections: StackSection[] = [
    {
        title: 'Frontend',
        items: [
            {
                name: 'Vue',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
                mastery: '4/5',
                accent: 'from-emerald-500 to-green-400',
            },
            {
                name: 'ReactJS',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                mastery: '2/5',
                accent: 'from-sky-500 to-cyan-400',
            },
            {
                name: 'TypeScript',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
                mastery: '3/5',
                accent: 'from-blue-600 to-sky-400',
            },
            {
                name: 'JavaScript',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                mastery: '5/5',
                accent: 'from-yellow-400 to-amber-500',
            },
            {
                name: 'HTML',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
                mastery: '5/5',
                accent: 'from-orange-500 to-red-400',
            },
            {
                name: 'CSS',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
                mastery: '5/5',
                accent: 'from-blue-500 to-indigo-500',
            },
            {
                name: 'Tailwind CSS',
                logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
                mastery: '3/5',
                accent: 'from-cyan-400 to-sky-500',
            },
            {
                name: 'shadcn/ui',
                logo: 'https://ui.shadcn.com/favicon.ico',
                mastery: '4/5',
                accent: 'from-slate-300 to-slate-500',
            },
            {
                name: 'Ionic',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
                mastery: '3/5',
                accent: 'from-indigo-500 to-blue-500',
            },
            {
                name: 'Bootstrap',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
                mastery: '3/5',
                accent: 'from-violet-500 to-purple-500',
            },
        ],
    },
    {
        title: 'Backend',
        items: [
            {
                name: 'PHP',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
                mastery: '4/5',
                accent: 'from-indigo-500 to-violet-500',
            },
            {
                name: 'Laravel',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
                mastery: '4/5',
                accent: 'from-red-500 to-orange-400',
            },
            {
                name: 'Firebase',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
                mastery: '3/5',
                accent: 'from-amber-400 to-orange-500',
            },
            {
                name: 'Postgres',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
                mastery: '3/5',
                accent: 'from-sky-600 to-blue-500',
            },
            {
                name: 'SQLite',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
                mastery: '4/5',
                accent: 'from-emerald-500 to-teal-500',
            },
        ],
    },
    {
        title: 'Version Control',
        items: [
            {
                name: 'GitHub',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
                mastery: '4/5',
                accent: 'from-slate-600 to-slate-400',
            },
            {
                name: 'Git',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
                mastery: '4/5',
                accent: 'from-orange-500 to-amber-400',
            },
        ],
    },
    {
        title: 'Others',
        items: [
            {
                name: 'Docker',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
                mastery: '3/5',
                accent: 'from-sky-500 to-blue-500',
            },
            {
                name: 'ChatGPT',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
                mastery: '5/5',
                accent: 'from-emerald-400 to-green-500',
            },
            {
                name: 'BlackBoxAI',
                logo: 'https://www.blackbox.ai/apple-touch-icon.png',
                mastery: '5/5',
                accent: 'from-zinc-400 to-zinc-600',
            },
            {
                name: 'Claude AI',
                logo: 'https://claude.ai/images/claude_app_icon.png',
                mastery: '5/5',
                accent: 'from-orange-400 to-amber-500',
            },
            {
                name: 'Kimi AI',
                logo: 'https://www.kimi.com/favicon.ico',
                mastery: '5/5',
                accent: 'from-fuchsia-500 to-pink-500',
            },
            {
                name: 'Gemini',
                logo: 'https://www.gstatic.com/lamda/images/gemini_icon_2287f1e08e7c6a12b0f7.png',
                mastery: '5/5',
                accent: 'from-blue-400 to-violet-500',
            },
            {
                name: 'DeepSeek',
                logo: 'https://www.deepseek.com/favicon.ico',
                mastery: '5/5',
                accent: 'from-cyan-500 to-blue-500',
            },
        ],
    },
];

const progressWidth = (mastery: string): string => {
    const value = Number.parseInt(mastery.split('/')[0] ?? '0', 10);
    const percentage = Math.max(0, Math.min(5, value)) * 20;

    return `${percentage}%`;
};
</script>

<template>
    <PortfolioShell
        title="Tech Stack"
        badge="Tech Stack"
        heading="My "
        accent="Tech Stack"
        subtitle="The tools and technologies I use while building projects."
        description="This section groups the technologies I work with into the areas I use most often, together with a simple personal rating of how confident I currently feel using each one."
        primary-label="View Tech Stack"
        primary-href="#tech-stack"
        secondary-label="Back Home"
        :secondary-href="home().url"
        profile-image="/images/profile.jpeg"
    >
        <article
            id="tech-stack"
            class="portfolio-panel mx-auto mt-10 flex min-h-[calc(88svh-4rem)] w-full max-w-[88rem] scroll-mt-24 flex-col justify-center p-7 lg:col-span-2 xl:mt-16 xl:p-8"
        >
            <div class="portfolio-page-intro">
                <p class="ui-eyebrow">Tech Stack</p>
                <h2 class="ui-section-title mt-4">
                    Tools I use and keep improving
                </h2>
                <p class="ui-body mt-4">
                    My tech stack continues to grow as I work on school
                    projects, OJT tasks, and portfolio improvements. These are
                    the tools I currently use the most and the ones I am
                    continuing to develop with more confidence.
                </p>
            </div>

            <div class="mt-8 space-y-8">
                <section v-for="section in stackSections" :key="section.title">
                    <div class="mb-4 flex items-center gap-3">
                        <div class="portfolio-rule h-px flex-1" />
                        <p class="ui-label text-sm tracking-[0.3em]">
                            {{ section.title }}
                        </p>
                        <div class="portfolio-rule h-px flex-1" />
                    </div>

                    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        <Card
                            v-for="item in section.items"
                            :key="item.name"
                            class="portfolio-card-surface min-h-48 justify-between"
                        >
                            <CardHeader class="pb-2">
                                <div
                                    class="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br p-3 shadow-md"
                                    :class="item.accent"
                                >
                                    <img
                                        :src="item.logo"
                                        :alt="`${item.name} logo`"
                                        loading="lazy"
                                        decoding="async"
                                        fetchpriority="low"
                                        class="h-full w-full object-contain"
                                    />
                                </div>
                            </CardHeader>

                            <CardContent class="mt-auto">
                                <div
                                    class="flex items-end justify-between gap-4"
                                >
                                    <CardTitle
                                        class="portfolio-strong-text text-sm font-semibold tracking-[0.08em] uppercase"
                                    >
                                        {{ item.name }}
                                    </CardTitle>
                                    <span class="ui-chip">
                                        {{ item.mastery }}
                                    </span>
                                </div>

                                <div
                                    class="portfolio-progress-track mt-3 h-2 overflow-hidden rounded-full"
                                >
                                    <div
                                        class="portfolio-progress-fill h-full rounded-full"
                                        :style="{
                                            width: progressWidth(item.mastery),
                                        }"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </article>
    </PortfolioShell>
</template>
