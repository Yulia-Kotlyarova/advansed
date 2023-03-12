import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './BaseText.module.scss';

type TextTheme = 'default' | 'error'

interface BaseTextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const BaseText = memo(({
    className, title, text, theme = 'default',
}: BaseTextProps) => (
    <div className={classNames(classes.BaseText, { [classes[theme]]: true }, [className])}>
        <h3 className={classNames(classes.title, {}, [className])}>
            {title}
        </h3>
        <p className={classNames(classes.text, {}, [className])}>
            {text}
        </p>
    </div>
));
