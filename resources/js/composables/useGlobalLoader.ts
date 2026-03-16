const globalLoaderStartEvent = 'portfolio:global-loader-start';
const globalLoaderStopEvent = 'portfolio:global-loader-stop';
const fetchPatchFlag = '__portfolioGlobalLoaderFetchPatched';

type LoaderStartDetail = {
    minimumDuration?: number;
};

type LoaderStopDetail = {
    minimumDuration?: number;
};

const dispatchLoaderEvent = <TDetail>(
    eventName: string,
    detail?: TDetail,
): void => {
    if (typeof window === 'undefined') {
        return;
    }

    window.dispatchEvent(new CustomEvent(eventName, { detail }));
};

export const startGlobalLoader = (minimumDuration?: number): void => {
    dispatchLoaderEvent<LoaderStartDetail>(globalLoaderStartEvent, {
        minimumDuration,
    });
};

export const stopGlobalLoader = (minimumDuration?: number): void => {
    dispatchLoaderEvent<LoaderStopDetail>(globalLoaderStopEvent, {
        minimumDuration,
    });
};

export const showGlobalLoaderFor = (minimumDuration: number): void => {
    startGlobalLoader(minimumDuration);
    stopGlobalLoader(minimumDuration);
};

export const installGlobalLoaderFetchHook = (): void => {
    if (typeof window === 'undefined' || typeof window.fetch !== 'function') {
        return;
    }

    type PatchedWindow = Window & {
        [fetchPatchFlag]?: boolean;
    };

    const patchedWindow = window as PatchedWindow;

    if (patchedWindow[fetchPatchFlag]) {
        return;
    }

    const originalFetch = window.fetch.bind(window);

    window.fetch = async (...args) => {
        startGlobalLoader();

        try {
            return await originalFetch(...args);
        } finally {
            stopGlobalLoader();
        }
    };

    patchedWindow[fetchPatchFlag] = true;
};

export {
    globalLoaderStartEvent,
    globalLoaderStopEvent,
};
