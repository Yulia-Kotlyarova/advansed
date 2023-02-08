import classes from './LangSwitcher.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import React from 'react';
import {BaseButton} from 'shared/ui/BaseButton/BaseButton';

interface LangSwitcherProps {
	className: string;

}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
	const { t, i18n } = useTranslation('translation');
	const onToggle = () => {
		i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
	}

	return (
		<BaseButton
			className={classNames(classes.LangSwitcher, {}, [className])}
			theme={'outlined'}
			onClick={onToggle}
		>
			{i18n.language === 'en' ? 'RUS' : 'ENG'}
		</BaseButton>
	)
};
