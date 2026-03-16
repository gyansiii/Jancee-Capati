<script setup lang="ts">
import PortfolioShell from '@/components/PortfolioShell.vue';
import { home } from '@/routes';
</script>

<template>
    <PortfolioShell
        title="About Me"
        badge="Personal Profile"
        heading="Hi, I'm "
        accent="Jancee"
        subtitle="A student developer from the Philippines building modern web experiences."
        description="I have 3 years of experience from school projects and additional hands-on experience from my OJT, where I continued improving how I build interfaces, organize code, and work with real development tasks."
        primary-label="Read About Me"
        primary-href="#personal-profile"
        secondary-label="Back Home"
        :secondary-href="home().url"
        profile-image="/images/profile.jpeg"
    >
        <article
            id="personal-profile"
            class="mx-auto mt-10 flex min-h-[calc(88svh-4rem)] w-full max-w-[88rem] scroll-mt-24 flex-col justify-center rounded-[1.75rem] border border-cyan-400/20 bg-slate-950/72 p-7 lg:col-span-2 xl:mt-16 xl:p-8"
        >
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">Personal Profile</p>
            <h2 class="mt-4 text-2xl font-semibold text-white xl:text-3xl">A closer look at my journey</h2>
            <p class="mt-4 text-[15px] leading-7 text-slate-300 xl:text-base">
                Hello, I'm Jancee from the Philippines, a passionate student developer with 3 years of experience gained through school projects and additional practical experience during my OJT. Over the years, I have been building my confidence in both frontend and backend development while learning how real applications are planned, designed, and structured.
            </p>
            <p class="mt-4 text-[15px] leading-7 text-slate-300 xl:text-base">
                My current strengths are centered around Vue, TypeScript, and PHP with Laravel. I enjoy building responsive interfaces, organizing reusable components, and improving how I connect frontend experiences with backend functionality. Styling is also a big part of my growth, and I like working with frameworks such as Tailwind CSS, Bootstrap, `shadcn/ui`, and Ionic to create layouts that feel clean, modern, and user-friendly.
            </p>
            <p class="mt-4 text-[15px] leading-7 text-slate-300 xl:text-base">
                Along the way, I have learned how to work both independently and collaboratively. I enjoy exploring new tools, improving my coding practices, and taking on projects that challenge me to think more deeply about usability, maintainability, and real-world problem solving. This portfolio reflects that journey and the skills I continue to strengthen every day.
            </p>
            <p class="mt-4 text-[15px] leading-7 text-slate-300 xl:text-base">
                As I continue learning, my goal is to become a well-rounded developer who can contribute not only to visually polished interfaces, but also to reliable and scalable application features. I am excited to keep growing through hands-on work, new technologies, and opportunities that push me to improve.
            </p>

            <div class="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <div class="rounded-2xl border border-slate-800 bg-slate-900/72 p-4">
                    <p class="text-[15px] font-semibold text-white xl:text-base">Vue + TypeScript</p>
                    <p class="mt-2 text-sm leading-6 text-slate-300">
                        I use Vue and TypeScript to build structured, maintainable, and interactive frontend experiences.
                    </p>
                </div>
                <div class="rounded-2xl border border-slate-800 bg-slate-900/72 p-4">
                    <p class="text-[15px] font-semibold text-white xl:text-base">PHP/Laravel</p>
                    <p class="mt-2 text-sm leading-6 text-slate-300">
                        Laravel helps me understand routing, backend structure, and how full-stack applications work together.
                    </p>
                </div>
                <div class="rounded-2xl border border-slate-800 bg-slate-900/72 p-4">
                    <p class="text-[15px] font-semibold text-white xl:text-base">UI Frameworks</p>
                    <p class="mt-2 text-sm leading-6 text-slate-300">
                        I work with Tailwind CSS, Bootstrap, `shadcn/ui`, and Ionic to create clean and responsive layouts.
                    </p>
                </div>
                <div class="rounded-2xl border border-slate-800 bg-slate-900/72 p-4">
                    <p class="text-[15px] font-semibold text-white xl:text-base">Continuous Learning</p>
                    <p class="mt-2 text-sm leading-6 text-slate-300">
                        I am always looking for ways to improve my skills, expand my stack, and grow through real project experience.
                    </p>
                </div>
            </div>

            <div class="mt-10 rounded-[1.5rem] border border-slate-800 bg-slate-900/72 p-5">
                <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">GitHub</p>
                        <h3 class="mt-2 text-xl font-semibold text-white">My Contributions</h3>
                        <p class="mt-2 text-sm leading-6 text-slate-400">
                            GitHub activity from my account
                            <a
                                href="https://github.com/gyansiii"
                                target="_blank"
                                rel="noreferrer"
                                class="font-medium text-cyan-300 hover:text-cyan-200"
                            >
                                @gyansiii
                            </a>
                        </p>
                    </div>

                    <a
                        href="https://github.com/gyansiii"
                        target="_blank"
                        rel="noreferrer"
                        class="inline-flex rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/70 hover:text-cyan-200"
                    >
                        View GitHub
                    </a>
                </div>

                <div class="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-[#0b1120] p-4">
                    <img
                        src="https://ghchart.rshah.org/gyansiii"
                        alt="GitHub contribution chart for gyansiii"
                        class="w-full rounded-xl"
                    />
                </div>
            </div>
        </article>
    </PortfolioShell>
</template>
