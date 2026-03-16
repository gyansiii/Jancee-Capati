<script setup lang="ts">
import { Head, Link, usePage } from '@inertiajs/vue3';
import {
    BriefcaseBusiness,
    FolderKanban,
    Layers3,
    Mail,
    UserRound,
} from 'lucide-vue-next';
import PortfolioPaletteSidebar from '@/components/PortfolioPaletteSidebar.vue';
import ProfileMediaSwap from '@/components/ProfileMediaSwap.vue';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
    aboutme,
    contactus,
    myproject,
    techstack,
    workexperience,
} from '@/routes';

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
    profileHoverImage?: string;
}>();

const page = usePage();

const navItems: NavItem[] = [
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
    {
        label: 'Contact',
        href: contactus().url,
        icon: Mail,
        match: '/ContactUs',
    },
];

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

    <div
        class="portfolio-strong-text min-h-screen overflow-x-hidden scroll-smooth"
        :style="{ backgroundColor: 'rgb(var(--portfolio-app-rgb))' }"
    >
        <div
            class="portfolio-stage-gradient pointer-events-none absolute inset-0"
        />

        <aside
            class="fixed top-1/2 left-6 z-20 hidden -translate-y-1/2 xl:block"
        >
            <Card
                class="portfolio-nav-shell min-h-[24rem] w-[4.5rem] justify-center gap-3 px-3 py-4"
            >
                <Link
                    v-for="item in navItems"
                    :key="item.label"
                    :href="item.href"
                    prefetch
                    class="flex h-12 w-12 items-center justify-center rounded-full border"
                    :class="
                        isActive(item.match)
                            ? 'portfolio-nav-item-active'
                            : props.interactive === false
                              ? 'portfolio-nav-item-idle border-transparent bg-transparent opacity-80'
                              : 'portfolio-nav-item-idle border-transparent bg-transparent transition'
                    "
                >
                    <component :is="item.icon" class="h-5 w-5" />
                </Link>
            </Card>
        </aside>
        <PortfolioPaletteSidebar />

        <div
            class="relative mx-auto flex min-h-screen w-full max-w-[1380px] flex-col gap-8 px-4 py-5 sm:px-6 lg:px-8"
        >
            <Card
                class="portfolio-frame w-full px-5 py-8 sm:px-8 lg:px-10 lg:py-10"
            >
                <CardContent
                    class="flex min-h-[calc(88svh-2rem)] flex-col items-center justify-center gap-8"
                >
                    <aside class="flex items-center justify-center xl:hidden">
                        <Card
                            class="portfolio-nav-shell w-[4.5rem] flex-row gap-3 px-3 py-4 xl:hidden"
                        >
                            <Link
                                v-for="item in navItems"
                                :key="item.label"
                                :href="item.href"
                                prefetch
                                class="flex h-12 w-12 items-center justify-center rounded-full border"
                                :class="
                                    isActive(item.match)
                                        ? 'portfolio-nav-item-active'
                                        : props.interactive === false
                                          ? 'portfolio-nav-item-idle border-transparent bg-transparent opacity-80'
                                          : 'portfolio-nav-item-idle border-transparent bg-transparent transition'
                                "
                            >
                                <component :is="item.icon" class="h-5 w-5" />
                            </Link>
                        </Card>
                    </aside>

                    <div
                        class="mx-auto flex w-full max-w-3xl flex-col items-center justify-center text-center"
                    >
                        <div
                            class="portfolio-animate-fade-up portfolio-animate-float relative mx-auto mb-5 h-36 w-36 rounded-full p-[3px] shadow-lg sm:h-40 sm:w-40"
                            :style="{
                                boxShadow:
                                    '0 24px 40px -28px rgb(var(--portfolio-glow-bottom-rgb) / 0.72)',
                            }"
                        >
                            <div
                                class="portfolio-avatar-gradient absolute inset-0 rounded-full opacity-85"
                            />
                            <ProfileMediaSwap
                                v-if="profileImage"
                                :image-src="profileImage"
                                :hover-src="profileHoverImage"
                                alt="Profile photo"
                                container-class="relative h-full w-full"
                                media-class="h-full w-full"
                                :style="{
                                    backgroundColor:
                                        'rgb(var(--portfolio-surface-strong-rgb))',
                                }"
                            />
                            <div
                                v-else
                                class="portfolio-card-surface-strong portfolio-strong-text relative flex h-full w-full items-center justify-center rounded-full text-sm font-medium tracking-[0.5em] uppercase"
                            >
                                JMC
                            </div>
                        </div>

                        <p
                            class="portfolio-animate-fade-up portfolio-animate-fade-up-delay-1 ui-eyebrow mb-4 tracking-[0.45em] opacity-75"
                        >
                            {{ badge }}
                        </p>

                        <h1
                            class="portfolio-animate-fade-up portfolio-animate-fade-up-delay-1 ui-hero-title"
                        >
                            {{ heading }}
                            <span
                                class="text-[rgb(var(--portfolio-highlight-rgb))]"
                                >{{ accent }}</span
                            >
                        </h1>

                        <p
                            class="portfolio-animate-fade-up portfolio-animate-fade-up-delay-2 portfolio-subtitle mt-3 text-xl sm:text-2xl"
                        >
                            {{ subtitle }}
                        </p>

                        <p
                            class="portfolio-animate-fade-up portfolio-animate-fade-up-delay-2 ui-body mt-6 max-w-3xl"
                        >
                            {{ description }}
                        </p>

                        <div
                            class="portfolio-animate-fade-up portfolio-animate-fade-up-delay-3 mt-8 flex flex-wrap items-center justify-center gap-4"
                        >
                            <component
                                :is="isAnchorLink(primaryHref) ? 'a' : Link"
                                :class="
                                    cn(
                                        'rounded-full px-8 py-4 text-sm font-semibold',
                                        'portfolio-button-primary',
                                        props.interactive !== false &&
                                            'transition hover:scale-[1.02]',
                                    )
                                "
                                :href="primaryHref"
                                :prefetch="
                                    !isAnchorLink(primaryHref)
                                        ? true
                                        : undefined
                                "
                                @click="
                                    isAnchorLink(primaryHref)
                                        ? scrollToSection($event, primaryHref)
                                        : null
                                "
                            >
                                {{ primaryLabel }}
                            </component>
                            <component
                                :is="isAnchorLink(secondaryHref) ? 'a' : Link"
                                :class="
                                    cn(
                                        'rounded-full px-8 py-4 text-sm font-semibold',
                                        'portfolio-button-secondary',
                                        props.interactive !== false &&
                                            'transition',
                                    )
                                "
                                :href="secondaryHref"
                                :prefetch="
                                    !isAnchorLink(secondaryHref)
                                        ? true
                                        : undefined
                                "
                                @click="
                                    isAnchorLink(secondaryHref)
                                        ? scrollToSection($event, secondaryHref)
                                        : null
                                "
                            >
                                {{ secondaryLabel }}
                            </component>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <section class="grid w-full gap-6 lg:grid-cols-2">
                <slot />
            </section>
        </div>
    </div>
</template>
