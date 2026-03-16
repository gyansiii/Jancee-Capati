import type { Ref } from 'vue';
import { ref } from 'vue';
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

export const portfolioPaletteSwatches = {
    default: ['#FFFFFF', '#FFFFF0', '#D3D3D3', '#A9A9A9'],
    mist: ['#191D23', '#57707A', '#C5BAC4', '#DEDCDC'],
    mint: ['#80EE98', '#46DFB1', '#09D1C7', '#213A58'],
    luna: ['#A7EBF2', '#54ACBF', '#26658C', '#011C40'],
    skijan: ['#00010D', '#2D0140', '#660273', '#A305A6'],
} as const;

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
    colorPalette.value = savedColorPalette ?? 'default';
    updateColorPaletteTheme(savedColorPalette ?? 'default');
}

export function useColorPalette(): UseColorPaletteReturn {
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
