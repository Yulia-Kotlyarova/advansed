import { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import classes from './BaseText.module.scss';

type TextTheme = 'default' | 'error'

type TextAlign = 'right' | 'left' | 'center'

type TextSize = 's' | 'm' | 'l'

interface BaseTextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const BaseText = memo((props: BaseTextProps) => {
    const {
        className,
        title,
        text,
        theme = 'default',
        align = 'left',
        size = 's',
    } = props;

    const mods: Mods = {
        [classes[theme]]: true,
        [classes[align]]: true,
        [classes[size]]: true,
    };

    return (
        <div className={classNames(classes.BaseText, mods, [className])}>
            <h3 className={classNames(classes.title, {}, [className])}>
                {title}
            </h3>
            <p className={classNames(classes.text, {}, [className])}>
                {text}
            </p>
        </div>
    );
});
