import classes from './Navbar.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {BaseLink, BaseLinkTheme} from 'shared/ui/BaseLink/BaseLink';
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher/ThemeSwitcher';

interface NavbarProps {
	className: string;

}

const Navbar = ({className}: NavbarProps) => {
	return (
		<div className={classNames(classes.Navbar, {}, [className])}>
			<ThemeSwitcher className={''}/>
			<div className={classNames(classes.links, {}, [])}>
				<BaseLink to={'/'} theme={BaseLinkTheme.PRIMARY}>home</BaseLink>
				<BaseLink to={'/about'} theme={BaseLinkTheme.INVERTED}>about</BaseLink>
			</div>
		</div>
	);
};

export default Navbar;
