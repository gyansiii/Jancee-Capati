<script setup lang="ts">
import { computed } from 'vue';
import { Head, Link, usePage } from '@inertiajs/vue3';
import { BriefcaseBusiness, FolderKanban, Layers3, UserRound } from 'lucide-vue-next';
import { aboutme, myproject, techstack, workexperience } from '@/routes';

type NavItem = {
    label: string;
    href: string;
    icon: typeof UserRound;
    match: string;
};

const props = defineProps<{
    title: string;
    badge: string;
    heading: string;
    accent: string;
    subtitle: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
    interactive?: boolean;
    profileImage?: string;
}>();

const page = usePage();

const navItems = computed<NavItem[]>(() => [
    {
        label: 'About',
        href: aboutme().url,
        icon: UserRound,
        match: '/Aboutme',
    },
    {
        label: 'Projects',
        href: myproject().url,
        icon: FolderKanban,
        match: '/MyProjects',
    },
    {
        label: 'Tech Stack',
        href: techstack().url,
        icon: Layers3,
        match: '/TechStack',
    },
    {
        label: 'Work Experience',
        href: workexperience().url,
        icon: BriefcaseBusiness,
        match: '/WorkExperience',
    },
]);

const isActive = (match: string): boolean => {
    return page.url === match;
};

const isAnchorLink = (href: string): boolean => {
    return href.startsWith('#');
};

const scrollToSection = (event: Event, href: string): void => {
    if (!isAnchorLink(href)) {
        return;
    }

    event.preventDefault();

    const target = document.querySelector(href);

    if (!(target instanceof HTMLElement)) {
        return;
    }

    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
};
</script>

<template>
    <Head :title="title" />

    <div class="min-h-screen overflow-hidden scroll-smooth bg-[#04070f] text-white">
        <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(49,46,129,0.2),transparent_35%,rgba(15,118,110,0.12)_100%)]" />

        <aside class="fixed left-6 top-1/2 z-20 hidden -translate-y-1/2 xl:block">
            <div class="flex min-h-[24rem] flex-col items-center justify-center gap-3 rounded-[2rem] border border-cyan-400/15 bg-[#132033] px-3 py-4 shadow-lg shadow-cyan-950/20">
                <Link
                    v-for="item in navItems"
                    :key="item.label"
                    :href="item.href"
                    class="flex h-12 w-12 items-center justify-center rounded-full border"
                    :class="
                        isActive(item.match)
                            ? 'border-cyan-300/70 bg-cyan-400/25 text-cyan-200 shadow-md shadow-cyan-900/30'
                            : props.interactive === false
                              ? 'border-transparent bg-transparent text-slate-500'
                              : 'border-transparent bg-transparent text-slate-500 transition hover:border-cyan-400/30 hover:text-cyan-200'
                    "
                >
                    <component :is="item.icon" class="h-5 w-5" />
                </Link>
            </div>
        </aside>

        <div class="relative mx-auto flex min-h-screen max-w-[1380px] flex-col gap-8 px-4 py-5 sm:px-6 lg:px-8 xl:pl-24">
            <section class="rounded-[2rem] border border-cyan-400/20 bg-[#101827]/82 px-5 py-8 shadow-xl shadow-cyan-950/10 sm:px-8 lg:px-10 lg:py-10">
                <div class="grid min-h-[calc(88svh-2rem)] gap-8 xl:grid-cols-[72px_minmax(0,1fr)]">
                    <aside class="flex items-center justify-center xl:justify-start">
                        <div class="flex flex-row gap-3 rounded-[2rem] border border-cyan-400/15 bg-[#132033] px-3 py-4 shadow-lg shadow-cyan-950/20 xl:hidden">
                            <Link
                                v-for="item in navItems"
                                :key="item.label"
                                :href="item.href"
                                class="flex h-12 w-12 items-center justify-center rounded-full border"
                                :class="
                                    isActive(item.match)
                                        ? 'border-cyan-300/70 bg-cyan-400/25 text-cyan-200 shadow-md shadow-cyan-900/30'
                                        : props.interactive === false
                                          ? 'border-transparent bg-transparent text-slate-500'
                                          : 'border-transparent bg-transparent text-slate-500 transition hover:border-cyan-400/30 hover:text-cyan-200'
                                "
                            >
                                <component :is="item.icon" class="h-5 w-5" />
                            </Link>
                        </div>
                    </aside>

                    <div class="mx-auto flex w-full max-w-3xl flex-col items-center justify-center text-center">
                        <div class="relative mb-5 h-36 w-36 rounded-full p-[3px] shadow-lg shadow-cyan-950/30 sm:h-40 sm:w-40">
                            <div class="absolute inset-0 rounded-full bg-[linear-gradient(145deg,#14b8a6,#6d28d9,#0ea5e9)] opacity-85" />
                            <div
                                v-if="profileImage"
                                class="relative h-full w-full overflow-hidden rounded-full bg-slate-950"
                            >
                                <img :src="profileImage" alt="Profile photo" class="h-full w-full object-cover" />
                            </div>
                            <div
                                v-else
                                class="relative flex h-full w-full items-center justify-center rounded-full bg-[radial-gradient(circle_at_top,#111827,#030712)] text-sm font-medium uppercase tracking-[0.5em] text-cyan-200"
                            >
                                JMC
                            </div>
                        </div>

                        <p class="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-cyan-300/75">
                            {{ badge }}
                        </p>

                        <h1 class="text-4xl font-semibold tracking-tight text-white sm:text-5xl xl:text-6xl">
                            {{ heading }}
                            <span class="bg-[linear-gradient(90deg,#60a5fa,#22d3ee)] bg-clip-text text-transparent">{{ accent }}</span>
                        </h1>

                        <p class="mt-3 text-xl text-cyan-200/75 sm:text-2xl">
                            {{ subtitle }}
                        </p>

                        <p class="mt-6 max-w-3xl text-sm leading-7 text-slate-300/80 sm:text-base">
                            {{ description }}
                        </p>

                        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
                            <component
                                :is="isAnchorLink(primaryHref) ? 'a' : Link"
                                :class="[
                                    'rounded-full bg-[linear-gradient(90deg,#3b82f6,#22d3ee)] px-8 py-4 text-sm font-semibold text-white shadow-md shadow-cyan-950/30',
                                    props.interactive === false ? '' : 'transition hover:scale-[1.02]',
                                ]"
                                :href="primaryHref"
                                @click="isAnchorLink(primaryHref) ? scrollToSection($event, primaryHref) : null"
                            >
                                {{ primaryLabel }}
                            </component>
                            <component
                                :is="isAnchorLink(secondaryHref) ? 'a' : Link"
                                :class="[
                                    'rounded-full border border-slate-700 bg-transparent px-8 py-4 text-sm font-semibold text-slate-100',
                                    props.interactive === false ? '' : 'transition hover:border-cyan-400/70 hover:text-cyan-200',
                                ]"
                                :href="secondaryHref"
                                @click="isAnchorLink(secondaryHref) ? scrollToSection($event, secondaryHref) : null"
                            >
                                {{ secondaryLabel }}
                            </component>
                        </div>
                    </div>
                </div>
            </section>

            <section class="grid gap-6 lg:grid-cols-2">
                <slot />
            </section>
        </div>
    </div>
</template>
