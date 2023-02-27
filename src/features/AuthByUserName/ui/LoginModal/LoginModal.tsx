import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from 'features/AuthByUserName/ui/LoginForm/LoginForm';
import { useEffect, useState } from 'react';
import classes from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean,
    onClose?: () => void;
    lazy?: boolean;
}

export const LoginModal = ({
    className, isOpen, lazy, onClose,
}: LoginModalProps) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        lazy={lazy}
        className={classNames(classes.LoginModal, {}, [className])}
    >
        <LoginForm />
    </Modal>
);
