import { classNames } from 'shared/lib/classNames/classNames';
import React, { useMemo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { BaseButton } from 'shared/ui/BaseButton/BaseButton';
import { BaseLink, BaseLinkTheme } from 'shared/ui/BaseLink/BaseLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';
import HouseIcon from 'shared/assets/icons/house-solid.svg';
import AboutIcon from 'shared/assets/icons/address-card-regular.svg';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation('translation');
    const [isOpen, setIsOpen] = useState(false);

    const itemsList = useMemo(() => SidebarItemsList.map((item) => (
        <SidebarItem
            key={item.text}
            item={item}
            isOpen={isOpen}
        />
    )), [isOpen]);

    return (
        <div
            data-testid="sidebar"
            className={classNames(classes.Sidebar, { [classes.isOpen]: isOpen }, [className])}
        >
            <BaseButton
                data-testid="sidebar-toggle"
                type="button"
                square
                size="l"
                className={classNames(classes.openBtn, {}, [])}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {isOpen ? '>' : '<'}
            </BaseButton>
            <div className={classNames(classes.links, {}, [])}>
                {itemsList}
            </div>
            <div className={classes.switchers}>
                <ThemeSwitcher className="" />
                <LangSwitcher className="" />
            </div>
        </div>
    );
};
