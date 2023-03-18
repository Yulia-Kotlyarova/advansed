import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC, memo } from 'react';
import classes from './BaseButton.module.scss';

export type ThemeBaseButton = 'outlined' |
  'primary' |
  'secondary' |
  'background' |
  'background-inverted' |
  'outline-red';
export type BaseButtonSize = 's' | 'm' | 'l';

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  theme?: ThemeBaseButton;
  square?: boolean;
  size?: BaseButtonSize;
  disabled?: boolean;
}

export const BaseButton: FC<BaseButtonProps> = memo((props: BaseButtonProps) => {
    const {
        className, theme = 'primary', children, square = false, size = 'm', disabled = false, ...otherProps
    } = props;

    const modes: Mods = {
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
});
