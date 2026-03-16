import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { DefineComponent } from 'vue';
import { Fragment, createApp, defineAsyncComponent, h } from 'vue';
import '../css/app.css';
import { initializeTheme } from '@/composables/useAppearance';
import { initializeColorPalette } from '@/composables/useColorPalette';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
const pages = import.meta.glob<DefineComponent>('./pages/**/*.vue');
const Toaster = defineAsyncComponent(
    () => import('@/components/ui/toast/Toaster.vue'),
);

const resolve = (name: string) =>
    resolvePageComponent(`./pages/${name}.vue`, pages);

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve,
    setup({ el, App, props, plugin }) {
        createApp({
            render: () => h(Fragment, [h(App, props), h(Toaster)]),
        })
            .use(plugin)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on page load...
initializeTheme();
initializeColorPalette();
