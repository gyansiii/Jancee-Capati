<script setup lang="ts">
import { useForm, usePage } from '@inertiajs/vue3';
import { computed, ref } from 'vue';
import InputError from '@/components/InputError.vue';
import PortfolioShell from '@/components/PortfolioShell.vue';
import { Button } from '@/components/ui/button';
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

const page = usePage();

const successMessage = computed(() => {
    const flash = page.props.flash as { success?: string } | undefined;

    return flash?.success ?? '';
});

const openSendMessageModal = (): void => {
    isSendMessageModalOpen.value = true;
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
        onSuccess: () => {
            contactForm.reset();
            isSendMessageModalOpen.value = false;
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
            class="mx-auto mt-10 flex min-h-[calc(88svh-4rem)] w-full max-w-[96rem] scroll-mt-24 flex-col justify-center rounded-[1.75rem] border border-cyan-400/20 bg-slate-950/72 p-7 lg:col-span-2 xl:mt-16 xl:p-8"
        >
            <Dialog
                :open="isSendMessageModalOpen"
                @update:open="handleModalOpenChange"
            >
                <DialogContent
                    class="border border-cyan-400/20 bg-slate-950 text-white sm:max-w-lg"
                >
                    <DialogHeader>
                        <DialogTitle class="text-xl text-white"
                            >Send a message</DialogTitle
                        >
                        <DialogDescription class="text-slate-300">
                            Enter your email and message below. When you send
                            it, the message will be delivered to my email.
                        </DialogDescription>
                    </DialogHeader>

                    <form class="space-y-5" @submit.prevent="submitContactForm">
                        <div class="grid gap-2">
                            <Label for="sender_email" class="text-slate-200"
                                >Your Email</Label
                            >
                            <Input
                                id="sender_email"
                                v-model="contactForm.sender_email"
                                type="email"
                                autocomplete="email"
                                placeholder="you@example.com"
                                class="border-slate-700 bg-slate-900 text-white placeholder:text-slate-500"
                            />
                            <InputError
                                :message="contactForm.errors.sender_email"
                            />
                        </div>

                        <div class="grid gap-2">
                            <Label for="message" class="text-slate-200"
                                >Message</Label
                            >
                            <textarea
                                id="message"
                                v-model="contactForm.message"
                                rows="6"
                                placeholder="Write your message here..."
                                class="min-h-36 rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white transition outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                            />
                            <InputError :message="contactForm.errors.message" />
                        </div>

                        <DialogFooter class="gap-2 sm:justify-end">
                            <Button
                                type="button"
                                variant="outline"
                                class="border-slate-700 bg-transparent text-slate-100 hover:bg-slate-900"
                                @click="closeSendMessageModal"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                class="bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                                :disabled="contactForm.processing"
                            >
                                Send
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            <p
                class="text-xs font-semibold tracking-[0.35em] text-cyan-300 uppercase"
            >
                Contact Us
            </p>
            <h2 class="mt-4 text-2xl font-semibold text-white xl:text-3xl">
                Start a conversation with me
            </h2>
            <p class="mt-4 text-[15px] leading-7 text-slate-300 xl:text-base">
                I am currently building my experience as a student developer and
                junior full-stack web developer. If you have an opportunity,
                project idea, or collaboration in mind, I would be happy to hear
                from you.
            </p>
            <p class="mt-4 text-[15px] leading-7 text-slate-300 xl:text-base">
                Whether you want to talk about frontend development, Laravel and
                Vue projects, internship roles, or portfolio feedback, this page
                gives you a few simple ways to reach me and learn what I am open
                to.
            </p>

            <div
                v-if="successMessage"
                class="mt-6 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-5 py-4 text-sm font-medium text-emerald-100"
            >
                {{ successMessage }}
            </div>

            <div class="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                <div class="grid gap-4">
                    <article
                        v-for="card in contactCards"
                        :key="card.label"
                        class="rounded-[1.5rem] border border-slate-800 bg-slate-900/72 p-5"
                    >
                        <p
                            class="text-xs font-semibold tracking-[0.25em] text-cyan-300 uppercase"
                        >
                            {{ card.label }}
                        </p>
                        <h3 class="mt-3 text-lg font-semibold text-white">
                            {{ card.value }}
                        </h3>
                        <p class="mt-3 text-sm leading-6 text-slate-300">
                            {{ card.detail }}
                        </p>
                        <button
                            v-if="card.action && card.label === 'Email'"
                            type="button"
                            class="mt-4 inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300/60 hover:text-cyan-100"
                            @click="openSendMessageModal"
                        >
                            {{ card.action }}
                        </button>
                        <a
                            v-else-if="card.href && card.action"
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
                            class="mt-4 inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300/60 hover:text-cyan-100"
                        >
                            {{ card.action }}
                        </a>
                    </article>
                </div>

                <div class="space-y-4">
                    <div
                        class="rounded-[1.5rem] border border-slate-800 bg-slate-900/72 p-5"
                    >
                        <p
                            class="text-xs font-semibold tracking-[0.25em] text-cyan-300 uppercase"
                        >
                            Availability
                        </p>
                        <h3 class="mt-3 text-lg font-semibold text-white">
                            Ways I can help
                        </h3>
                        <ul class="mt-4 space-y-3">
                            <li
                                v-for="item in availability"
                                :key="item"
                                class="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm leading-6 text-slate-300"
                            >
                                {{ item }}
                            </li>
                        </ul>
                    </div>

                    <div
                        class="rounded-[1.5rem] border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.18),rgba(34,211,238,0.08),rgba(15,23,42,0.92))] p-5"
                    >
                        <p
                            class="text-xs font-semibold tracking-[0.25em] text-cyan-200 uppercase"
                        >
                            Response
                        </p>
                        <h3 class="mt-3 text-lg font-semibold text-white">
                            Best way to reach me
                        </h3>
                        <p class="mt-3 text-sm leading-6 text-slate-200/90">
                            Email is the best option if you want a direct reply
                            about work opportunities, project discussions, or
                            collaboration. You can also check my GitHub to see
                            the kind of work I am actively building.
                        </p>
                    </div>
                </div>
            </div>
        </article>
    </PortfolioShell>
</template>
