<script setup lang="ts">
import { nextTick, ref } from 'vue';
import PortfolioShell from '@/components/PortfolioShell.vue';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { home } from '@/routes';

const contributionLegendColors = [
    'bg-[#ebedf0]',
    'bg-[#9be9a8]',
    'bg-[#40c463]',
    'bg-[#30a14e]',
    'bg-[#216e39]',
];

const isAboutDetailsVisible = ref(false);

const toggleAboutDetails = async (): Promise<void> => {
    isAboutDetailsVisible.value = !isAboutDetailsVisible.value;

    if (!isAboutDetailsVisible.value) {
        return;
    }

    await nextTick();

    const profileSection = document.getElementById('personal-profile');

    profileSection?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
};
</script>

<template>
    <PortfolioShell
        title="About Me"
        badge="Personal Profile"
        heading="Hi, I'm "
        accent="Jancee"
        subtitle="A student developer from the Philippines building modern web experiences."
        description="I have 3 years of experience from school projects and additional hands-on experience from my OJT, where I continued improving how I build interfaces, organize code, and work with real development tasks."
        :primary-label="
            isAboutDetailsVisible ? 'Hide About Me' : 'Read About Me'
        "
        primary-href="#personal-profile"
        primary-as-button
        :primary-expanded="isAboutDetailsVisible"
        primary-controls="personal-profile"
        secondary-label="Back Home"
        :secondary-href="home().url"
        profile-image="/images/profile.jpeg"
        profile-hover-image="/images/profile-hover.gif"
        @primary-click="toggleAboutDetails"
    >
        <div
            id="personal-profile"
            class="scroll-mt-24 lg:col-span-2"
        >
            <Transition
                enter-active-class="transition-all duration-500 ease-out"
                enter-from-class="translate-y-10 scale-[0.98] opacity-0"
                enter-to-class="translate-y-0 scale-100 opacity-100"
                leave-active-class="transition-all duration-450 ease-in"
                leave-from-class="translate-y-0 scale-100 opacity-100"
                leave-to-class="translate-y-12 scale-[0.98] opacity-0"
            >
                <article
                    v-if="isAboutDetailsVisible"
                    class="portfolio-animate-fade-up portfolio-animate-fade-up-delay-1 portfolio-panel mt-10 flex w-full max-w-[88rem] origin-top flex-col justify-start p-7 xl:mt-16 xl:p-8"
                >
                    <div class="flex w-full flex-col items-start self-start text-left">
                        <p class="ui-eyebrow">Personal Profile</p>
                        <h2 class="ui-section-title mt-4">
                            A closer look at my journey
                        </h2>
                        <p class="ui-body mt-4">
                            Hello, I'm Jancee from the Philippines, a passionate student
                            developer with 3 years of experience gained through school
                            projects and additional practical experience during my OJT.
                            Over the years, I have been building my confidence in both
                            frontend and backend development while learning how real
                            applications are planned, designed, and structured.
                        </p>
                        <p class="ui-body mt-4">
                            My current strengths are centered around Vue, TypeScript,
                            and PHP with Laravel. I enjoy building responsive
                            interfaces, organizing reusable components, and improving
                            how I connect frontend experiences with backend
                            functionality. Styling is also a big part of my growth, and
                            I like working with frameworks such as Tailwind CSS,
                            Bootstrap, `shadcn/ui`, and Ionic to create layouts that
                            feel clean, modern, and user-friendly.
                        </p>
                        <p class="ui-body mt-4">
                            Along the way, I have learned how to work both independently
                            and collaboratively. I enjoy exploring new tools, improving
                            my coding practices, and taking on projects that challenge
                            me to think more deeply about usability, maintainability,
                            and real-world problem solving. This portfolio reflects that
                            journey and the skills I continue to strengthen every day.
                        </p>
                        <p class="ui-body mt-4">
                            As I continue learning, my goal is to become a well-rounded
                            developer who can contribute not only to visually polished
                            interfaces, but also to reliable and scalable application
                            features. I am excited to keep growing through hands-on
                            work, new technologies, and opportunities that push me to
                            improve.
                        </p>
                    </div>

                    <div class="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        <Card class="portfolio-card-surface portfolio-animate-fade-up">
                            <CardHeader class="pb-0">
                                <CardTitle class="ui-card-title"
                                    >Vue + TypeScript</CardTitle
                                >
                            </CardHeader>
                            <CardContent>
                                <p class="ui-muted">
                                    I use Vue and TypeScript to build structured,
                                    maintainable, and interactive frontend experiences.
                                </p>
                            </CardContent>
                        </Card>
                        <Card class="portfolio-card-surface portfolio-animate-fade-up">
                            <CardHeader class="pb-0">
                                <CardTitle class="ui-card-title">PHP/Laravel</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p class="ui-muted">
                                    Laravel helps me understand routing, backend
                                    structure, and how full-stack applications work
                                    together.
                                </p>
                            </CardContent>
                        </Card>
                        <Card class="portfolio-card-surface portfolio-animate-fade-up">
                            <CardHeader class="pb-0">
                                <CardTitle class="ui-card-title"
                                    >UI Frameworks</CardTitle
                                >
                            </CardHeader>
                            <CardContent>
                                <p class="ui-muted">
                                    I work with Tailwind CSS, Bootstrap, `shadcn/ui`,
                                    and Ionic to create clean and responsive layouts.
                                </p>
                            </CardContent>
                        </Card>
                        <Card class="portfolio-card-surface portfolio-animate-fade-up">
                            <CardHeader class="pb-0">
                                <CardTitle class="ui-card-title"
                                    >Continuous Learning</CardTitle
                                >
                            </CardHeader>
                            <CardContent>
                                <p class="ui-muted">
                                    I am always looking for ways to improve my skills,
                                    expand my stack, and grow through real project
                                    experience.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <Card
                        class="portfolio-card-surface portfolio-animate-fade-up portfolio-animate-fade-up-delay-2 mt-10"
                    >
                        <CardHeader
                            class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
                        >
                            <div>
                                <p class="ui-label tracking-[0.3em]">GitHub</p>
                                <CardTitle class="mt-2 text-xl"
                                    >My Contributions</CardTitle
                                >
                                <CardDescription class="ui-muted mt-2">
                                    GitHub activity from my account
                                    <a
                                        href="https://github.com/gyansiii"
                                        target="_blank"
                                        rel="noreferrer"
                                        class="portfolio-strong-text font-medium"
                                    >
                                        @gyansiii
                                    </a>
                                </CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div
                                class="portfolio-card-surface-strong overflow-hidden rounded-2xl p-4"
                            >
                                <img
                                    src="https://ghchart.rshah.org/gyansiii"
                                    alt="GitHub contribution chart for gyansiii"
                                    loading="lazy"
                                    decoding="async"
                                    fetchpriority="low"
                                    class="w-full rounded-xl"
                                />

                                <div
                                    class="mt-4 flex items-center justify-end gap-2 px-1"
                                >
                                    <span
                                        class="text-sm font-medium text-[rgb(var(--portfolio-accent-text-rgb)/0.72)]"
                                        >Less</span
                                    >
                                    <span
                                        v-for="colorClass in contributionLegendColors"
                                        :key="colorClass"
                                        :class="colorClass"
                                        class="h-5 w-5 rounded-md border border-black/5 shadow-sm"
                                    />
                                    <span
                                        class="text-sm font-medium text-[rgb(var(--portfolio-accent-text-rgb)/0.72)]"
                                        >More</span
                                    >
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button
                                as-child
                                variant="outline"
                                class="portfolio-button-secondary rounded-full"
                            >
                                <a
                                    href="https://github.com/gyansiii"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View GitHub
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                </article>
            </Transition>
        </div>
    </PortfolioShell>
</template>
