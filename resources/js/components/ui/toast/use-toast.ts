import { readonly, reactive } from 'vue';

export type ToastVariant = 'default' | 'success' | 'destructive' | 'info';

export type ToastOptions = {
    id?: string;
    title: string;
    description?: string;
    variant?: ToastVariant;
    duration?: number;
};

export type ToastInstance = ToastOptions & {
    id: string;
};

const state = reactive<{
    toasts: ToastInstance[];
}>({
    toasts: [],
});

const timers = new Map<string, ReturnType<typeof setTimeout>>();

const createToastId = (): string => {
    if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
        return crypto.randomUUID();
    }

    return Math.random().toString(36).slice(2, 11);
};

const clearToastTimer = (id: string): void => {
    const timer = timers.get(id);

    if (timer) {
        window.clearTimeout(timer);
        timers.delete(id);
    }
};

const dismiss = (id?: string): void => {
    if (!id) {
        state.toasts.forEach((toast) => clearToastTimer(toast.id));
        state.toasts.splice(0, state.toasts.length);

        return;
    }

    clearToastTimer(id);
    const toastIndex = state.toasts.findIndex((toast) => toast.id === id);

    if (toastIndex !== -1) {
        state.toasts.splice(toastIndex, 1);
    }
};

const toast = (options: ToastOptions): string => {
    const id = options.id ?? createToastId();
    const duration = options.duration ?? 4000;

    clearToastTimer(id);

    const existingToastIndex = state.toasts.findIndex(
        (existingToast) => existingToast.id === id,
    );
    const nextToast = {
        ...options,
        id,
    };

    if (existingToastIndex !== -1) {
        state.toasts.splice(existingToastIndex, 1, nextToast);
    } else {
        state.toasts.push(nextToast);
    }

    if (duration > 0) {
        timers.set(
            id,
            window.setTimeout(() => {
                dismiss(id);
            }, duration),
        );
    }

    return id;
};

export function useToast(): {
    dismiss: (id?: string) => void;
    state: Readonly<{
        toasts: readonly ToastInstance[];
    }>;
    toast: (options: ToastOptions) => string;
} {
    return {
        dismiss,
        state: readonly(state),
        toast,
    };
}
