import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    isOpen: boolean,
    onClose: () => void;
    lazy?: boolean;
}

export const LoginModal = ({
    isOpen, lazy, onClose,
}: LoginModalProps) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        lazy={lazy}
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync onSuccess={onClose} />
        </Suspense>
    </Modal>
);
