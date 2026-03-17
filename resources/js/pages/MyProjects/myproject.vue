<script setup lang="ts">
import { nextTick, ref } from 'vue';
import PortfolioShell from '@/components/PortfolioShell.vue';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { home } from '@/routes';

const projects = [
    {
        title: 'Plantcify',
        stack: 'React, TypeScript, Ionic, Firebase',
        description:
            'Plantcify is a web-based plant identification and disease detection application developed using React and Ionic. It allows users to scan plants, explore a library of medicinal plants, and view detailed information including scientific names, uses, symptoms of diseases, and treatment recommendations.',
    },
    {
        title: 'Registration System',
        stack: 'Laravel, Vue, shadcn/ui',
        description:
            'This Registration System is a web application developed using Laravel and Vue that simplifies the process of collecting and managing registration data. It allows users to submit required information and documents through structured forms, while administrators can review submissions, manage records, and generate PDF documents.',
    },
    {
        title: 'My Portfolio',
        stack: 'Vue, TypeScript, Tailwind CSS',
        description:
            'My personal portfolio website where I showcase my background, skills, projects, and the design direction I am continuing to improve while learning modern frontend and full-stack development.',
    },
];

const isProjectsVisible = ref(false);

const toggleProjects = async (): Promise<void> => {
    isProjectsVisible.value = !isProjectsVisible.value;

    if (!isProjectsVisible.value) {
        return;
    }

    await nextTick();

    const projectSection = document.getElementById('portfolio-showcase');

    projectSection?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
};
</script>

<template>
    <PortfolioShell
        title="My Projects"
        badge="Portfolio Showcase"
        heading="My "
        accent="Projects"
        subtitle="A growing collection of the projects I have built and continue to improve."
        description="This section highlights some of the projects that represent my learning journey in frontend and backend development, along with the kind of systems and interfaces I enjoy building."
        :primary-label="
            isProjectsVisible ? 'Hide My Projects' : 'View My Projects'
        "
        primary-href="#portfolio-showcase"
        primary-as-button
        :primary-expanded="isProjectsVisible"
        primary-controls="portfolio-showcase"
        secondary-label="Back Home"
        :secondary-href="home().url"
        :interactive="false"
        profile-image="/images/profile.jpeg"
        profile-hover-image="/images/profile-hover.gif"
        @primary-click="toggleProjects"
    >
        <div
            id="portfolio-showcase"
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
                    v-if="isProjectsVisible"
                    class="portfolio-animate-fade-up portfolio-animate-fade-up-delay-1 portfolio-panel mt-10 flex w-full max-w-[96rem] origin-top flex-col justify-start p-7 xl:mt-16 xl:p-8"
                >
                    <div class="flex w-full flex-col items-start self-start text-left">
                        <p class="ui-eyebrow">Portfolio Showcase</p>
                        <h2 class="ui-section-title mt-4">Selected work and process</h2>
                        <p class="ui-body mt-4">
                            My projects reflect the kind of systems and interfaces I
                            enjoy building while growing as a developer. They show how I
                            approach structure, usability, and problem-solving through
                            practical web applications.
                        </p>
                        <p class="ui-body mt-4">
                            From management systems to portfolio interfaces, each
                            project has helped me strengthen my understanding of
                            frontend design, backend logic, and how to organize features
                            in a cleaner and more maintainable way.
                        </p>
                        <p class="ui-body mt-4">
                            These projects also reflect the different kinds of work I
                            enjoy most: building systems that are useful, designing
                            interfaces that feel more intuitive, and improving how
                            digital experiences are organized for the user. Every
                            project has given me a chance to think more carefully about
                            function, design, and real-world application.
                        </p>
                        <p class="ui-body mt-4">
                            As I continue developing my portfolio, I want each project
                            to represent not only what I have built, but also how I
                            solve problems, how I communicate ideas through design, and
                            how I continue to grow from one project to the next.
                        </p>
                    </div>

                    <div class="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        <Card
                            v-for="project in projects"
                            :key="project.title"
                            class="portfolio-card-surface portfolio-animate-fade-up"
                        >
                            <CardHeader class="pb-2">
                                <CardTitle class="ui-card-title">{{
                                    project.title
                                }}</CardTitle>
                                <CardDescription class="ui-label">{{
                                    project.stack
                                }}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p class="ui-muted">
                                    {{ project.description }}
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <div class="mt-7 grid gap-4 md:grid-cols-2">
                        <Card
                            class="portfolio-card-surface portfolio-animate-fade-up portfolio-animate-fade-up-delay-2"
                        >
                            <CardHeader class="pb-2">
                                <CardTitle class="ui-card-title"
                                    >What these projects show</CardTitle
                                >
                            </CardHeader>
                            <CardContent class="space-y-3">
                                <p class="ui-muted">
                                    These projects show my interest in building useful
                                    systems, designing cleaner interfaces, and improving
                                    how users interact with information inside a web
                                    application.
                                </p>
                                <p class="ui-muted">
                                    They also reflect my willingness to learn different
                                    tools and frameworks depending on what a project
                                    needs, while still focusing on usability,
                                    readability, and maintainable code.
                                </p>
                            </CardContent>
                        </Card>
                        <Card
                            class="portfolio-card-surface portfolio-animate-fade-up portfolio-animate-fade-up-delay-3"
                        >
                            <CardHeader class="pb-2">
                                <CardTitle class="ui-card-title"
                                    >What I want to improve next</CardTitle
                                >
                            </CardHeader>
                            <CardContent class="space-y-3">
                                <p class="ui-muted">
                                    I want to keep refining my portfolio, add more
                                    complete case studies, and continue building
                                    projects that strengthen both my technical skills
                                    and design confidence.
                                </p>
                                <p class="ui-muted">
                                    Over time, I want to include deeper project
                                    documentation, better visual presentation, and
                                    stronger explanations of my development process from
                                    planning to final output.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <Alert
                        class="portfolio-animate-fade-up portfolio-animate-fade-up-delay-3 portfolio-callout-strong mt-8"
                    >
                        <AlertTitle class="ui-label">Notice</AlertTitle>
                        <AlertDescription class="ui-body mt-3 leading-7">
                            All projects shown in this portfolio are either personal or
                            completed for clients or companies. All intellectual
                            property rights remain with the respective companies. My
                            role in these projects was to contribute in the capacity of
                            Frontend Developer. If you are interested in the projects
                            shown here, please directly contact the company.
                        </AlertDescription>
                    </Alert>
                </article>
            </Transition>
        </div>
    </PortfolioShell>
</template>
