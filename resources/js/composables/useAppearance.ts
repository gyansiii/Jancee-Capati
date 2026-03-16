import type { ComputedRef, Ref } from 'vue';
import { computed, ref } from 'vue';
import type { Appearance, ResolvedAppearance } from '@/types';

export type { Appearance, ResolvedAppearance };

export type UseAppearanceReturn = {
    appearance: Ref<Appearance>;
    resolvedAppearance: ComputedRef<ResolvedAppearance>;
    updateAppearance: (value: Appearance) => void;
};

export function updateTheme(value: Appearance): void {
    if (typeof window === 'undefined') {
        return;
    }

    if (value === 'system') {
        const mediaQueryList = window.matchMedia(
            '(prefers-color-scheme: dark)',
        );
        const systemTheme = mediaQueryList.matches ? 'dark' : 'light';

        document.documentElement.classList.toggle(
            'dark',
            systemTheme === 'dark',
        );
    } else {
        document.documentElement.classList.toggle('dark', value === 'dark');
    }
}

const setCookie = (name: string, value: string, days = 365) => {
    if (typeof document === 'undefined') {
        return;
    }

    const maxAge = days * 24 * 60 * 60;

    document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
};

const mediaQuery =
    typeof window === 'undefined'
        ? null
        : window.matchMedia('(prefers-color-scheme: dark)');

const getStoredAppearance = (): Appearance | null => {
    if (typeof window === 'undefined') {
        return null;
    }

    return localStorage.getItem('appearance') as Appearance | null;
};

const prefersDark = ref<boolean>(mediaQuery?.matches ?? false);
let hasInitializedThemeListener = false;

const handleSystemThemeChange = (): void => {
    prefersDark.value = mediaQuery?.matches ?? false;
    const currentAppearance = getStoredAppearance();

    updateTheme(currentAppearance || 'system');
};

export function initializeTheme(): void {
    if (typeof window === 'undefined') {
        return;
    }

    const savedAppearance = getStoredAppearance();
    appearance.value = savedAppearance || 'system';
    updateTheme(savedAppearance || 'system');

    if (!hasInitializedThemeListener && mediaQuery) {
        mediaQuery.addEventListener('change', handleSystemThemeChange);
        hasInitializedThemeListener = true;
    }
}

const appearance = ref<Appearance>('system');

export function useAppearance(): UseAppearanceReturn {
    const resolvedAppearance = computed<ResolvedAppearance>(() => {
        if (appearance.value === 'system') {
            return prefersDark.value ? 'dark' : 'light';
        }

        return appearance.value;
    });

    function updateAppearance(value: Appearance): void {
        appearance.value = value;

        localStorage.setItem('appearance', value);
        setCookie('appearance', value);
        updateTheme(value);
    }

    return {
        appearance,
        resolvedAppearance,
        updateAppearance,
    };
}
