import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { LoginFormAsync } from 'features/AuthByUserName/ui/LoginForm/LoginForm.async';
import { Loader } from 'shared/ui/Loader/Loader';

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
