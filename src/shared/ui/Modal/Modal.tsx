import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, {
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import classes from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal = ({
    className, children, isOpen = false, onClose,
}: ModalProps) => {
    const { t } = useTranslation('auto');
    const { theme } = useTheme();
    const [isClosing, setIsClosing] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();

    const modes: Record<string, boolean> = {
        [classes.isOpen]: isOpen,
        [classes.isClosing]: isClosing,
    };

    const onCloseHandler = () => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, 300);
        }
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onCloseHandler();
        }
    }, []);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        } else {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        }
    }, [isOpen, onKeyDown]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
    return (
        <Portal>
            <div className={classNames(classes.Modal, modes, [className, theme])}>
                <div
                    className={classes.overlay}
                    onClick={() => onCloseHandler()}
                >
                    <div className={classes.content} onClick={(e) => onContentClick(e)}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
