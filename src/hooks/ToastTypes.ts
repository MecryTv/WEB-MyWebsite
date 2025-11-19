import { createContext } from 'react';

export type ToastType = 'success' | 'error' | 'warn';

export interface ToastState {
    show: boolean;
    message: string;
    type: ToastType;
}

export interface ToastContextType {
    showToast: (message: string, type: ToastType) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);