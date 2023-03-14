import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import classes from './BaseInput.module.scss';

type HTNLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface BaseInputProps extends HTNLInputProps{
    className?: string;
    value?: string;
    onChange: (value: string) => void;
}

export const BaseInput = memo((props: BaseInputProps) => {
    const {
        className,
        value,
        type = 'text',
        placeholder,
        onChange,
        ...otherProps
    } = props;

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <input
            className={classNames(classes.BaseInput, {}, [className])}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChangeValue(e)}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        />
    );
});
