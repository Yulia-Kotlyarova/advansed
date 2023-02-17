import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { BaseButton } from 'shared/ui/BaseButton/BaseButton';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            data-testid="sidebar"
            className={classNames(classes.Sidebar, { [classes.isOpen]: isOpen }, [className])}
        >
            <BaseButton
                data-testid="sidebar-toggle"
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                +
            </BaseButton>
            <div className={classes.switchers}>
                <ThemeSwitcher className="" />
                <LangSwitcher className="" />
            </div>
        </div>
    );
};
