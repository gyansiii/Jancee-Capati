<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';
import InputError from '@/components/InputError.vue';
import PortfolioShell from '@/components/PortfolioShell.vue';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/toast';
import { home } from '@/routes';
import { store } from '@/routes/contact-messages';

const contactCards = [
    {
        label: 'Email',
        value: 'jancee.code@gmail.com',
        detail: 'For project inquiries, internships, and collaboration opportunities.',
        href: null,
        action: 'Send Email',
    },
    {
        label: 'Location',
        value: 'Lubao, Pampanga, Philippines',
        detail: 'Open to remote work, freelance collaborations, and junior developer opportunities.',
        href: null,
        action: null,
    },
    {
        label: 'GitHub',
        value: '@gyansiii',
        detail: 'Browse my repositories, experiments, and ongoing development work.',
        href: 'https://github.com/gyansiii',
        action: 'View Profile',
    },
];

const availability = [
    'Web Application Development',
    'Full-Stack System Development',
    'System Management Tools',
    'User Interface Development',
    'Problem-Solving Through Software',
    'AI-Powered Development Assistance',
];

const isSendMessageModalOpen = ref(false);

const contactForm = useForm({
    sender_email: '',
    message: '',
});

const { toast } = useToast();

const openSendMessageModal = (): void => {
    isSendMessageModalOpen.value = true;
    toast({
        title: 'Message dialog opened',
        description:
            'Share your email and a short note, and I will get back to you from there.',
        variant: 'info',
    });
};

const closeSendMessageModal = (): void => {
    isSendMessageModalOpen.value = false;
    contactForm.clearErrors();
};

const handleModalOpenChange = (isOpen: boolean): void => {
    isSendMessageModalOpen.value = isOpen;

    if (!isOpen) {
        contactForm.clearErrors();
    }
};

const submitContactForm = (): void => {
    contactForm.post(store().url, {
        preserveScroll: true,
        onError: () => {
            toast({
                title: 'Message not sent',
                description: 'Please fix the highlighted fields and try again.',
                variant: 'destructive',
            });
        },
        onSuccess: () => {
            contactForm.reset();
            isSendMessageModalOpen.value = false;
            toast({
                title: 'Message sent',
                description:
                    'Thanks for reaching out. Your message is on its way to my inbox.',
                variant: 'success',
            });
        },
    });
};
</script>

<template>
    <PortfolioShell
        title="Contact Us"
        badge="Get In Touch"
        heading="Let's "
        accent="Connect"
        subtitle="Reach out if you want to collaborate, ask about my work, or discuss opportunities."
        description="This page is a simple way to contact me for web development opportunities, freelance work, portfolio feedback, or any project where you think my current skills in Laravel, Vue, and frontend design can help."
        primary-label="Send A Message"
        primary-href="#contact-us"
        secondary-label="Back Home"
        :secondary-href="home().url"
        profile-image="/images/profile.jpeg"
    >
        <article
            id="contact-us"
            class="portfolio-animate-fade-up portfolio-animate-fade-up-delay-1 portfolio-panel mx-auto mt-10 flex min-h-[calc(88svh-4rem)] w-full max-w-[96rem] scroll-mt-24 flex-col justify-center p-7 lg:col-span-2 xl:mt-16 xl:p-8"
        >
            <Dialog
                :open="isSendMessageModalOpen"
                @update:open="handleModalOpenChange"
            >
                <DialogContent
                    v-if="isSendMessageModalOpen"
                    class="portfolio-card-surface-strong portfolio-strong-text sm:max-w-lg"
                >
                    <DialogHeader>
                        <DialogTitle class="ui-section-title text-xl"
                            >Send a message</DialogTitle
                        >
                        <DialogDescription class="ui-muted">
                            Enter your email and message below. When you send
                            it, the message will be delivered to my email.
                        </DialogDescription>
                    </DialogHeader>

                    <form class="space-y-5" @submit.prevent="submitContactForm">
                        <div class="grid gap-2">
                            <Label
                                for="sender_email"
                                class="portfolio-strong-text"
                                >Your Email</Label
                            >
                            <Input
                                id="sender_email"
                                v-model="contactForm.sender_email"
                                type="email"
                                autocomplete="email"
                                placeholder="you@example.com"
                                class="portfolio-input-surface"
                            />
                            <InputError
                                :message="contactForm.errors.sender_email"
                            />
                        </div>

                        <div class="grid gap-2">
                            <Label for="message" class="portfolio-strong-text"
                                >Message</Label
                            >
                            <textarea
                                id="message"
                                v-model="contactForm.message"
                                rows="6"
                                placeholder="Write your message here..."
                                class="portfolio-input-surface min-h-36 rounded-md px-3 py-2 text-sm transition outline-none"
                            />
                            <InputError :message="contactForm.errors.message" />
                        </div>

                        <DialogFooter class="gap-2 sm:justify-end">
                            <Button
                                type="button"
                                variant="outline"
                                class="portfolio-button-secondary"
                                @click="closeSendMessageModal"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                class="portfolio-button-primary"
                                :disabled="contactForm.processing"
                            >
                                Send
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            <div class="portfolio-page-intro">
                <p class="ui-eyebrow">Contact Us</p>
                <h2 class="ui-section-title mt-4">
                    Start a conversation with me
                </h2>
                <p class="ui-body mt-4">
                    I am currently building my experience as a student developer
                    and junior full-stack web developer. If you have an
                    opportunity, project idea, or collaboration in mind, I would
                    be happy to hear from you.
                </p>
                <p class="ui-body mt-4">
                    Whether you want to talk about frontend development, Laravel
                    and Vue projects, internship roles, or portfolio feedback,
                    this page gives you a few simple ways to reach me and learn
                    what I am open to.
                </p>
            </div>

            <Alert
                class="portfolio-animate-fade-up portfolio-animate-fade-up-delay-2 portfolio-callout mt-6"
            >
                <AlertTitle class="ui-label">Best way to connect</AlertTitle>
                <AlertDescription class="ui-muted mt-3">
                    Use the message dialog for project inquiries and
                    opportunities, or browse my GitHub profile if you want to
                    review the work behind this portfolio.
                </AlertDescription>
            </Alert>

            <div class="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                <div class="grid gap-4">
                    <Card
                        v-for="card in contactCards"
                        :key="card.label"
                        class="portfolio-card-surface portfolio-animate-fade-up"
                    >
                        <CardHeader class="pb-2">
                            <p class="ui-label">{{ card.label }}</p>
                            <CardTitle class="ui-card-title mt-3">
                                {{ card.value }}
                            </CardTitle>
                            <CardDescription class="ui-muted mt-3">
                                {{ card.detail }}
                            </CardDescription>
                        </CardHeader>
                        <CardFooter v-if="card.action">
                            <Button
                                v-if="card.label === 'Email'"
                                variant="outline"
                                class="portfolio-button-tonal"
                                @click="openSendMessageModal"
                            >
                                {{ card.action }}
                            </Button>
                            <Button
                                v-else-if="card.href"
                                as-child
                                variant="outline"
                                class="portfolio-button-tonal"
                            >
                                <a
                                    :href="card.href"
                                    :target="
                                        card.href.startsWith('http')
                                            ? '_blank'
                                            : undefined
                                    "
                                    :rel="
                                        card.href.startsWith('http')
                                            ? 'noreferrer'
                                            : undefined
                                    "
                                >
                                    {{ card.action }}
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                <div class="space-y-4">
                    <Card
                        class="portfolio-card-surface portfolio-animate-fade-up portfolio-animate-fade-up-delay-2"
                    >
                        <CardHeader class="pb-2">
                            <p class="ui-label">Availability</p>
                            <CardTitle class="ui-card-title mt-3"
                                >Ways I can help</CardTitle
                            >
                        </CardHeader>
                        <CardContent>
                            <ul class="mt-1 space-y-3">
                                <li
                                    v-for="item in availability"
                                    :key="item"
                                    class="ui-list-surface"
                                >
                                    {{ item }}
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card
                        class="portfolio-animate-fade-up portfolio-animate-fade-up-delay-3 portfolio-callout-strong"
                    >
                        <CardHeader class="pb-2">
                            <p class="ui-label">Response</p>
                            <CardTitle class="ui-card-title mt-3"
                                >Best way to reach me</CardTitle
                            >
                        </CardHeader>
                        <CardContent>
                            <p class="ui-muted">
                                Email is the best option if you want a direct
                                reply about work opportunities, project
                                discussions, or collaboration. You can also
                                check my GitHub to see the kind of work I am
                                actively building.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </article>
    </PortfolioShell>
</template>
