<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import PlaceholderPattern from '@/components/PlaceholderPattern.vue';
import { Card, CardContent } from '@/components/ui/card';
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
    },
];
</script>

<template>
    <Head title="Dashboard" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div
            class="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"
        >
            <div class="grid auto-rows-min gap-4 md:grid-cols-3">
                <Card
                    class="overflow-hidden border-sidebar-border/70 py-0 dark:border-sidebar-border"
                >
                    <CardContent class="relative aspect-video p-0">
                        <PlaceholderPattern />
                    </CardContent>
                </Card>
                <Card
                    class="overflow-hidden border-sidebar-border/70 py-0 dark:border-sidebar-border"
                >
                    <CardContent class="relative aspect-video p-0">
                        <PlaceholderPattern />
                    </CardContent>
                </Card>
                <Card
                    class="overflow-hidden border-sidebar-border/70 py-0 dark:border-sidebar-border"
                >
                    <CardContent class="relative aspect-video p-0">
                        <PlaceholderPattern />
                    </CardContent>
                </Card>
            </div>
            <Card
                class="min-h-[100vh] flex-1 overflow-hidden border-sidebar-border/70 py-0 md:min-h-min dark:border-sidebar-border"
            >
                <CardContent
                    class="relative h-full min-h-[100vh] p-0 md:min-h-min"
                >
                    <PlaceholderPattern />
                </CardContent>
            </Card>
        </div>
    </AppLayout>
</template>
