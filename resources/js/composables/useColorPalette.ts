import type { Ref } from 'vue';
import { onMounted, ref } from 'vue';
import type { PortfolioPalette } from '@/types/ui';

export type UseColorPaletteReturn = {
    colorPalette: Ref<PortfolioPalette>;
    updateColorPalette: (value: PortfolioPalette) => void;
};

export const portfolioPalettes: Array<{
    label: string;
    value: PortfolioPalette;
}> = [
    { label: 'Default', value: 'default' },
    { label: 'Mist', value: 'mist' },
    { label: 'Mint', value: 'mint' },
    { label: 'Luna', value: 'luna' },
    { label: 'Skijan', value: 'skijan' },
];

const storageKey = 'portfolio-palette';
const colorPalette = ref<PortfolioPalette>('default');

const setCookie = (name: string, value: string, days = 365): void => {
    if (typeof document === 'undefined') {
        return;
    }

    const maxAge = days * 24 * 60 * 60;
    document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
};

const isPortfolioPalette = (
    value: string | null,
): value is PortfolioPalette => {
    return portfolioPalettes.some((palette) => palette.value === value);
};

const getStoredColorPalette = (): PortfolioPalette | null => {
    if (typeof window === 'undefined') {
        return null;
    }

    const storedPalette = localStorage.getItem(storageKey);

    return isPortfolioPalette(storedPalette) ? storedPalette : null;
};

export function updateColorPaletteTheme(value: PortfolioPalette): void {
    if (typeof document === 'undefined') {
        return;
    }

    document.documentElement.dataset.palette = value;
}

export function initializeColorPalette(): void {
    const savedColorPalette = getStoredColorPalette();
    updateColorPaletteTheme(savedColorPalette ?? 'default');
}

export function useColorPalette(): UseColorPaletteReturn {
    onMounted(() => {
        const savedColorPalette = getStoredColorPalette();

        if (savedColorPalette) {
            colorPalette.value = savedColorPalette;
        }
    });

    const updateColorPalette = (value: PortfolioPalette): void => {
        colorPalette.value = value;

        localStorage.setItem(storageKey, value);
        setCookie(storageKey, value);
        updateColorPaletteTheme(value);
    };

    return {
        colorPalette,
        updateColorPalette,
    };
}
