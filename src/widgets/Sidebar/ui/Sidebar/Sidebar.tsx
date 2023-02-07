import classes from './Sidebar.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {useState} from 'react';
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher/ThemeSwitcher';

interface SidebarProps {
	className: string;

}

export const Sidebar = ({className}: SidebarProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={classNames(classes.Sidebar, {[classes.isOpen]: isOpen}, [className])}>
			<button onClick={() => setIsOpen(prev => !prev)}> + </button>
			<div className={classes.switchers}>
				<ThemeSwitcher className={''}/>
			</div>
		</div>
	);
};
