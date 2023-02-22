import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { BaseButton } from 'shared/ui/BaseButton/BaseButton';
import { Modal } from 'shared/ui/Modal/Modal';
import React, { useState } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className: string;

}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('translation');
    const [isAuthModal, setIsAuthModal] = useState(false);

    return (
        <div className={classNames(classes.Navbar, {}, [className])}>
            <div className={classNames(classes.links, {}, [])} />
            <BaseButton onClick={() => setIsAuthModal(true)}>
                {' '}
                {t('LogIn')}
                {' '}
            </BaseButton>
            <Modal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)}>
                {' '}
                <BaseButton onClick={() => setIsAuthModal(true)}> +++ </BaseButton>
                <div>+++</div>
            </Modal>
        </div>
    );
};
