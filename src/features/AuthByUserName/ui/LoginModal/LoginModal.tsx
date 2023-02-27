import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from 'features/AuthByUserName/ui/LoginForm/LoginForm';

interface LoginModalProps {
    isOpen: boolean,
    onClose?: () => void;
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
        <LoginForm />
    </Modal>
);
