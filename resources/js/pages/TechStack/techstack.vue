<script setup lang="ts">
import PortfolioShell from '@/components/PortfolioShell.vue';
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
            { name: 'Vue', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', mastery: '4/5', accent: 'from-emerald-500 to-green-400' },
            { name: 'ReactJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', mastery: '2/5', accent: 'from-sky-500 to-cyan-400' },
            { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', mastery: '3/5', accent: 'from-blue-600 to-sky-400' },
            { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', mastery: '5/5', accent: 'from-yellow-400 to-amber-500' },
            { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', mastery: '5/5', accent: 'from-orange-500 to-red-400' },
            { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', mastery: '5/5', accent: 'from-blue-500 to-indigo-500' },
            { name: 'Tailwind CSS', logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', mastery: '3/5', accent: 'from-cyan-400 to-sky-500' },
            { name: 'shadcn/ui', logo: 'https://ui.shadcn.com/favicon.ico', mastery: '4/5', accent: 'from-slate-300 to-slate-500' },
            { name: 'Ionic', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg', mastery: '3/5', accent: 'from-indigo-500 to-blue-500' },
            { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', mastery: '3/5', accent: 'from-violet-500 to-purple-500' },
        ],
    },
    {
        title: 'Backend',
        items: [
            { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', mastery: '4/5', accent: 'from-indigo-500 to-violet-500' },
            { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', mastery: '4/5', accent: 'from-red-500 to-orange-400' },
            { name: 'Postgres', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', mastery: '3/5', accent: 'from-sky-600 to-blue-500' },
            { name: 'SQLite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', mastery: '4/5', accent: 'from-emerald-500 to-teal-500' },
        ],
    },
    {
        title: 'Version Control',
        items: [
            { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', mastery: '4/5', accent: 'from-slate-600 to-slate-400' },
            { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', mastery: '4/5', accent: 'from-orange-500 to-amber-400' },
        ],
    },
    {
        title: 'Others',
        items: [
            { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', mastery: '3/5', accent: 'from-sky-500 to-blue-500' },
            { name: 'ChatGPT', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', mastery: '5/5', accent: 'from-emerald-400 to-green-500' },
            { name: 'BlackBoxAI', logo: 'https://www.blackbox.ai/apple-touch-icon.png', mastery: '5/5', accent: 'from-zinc-400 to-zinc-600' },
            { name: 'Claude AI', logo: 'https://claude.ai/images/claude_app_icon.png', mastery: '5/5', accent: 'from-orange-400 to-amber-500' },
            { name: 'Kimi AI', logo: 'https://www.kimi.com/favicon.ico', mastery: '5/5', accent: 'from-fuchsia-500 to-pink-500' },
            { name: 'Gemini', logo: 'https://www.gstatic.com/lamda/images/gemini_icon_2287f1e08e7c6a12b0f7.png', mastery: '5/5', accent: 'from-blue-400 to-violet-500' },
            { name: 'DeepSeek', logo: 'https://www.deepseek.com/favicon.ico', mastery: '5/5', accent: 'from-cyan-500 to-blue-500' },
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
            class="mx-auto mt-10 flex min-h-[calc(88svh-4rem)] w-full max-w-[88rem] scroll-mt-24 flex-col justify-center rounded-[1.75rem] border border-cyan-400/20 bg-slate-950/72 p-7 lg:col-span-2 xl:mt-16 xl:p-8"
        >
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">Tech Stack</p>
            <h2 class="mt-4 text-2xl font-semibold text-white xl:text-3xl">Tools I use and keep improving</h2>
            <p class="mt-4 text-[15px] leading-7 text-slate-300 xl:text-base">
                My tech stack continues to grow as I work on school projects, OJT tasks, and portfolio improvements. These are the tools I currently use the most and the ones I am continuing to develop with more confidence.
            </p>

            <div class="mt-8 space-y-8">
                <section v-for="section in stackSections" :key="section.title">
                    <div class="mb-4 flex items-center gap-3">
                        <div class="h-px flex-1 bg-cyan-400/20" />
                        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                            {{ section.title }}
                        </p>
                        <div class="h-px flex-1 bg-cyan-400/20" />
                    </div>

                    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        <article
                            v-for="item in section.items"
                            :key="item.name"
                            class="flex min-h-48 flex-col justify-between rounded-[1.5rem] border border-slate-800 bg-slate-900/72 p-5"
                        >
                            <div
                                class="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br p-3 shadow-md shadow-cyan-950/20"
                                :class="item.accent"
                            >
                                <img :src="item.logo" :alt="`${item.name} logo`" class="h-full w-full object-contain" />
                            </div>

                            <div class="mt-8">
                                <div class="flex items-end justify-between gap-4">
                                    <p class="text-sm font-semibold uppercase tracking-[0.08em] text-white">
                                        {{ item.name }}
                                    </p>
                                    <span class="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                                        {{ item.mastery }}
                                    </span>
                                </div>

                                <div class="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
                                    <div
                                        class="h-full rounded-full bg-[linear-gradient(90deg,#22d3ee,#60a5fa)]"
                                        :style="{ width: progressWidth(item.mastery) }"
                                    />
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        </article>
    </PortfolioShell>
</template>
