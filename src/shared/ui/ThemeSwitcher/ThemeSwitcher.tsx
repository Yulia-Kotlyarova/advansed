import classes from './ThemeSwitcher.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {Theme, useTheme} from 'app/providers/ThemeProvider';
import SunIcon from '../../assets/icons/sun-regular.svg';
import MoonIcon from '../../assets/icons/moon-regular.svg';
import {BaseButton} from 'shared/ui/BaseButton/BaseButton';

interface ThemeSwitcherProps {
	className: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
	const {theme, toggleTheme} = useTheme();

	return (
		<BaseButton
			className={classNames(classes.ThemeSwitcher, {}, [className])}
			theme={'outlined'}
			onClick={() => toggleTheme()}>
			{
				theme == Theme.LIGHT ?
				<MoonIcon className={classes.icon}/>
				:
				<SunIcon className={classes.icon}/>
			}
		</BaseButton>
	);
};