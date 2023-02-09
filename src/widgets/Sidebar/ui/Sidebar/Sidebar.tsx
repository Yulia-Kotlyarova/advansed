import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames(classes.Sidebar, { [classes.isOpen]: isOpen }, [className])}>
            <button type="button" onClick={() => setIsOpen((prev) => !prev)}> + </button>
            <div className={classes.switchers}>
                <ThemeSwitcher className="" />
                <LangSwitcher className="" />
            </div>
        </div>
    );
};
