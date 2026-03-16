<script setup lang="ts">
import PortfolioShell from '@/components/PortfolioShell.vue';
import { myproject } from '@/routes';

const projects = [
    {
        title: 'Registration System',
        subtitle: 'Web-Based Registration Management System',
        year: '2026-2027',
        location: 'The Firm Consultant Inc, Guagua, Pampanga',
        description:
            'This project was developed during my On-the-Job Training as part of my internship experience, where I contributed to building a web-based registration management system for handling submissions and records efficiently.',
        details:
            'The system was developed using Laravel and Vue and included structured forms, document uploads, database integration, PDF generation, SMTP email sending, and OCR-assisted PDF scanning that helps users fill in form fields with less manual effort.',
        features: [
            'Structured registration form submission',
            'SMTP email sending',
            'PDF document upload and scanning',
            'OCR-assisted extraction from PDF files',
            'Manually placing scanned OCR data into input fields to reduce user hassle',
            'Admin-side review and record management',
        ],
        technologies: ['PHP', 'Laravel', 'Vue', 'Blade', 'SQLite', 'Tailwind CSS', 'shadcn/ui', 'Docker'],
    },
    {
        title: 'Plantcify',
        subtitle: 'Plant Identification and Disease Detection Web App',
        year: '2025-2026',
        location: 'DHVSU Main, Bacolor, Pampanga',
        description:
            'Plantcify is a web-based application designed to help users identify plants and learn about plant health and medicinal uses. The system includes a plant library and disease database where users can view plant details such as scientific names, descriptions, symptoms of plant diseases, and treatment recommendations.',
        details:
            'The application was built using React, TypeScript, and Ionic, with a structured interface that allows users to browse plant data, explore medicinal uses, and understand plant health issues.',
        features: [
            'Plant library and disease database',
            'Upload an image for plant scanning',
            'Scan an existing photo from the device',
            'Take a photo directly and scan it',
            'View medicinal uses, symptoms, and treatment recommendations',
        ],
        technologies: ['React', 'TypeScript', 'Ionic', 'Firebase', 'HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'ClassIQ',
        subtitle: 'E-Learning and Collaboration Web Application',
        year: '2024-2025',
        location: 'DHVSU Main, Bacolor, Pampanga',
        description:
            'ClassIQ is an interactive Learning Management System developed as a collaborative school project to support online learning between teachers and students.',
        details:
            'The platform includes role-based access control for teachers and students. Teachers can manage classes, upload learning materials, and assign activities, while students can access course materials and submit assignments. The system also includes a manual chatbot designed to assist users by responding to predefined queries without using external APIs.',
        technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        features: [
            'Role-based system for teachers and students',
            'Class and subject management',
            'Downloadable learning materials',
            'Assignment management',
            'User and activity logs',
            'Manual chatbot support',
        ],
    },
    {
        title: 'CampusKey',
        subtitle: 'Smart ID and Payment System Using QR Code',
        year: '2025-2026',
        location: 'Home, Lubao, Pampanga',
        description:
            'CampusKey is a smart identification and payment system designed for the DHVSU community. The system uses QR codes to enable digital identification and campus transactions.',
        details:
            'The platform includes QR-based authentication, a digital points system, GCash payment integration, and an administrative panel for managing users and transactions. The project was developed collaboratively as a team capstone project.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    },
];
</script>

<template>
    <PortfolioShell
        title="Work Experience"
        badge="Work Experience"
        heading="My "
        accent="Experience"
        subtitle="Internship work, academic projects, and practical development experience."
        description="This page highlights my internship experience, major academic projects, and the systems I have built while developing my skills as a junior full-stack web developer."
        primary-label="View Experience"
        primary-href="#work-experience"
        secondary-label="My Projects"
        :secondary-href="myproject().url"
        profile-image="/images/profile.jpeg"
    >
        <article
            id="work-experience"
            class="mx-auto mt-10 flex min-h-[calc(88svh-4rem)] w-full max-w-[88rem] scroll-mt-24 flex-col justify-center rounded-[1.75rem] border border-cyan-400/20 bg-slate-950/72 p-7 lg:col-span-2 xl:mt-16 xl:p-8"
        >
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">Work Experience</p>
            <h2 class="mt-4 text-2xl font-semibold text-white xl:text-3xl">Internship and project experience</h2>
            <p class="mt-4 text-[15px] leading-7 text-slate-300 xl:text-base">
                During my On-the-Job Training, I worked as a Full-Stack Web Developer Intern and helped develop a
                web-based Registration System using PHP, Laravel, Vue, Blade, and PostgreSQL/SQLite.
            </p>
            <p class="mt-4 text-[15px] leading-7 text-slate-300 xl:text-base">
                I worked on both frontend and backend development, including building user interfaces, handling form
                submissions, integrating databases, and implementing document processing and PDF generation features.
                The system allows users to submit registration information and upload required documents while
                administrators can review, manage, and organize records efficiently.
            </p>
            <p class="mt-4 text-[15px] leading-7 text-slate-300 xl:text-base">
                This experience strengthened my understanding of full-stack development, system workflows, and
                real-world web application development.
            </p>

            <div class="mt-7 rounded-[1.5rem] border border-slate-800 bg-slate-900/72 p-5">
                <p class="text-[15px] font-semibold text-white xl:text-base">Full-Stack Web Developer Intern (OJT)</p>
                <p class="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                    2026-2027
                </p>
                <p class="mt-2 text-sm text-slate-400">The Firm Consultant Inc, Guagua, Pampanga</p>
                <p class="mt-4 text-sm leading-6 text-slate-300">
                    My OJT gave me hands-on experience in building real application features, improving workflows,
                    working with structured data, and understanding how frontend and backend development come together
                    inside a complete system.
                </p>
                <div class="mt-4">
                    <p class="text-sm font-semibold text-white">Technologies Used</p>
                    <div class="mt-3 flex flex-wrap gap-2">
                        <span class="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">PHP</span>
                        <span class="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">Laravel</span>
                        <span class="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">Vue</span>
                        <span class="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">Blade</span>
                        <span class="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">Tailwind CSS</span>
                        <span class="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">shadcn/ui</span>
                        <span class="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">PostgreSQL</span>
                        <span class="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">SQLite</span>
                        <span class="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">Docker</span>
                    </div>
                </div>
            </div>

            <div class="mt-8 space-y-5">
                <div v-for="project in projects" :key="project.title" class="rounded-[1.5rem] border border-slate-800 bg-slate-900/72 p-5">
                    <p class="text-lg font-semibold text-white">{{ project.title }}</p>
                    <p class="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{{ project.subtitle }}</p>
                    <p class="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{{ project.year }}</p>
                    <p class="mt-2 text-sm text-slate-400">{{ project.location }}</p>
                    <p class="mt-4 text-sm leading-6 text-slate-300">{{ project.description }}</p>
                    <p class="mt-3 text-sm leading-6 text-slate-300">{{ project.details }}</p>

                    <div v-if="project.features" class="mt-4">
                        <p class="text-sm font-semibold text-white">Key Features</p>
                        <ul class="mt-3 grid gap-2 md:grid-cols-2">
                            <li
                                v-for="feature in project.features"
                                :key="feature"
                                class="rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-300"
                            >
                                {{ feature }}
                            </li>
                        </ul>
                    </div>

                    <div class="mt-4">
                        <p class="text-sm font-semibold text-white">Technologies Used</p>
                        <div class="mt-3 flex flex-wrap gap-2">
                            <span
                                v-for="technology in project.technologies"
                                :key="technology"
                                class="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200"
                            >
                                {{ technology }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-8 rounded-[1.5rem] border border-slate-800 bg-slate-900/72 p-5">
                <p class="text-[15px] font-semibold text-white xl:text-base">Summary</p>
                <p class="mt-3 text-sm leading-7 text-slate-300">
                    I am a Junior Full-Stack Web Developer with experience developing web applications through academic
                    projects and internship experience. I have worked with technologies such as Laravel, React, PHP,
                    JavaScript, and modern frontend tools to build systems that manage data, support collaboration,
                    and solve real-world problems. I continuously improve my skills by building projects and exploring
                    new technologies.
                </p>
            </div>
        </article>
    </PortfolioShell>
</template>
