import { classNames } from 'shared/lib/classNames/classNames';
import React, { useMemo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { BaseButton } from 'shared/ui/BaseButton/BaseButton';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User/model';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const isAuth = useSelector(getUserAuthData);
    const [isOpen, setIsOpen] = useState(false);

    const itemsList = useMemo(() => SidebarItemsList.map((item) => {
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
