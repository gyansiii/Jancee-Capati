<script setup lang="ts">
import PortfolioShell from '@/components/PortfolioShell.vue';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
        technologies: [
            'PHP',
            'Laravel',
            'Vue',
            'Blade',
            'SQLite',
            'Tailwind CSS',
            'shadcn/ui',
            'Docker',
        ],
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
        technologies: [
            'React',
            'TypeScript',
            'Ionic',
            'Firebase',
            'HTML',
            'CSS',
            'JavaScript',
        ],
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
            class="portfolio-panel mx-auto mt-10 flex min-h-[calc(88svh-4rem)] w-full max-w-[88rem] scroll-mt-24 flex-col justify-center p-7 lg:col-span-2 xl:mt-16 xl:p-8"
        >
            <div class="portfolio-page-intro">
                <p class="ui-eyebrow">Work Experience</p>
                <h2 class="ui-section-title mt-4">
                    Internship and project experience
                </h2>
                <p class="ui-body mt-4">
                    During my On-the-Job Training, I worked as a Full-Stack Web
                    Developer Intern and helped develop a web-based Registration
                    System using PHP, Laravel, Vue, Blade, and
                    PostgreSQL/SQLite.
                </p>
                <p class="ui-body mt-4">
                    I worked on both frontend and backend development, including
                    building user interfaces, handling form submissions,
                    integrating databases, and implementing document processing
                    and PDF generation features. The system allows users to
                    submit registration information and upload required
                    documents while administrators can review, manage, and
                    organize records efficiently.
                </p>
                <p class="ui-body mt-4">
                    This experience strengthened my understanding of full-stack
                    development, system workflows, and real-world web
                    application development.
                </p>
            </div>

            <Card
                class="portfolio-card-surface portfolio-animate-fade-up portfolio-animate-fade-up-delay-2 mt-7"
            >
                <CardHeader class="pb-2">
                    <CardTitle class="ui-card-title"
                        >Full-Stack Web Developer Intern (OJT)</CardTitle
                    >
                    <p class="ui-label mt-2">2026-2027</p>
                    <p class="ui-muted mt-2">
                        The Firm Consultant Inc, Guagua, Pampanga
                    </p>
                </CardHeader>
                <CardContent>
                    <p class="ui-muted">
                        My OJT gave me hands-on experience in building real
                        application features, improving workflows, working with
                        structured data, and understanding how frontend and
                        backend development come together inside a complete
                        system.
                    </p>
                    <div class="mt-4">
                        <p class="portfolio-strong-text text-sm font-semibold">
                            Technologies Used
                        </p>
                        <div class="mt-3 flex flex-wrap gap-2">
                            <span class="ui-chip">PHP</span>
                            <span class="ui-chip">Laravel</span>
                            <span class="ui-chip">Vue</span>
                            <span class="ui-chip">Blade</span>
                            <span class="ui-chip">Tailwind CSS</span>
                            <span class="ui-chip">shadcn/ui</span>
                            <span class="ui-chip">PostgreSQL</span>
                            <span class="ui-chip">SQLite</span>
                            <span class="ui-chip">Docker</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div class="mt-8 space-y-5">
                <Card
                    v-for="project in projects"
                    :key="project.title"
                    class="portfolio-card-surface portfolio-animate-fade-up"
                >
                    <CardHeader class="pb-2">
                        <CardTitle class="ui-card-title">{{
                            project.title
                        }}</CardTitle>
                        <p class="ui-label mt-2">{{ project.subtitle }}</p>
                        <p class="ui-label mt-2">{{ project.year }}</p>
                        <p class="ui-muted mt-2">{{ project.location }}</p>
                    </CardHeader>
                    <CardContent>
                        <p class="ui-muted">
                            {{ project.description }}
                        </p>
                        <p class="ui-muted mt-3">
                            {{ project.details }}
                        </p>

                        <div v-if="project.features" class="mt-4">
                            <p
                                class="portfolio-strong-text text-sm font-semibold"
                            >
                                Key Features
                            </p>
                            <ul class="mt-3 grid gap-2 md:grid-cols-2">
                                <li
                                    v-for="feature in project.features"
                                    :key="feature"
                                    class="ui-list-surface"
                                >
                                    {{ feature }}
                                </li>
                            </ul>
                        </div>

                        <div class="mt-4">
                            <p
                                class="portfolio-strong-text text-sm font-semibold"
                            >
                                Technologies Used
                            </p>
                            <div class="mt-3 flex flex-wrap gap-2">
                                <span
                                    v-for="technology in project.technologies"
                                    :key="technology"
                                    class="ui-chip"
                                >
                                    {{ technology }}
                                </span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card
                class="portfolio-card-surface portfolio-animate-fade-up portfolio-animate-fade-up-delay-3 mt-8"
            >
                <CardHeader class="pb-2">
                    <CardTitle class="ui-card-title">Summary</CardTitle>
                </CardHeader>
                <CardContent>
                    <p class="ui-muted">
                        I am a Junior Full-Stack Web Developer with experience
                        developing web applications through academic projects
                        and internship experience. I have worked with
                        technologies such as Laravel, React, PHP, JavaScript,
                        and modern frontend tools to build systems that manage
                        data, support collaboration, and solve real-world
                        problems. I continuously improve my skills by building
                        projects and exploring new technologies.
                    </p>
                </CardContent>
            </Card>
        </article>
    </PortfolioShell>
</template>
