import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { BaseButton } from 'shared/ui/BaseButton/BaseButton';
import React, { useState } from 'react';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User/model';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className: string;

}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('translation');
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onLogOut = () => {
        dispatch(userActions.toLogOut());
    };

    if (authData?.username) {
        return (
            <div className={classNames(classes.Navbar, {}, [className])}>
                <div className={classNames(classes.links, {}, [])} />
                <BaseButton onClick={() => onLogOut()}>
                    {t('LogOut')}
                </BaseButton>
            </div>
        );
    }
    return (
        <div className={classNames(classes.Navbar, {}, [className])}>
            <div className={classNames(classes.links, {}, [])} />
            <BaseButton onClick={() => setIsAuthModal(true)}>
                {t('LogIn')}
            </BaseButton>
            {isAuthModal && <LoginModal isOpen={isAuthModal} lazy onClose={() => setIsAuthModal(false)} />}
        </div>
    );
};
