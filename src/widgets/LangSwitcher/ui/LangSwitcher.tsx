import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { BaseButton } from 'shared/ui/BaseButton/BaseButton';
import classes from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation('translation');
    const onToggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <BaseButton
            className={classNames(classes.LangSwitcher, {}, [className])}
            theme="outlined"
            onClick={onToggle}
        >
            {i18n.language === 'en' ? 'RUS' : 'ENG'}
        </BaseButton>
    );
});
