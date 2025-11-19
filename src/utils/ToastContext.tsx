import React, { useContext, useState, useCallback, type ReactNode } from 'react';
import '../styles/ToastContext.scss';
import { ToastContext, type ToastType, type ToastState } from '../hooks/ToastTypes.ts';

const ToastIcon: React.FC<{ type: ToastType }> = ({ type }) => {
    switch (type) {
        case 'success':
            return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>;
        case 'error':
            return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>;
        case 'warn':
            return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>;
        default:
            return null;
    }
};

// eslint-disable-next-line react-refresh/only-export-components
export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast muss innerhalb eines ToastProvider verwendet werden');
    }
    return context;
};

const Toast: React.FC<{ toast: ToastState }> = ({ toast }) => {
    if (!toast.show) return null;

    return (
        <div className={`toast-notification show ${toast.type}`}>
            <div className="toast-icon">
                <ToastIcon type={toast.type} />
            </div>
            <span>{toast.message}</span>
        </div>
    );
};

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [toast, setToast] = useState<ToastState>({
        show: false,
        message: '',
        type: 'success'
    });

    const showToast = useCallback((message: string, type: ToastType) => {
        setToast({ show: true, message, type });

        setTimeout(() => {
            setToast(prev => ({ ...prev, show: false }));
        }, 3000);
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <Toast toast={toast} />
        </ToastContext.Provider>
    );
};