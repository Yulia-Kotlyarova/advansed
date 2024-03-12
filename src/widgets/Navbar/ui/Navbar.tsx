import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { BaseButton } from 'shared/ui/BaseButton/BaseButton';
import React, { useState } from 'react';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User/model';
import { BaseLink, BaseLinkTheme } from 'shared/ui/BaseLink/BaseLink';
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
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
            <header className={classNames(classes.Navbar, {}, [className])}>
                <div className={classNames(classes.links, {}, [])}>
                    <BaseLink
                        to={RoutePath.article_create}
                        theme={BaseLinkTheme.INVERTED}
                    >
                        {t('create new article')}
                    </BaseLink>
                </div>
                <Dropdown
                    items={[
                        {
                            content: t('Profile'),
                            onClick: () => onLogOut(),
                            href: RoutePath.profile + authData.id,
                        },
                        {
                            content: t('LogOut'),
                            onClick: () => onLogOut(),
                        },
                    ]}
                    trigger={<Avatar alt="" size="sm" avatar={authData.avatar} />}
                />
            </header>
        );
    }
    return (
        <header className={classNames(classes.Navbar, {}, [className])}>
            <div className={classNames(classes.links, {}, [])} />
            <BaseButton onClick={() => setIsAuthModal(true)}>
                {t('LogIn')}
            </BaseButton>
            {isAuthModal
            && (
                <LoginModal
                    isOpen={isAuthModal}
                    lazy
                    onClose={() => setIsAuthModal(false)}
                />
            )}
        </header>
    );
};
