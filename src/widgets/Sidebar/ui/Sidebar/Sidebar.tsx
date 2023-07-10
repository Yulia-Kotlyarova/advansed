import { classNames } from 'shared/lib/classNames/classNames';
import React, { useMemo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { BaseButton } from 'shared/ui/BaseButton/BaseButton';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User/model';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import classes from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const isAuth = useSelector(getUserAuthData);
    const [isOpen, setIsOpen] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const itemsList = useMemo(() => sidebarItemsList.map((item) => {
        if (!item.authOnly) {
            return (
                <SidebarItem
                    key={item.text}
                    item={item}
                    isOpen={isOpen}
                />
            );
        }
        if (item.authOnly && isAuth?.username) {
            return (
                <SidebarItem
                    key={item.text}
                    item={item}
                    isOpen={isOpen}
                />
            );
        }

        return null;
    }), [isAuth?.username]);

    return (
        <nav
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
        </nav>
    );
};
