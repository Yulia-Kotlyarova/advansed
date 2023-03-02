import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import classes from './BaseButton.module.scss';

export type ThemeBaseButton = 'outlined' | 'primary' | 'secondary' | 'background' | 'background-inverted';
export type BaseButtonSize = 's' | 'm' | 'l';

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  theme?: ThemeBaseButton;
  square?: boolean;
  size?: BaseButtonSize;
  disabled?: boolean;
}

export const BaseButton: FC<BaseButtonProps> = (props: BaseButtonProps) => {
    const {
        className, theme = 'primary', children, square = false, size = 'm', disabled = false, ...otherProps
    } = props;

    const modes: Record<string, boolean> = {
        [classes.square]: square,
        [classes[size]]: true,
        [classes.disabled]: disabled,
    };
    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(classes.BaseButton, modes, [className, classes[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
