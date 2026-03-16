<script setup lang="ts">
import PortfolioShell from '@/components/PortfolioShell.vue';
import { home, myproject } from '@/routes';
</script>

<template>
    <PortfolioShell
        title="About Me"
        badge="Personal Profile"
        heading="Hi, I'm "
        accent="Jancee"
        subtitle="A student developer building clean and modern web pages."
        description="I am learning how to create responsive experiences with Laravel, Inertia, Vue, and Tailwind CSS. This page introduces who I am, what I enjoy building, and the direction I want to keep growing in."
        primary-label="View My Projects"
        :primary-href="myproject().url"
        secondary-label="Back Home"
        :secondary-href="home().url"
        profile-image="/images/profile.jpeg"
    >
        <article class="mx-auto mt-10 w-full max-w-[88rem] rounded-[1.75rem] border border-cyan-400/20 bg-slate-950/72 p-6 lg:col-span-2 xl:mt-16">
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">Personal Profile</p>
            <h2 class="mt-3 text-2xl font-semibold text-white">A closer look at my journey</h2>
            <p class="mt-4 text-sm leading-7 text-slate-400">
                I am a learner-focused developer building confidence in both design and development. I enjoy creating pages that feel clean, modern, and easy to understand while practicing how real applications are structured.
            </p>
            <p class="mt-4 text-sm leading-7 text-slate-400">
                This portfolio is part of that journey. I am using it to improve my layout composition, routing, reusable components, and frontend styling with Laravel, Inertia, Vue, and Tailwind CSS.
            </p>

            <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <div class="rounded-2xl border border-slate-800 bg-slate-900/72 p-4">
                    <p class="text-sm font-semibold text-white">Consistency</p>
                    <p class="mt-2 text-sm leading-6 text-slate-400">
                        I want every page to feel connected, polished, and intentional.
                    </p>
                </div>
                <div class="rounded-2xl border border-slate-800 bg-slate-900/72 p-4">
                    <p class="text-sm font-semibold text-white">Growth</p>
                    <p class="mt-2 text-sm leading-6 text-slate-400">
                        Each project is a chance for me to improve both technical and visual skills.
                    </p>
                </div>
                <div class="rounded-2xl border border-slate-800 bg-slate-900/72 p-4">
                    <p class="text-sm font-semibold text-white">Curiosity</p>
                    <p class="mt-2 text-sm leading-6 text-slate-400">
                        I enjoy experimenting with layouts, components, and better user experience ideas.
                    </p>
                </div>
                <div class="rounded-2xl border border-slate-800 bg-slate-900/72 p-4">
                    <p class="text-sm font-semibold text-white">Clean UI</p>
                    <p class="mt-2 text-sm leading-6 text-slate-400">
                        Readable content and balanced spacing matter a lot to me.
                    </p>
                </div>
            </div>
        </article>
    </PortfolioShell>
</template>
