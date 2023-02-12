import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import classes from './BaseButton.module.scss';

export type ThemeBaseButton = 'outlined' | 'primary' | 'secondary';

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  theme?: ThemeBaseButton
}

export const BaseButton: FC<BaseButtonProps> = (props: BaseButtonProps) => {
    const {
        className, theme = 'primary', children, ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(classes.BaseButton, {}, [className, classes[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
