<script setup lang="ts">
import PortfolioShell from '@/components/PortfolioShell.vue';
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
</script>

<template>
    <PortfolioShell
        title="My Projects"
        badge="Portfolio Showcase"
        heading="My "
        accent="Projects"
        subtitle="A growing collection of the projects I have built and continue to improve."
        description="This section highlights some of the projects that represent my learning journey in frontend and backend development, along with the kind of systems and interfaces I enjoy building."
        primary-label="View My Projects"
        primary-href="#portfolio-showcase"
        secondary-label="Back Home"
        :secondary-href="home().url"
        :interactive="false"
        profile-image="/images/profile.jpeg"
    >
        <article
            id="portfolio-showcase"
            class="mx-auto mt-10 flex min-h-[calc(88svh-4rem)] w-full max-w-[96rem] scroll-mt-24 flex-col justify-center rounded-[1.75rem] border border-cyan-400/20 bg-slate-950/72 p-7 lg:col-span-2 xl:mt-16 xl:p-8"
        >
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">Portfolio Showcase</p>
            <h2 class="mt-4 text-2xl font-semibold text-white xl:text-3xl">Selected work and process</h2>
            <p class="mt-4 text-[15px] leading-7 text-slate-300 xl:text-base">
                My projects reflect the kind of systems and interfaces I enjoy building while growing as a developer. They show how I approach structure, usability, and problem-solving through practical web applications.
            </p>
            <p class="mt-4 text-[15px] leading-7 text-slate-300 xl:text-base">
                From management systems to portfolio interfaces, each project has helped me strengthen my understanding of frontend design, backend logic, and how to organize features in a cleaner and more maintainable way.
            </p>
            <p class="mt-4 text-[15px] leading-7 text-slate-300 xl:text-base">
                These projects also reflect the different kinds of work I enjoy most: building systems that are useful, designing interfaces that feel more intuitive, and improving how digital experiences are organized for the user. Every project has given me a chance to think more carefully about function, design, and real-world application.
            </p>
            <p class="mt-4 text-[15px] leading-7 text-slate-300 xl:text-base">
                As I continue developing my portfolio, I want each project to represent not only what I have built, but also how I solve problems, how I communicate ideas through design, and how I continue to grow from one project to the next.
            </p>

            <div class="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <div
                    v-for="project in projects"
                    :key="project.title"
                    class="rounded-2xl border border-slate-800 bg-slate-900/72 p-5"
                >
                    <p class="text-[15px] font-semibold text-white xl:text-base">{{ project.title }}</p>
                    <p class="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{{ project.stack }}</p>
                    <p class="mt-4 text-sm leading-6 text-slate-300">
                        {{ project.description }}
                    </p>
                </div>
            </div>

            <div class="mt-7 grid gap-4 md:grid-cols-2">
                <div class="rounded-2xl border border-slate-800 bg-slate-900/72 p-5">
                    <p class="text-[15px] font-semibold text-white xl:text-base">What these projects show</p>
                    <p class="mt-3 text-sm leading-6 text-slate-300">
                        These projects show my interest in building useful systems, designing cleaner interfaces, and improving how users interact with information inside a web application.
                    </p>
                    <p class="mt-3 text-sm leading-6 text-slate-300">
                        They also reflect my willingness to learn different tools and frameworks depending on what a project needs, while still focusing on usability, readability, and maintainable code.
                    </p>
                </div>
                <div class="rounded-2xl border border-slate-800 bg-slate-900/72 p-5">
                    <p class="text-[15px] font-semibold text-white xl:text-base">What I want to improve next</p>
                    <p class="mt-3 text-sm leading-6 text-slate-300">
                        I want to keep refining my portfolio, add more complete case studies, and continue building projects that strengthen both my technical skills and design confidence.
                    </p>
                    <p class="mt-3 text-sm leading-6 text-slate-300">
                        Over time, I want to include deeper project documentation, better visual presentation, and stronger explanations of my development process from planning to final output.
                    </p>
                </div>
            </div>

            <div class="mt-8 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5">
                <p class="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">Notice</p>
                <p class="mt-3 text-sm leading-7 text-amber-100/90">
                    All projects shown in this portfolio are either personal or completed for clients or companies.
                    All intellectual property rights remain with the respective companies. My role in these
                    projects was to contribute in the capacity of Frontend Developer. If you are interested in the
                    projects shown here, please directly contact the company.
                </p>
            </div>
        </article>
    </PortfolioShell>
</template>
