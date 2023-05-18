import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useMemo } from 'react';
import classes from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}
interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: T;
    readOnly?: boolean;
    onChange?: (value: T) => void;
}

export const Select = <T extends string> (props: SelectProps<T>) => {
    const {
        className, label, options, value, readOnly, onChange,
    } = props;
    const optionsList = useMemo(() => (
        !!options?.length && options.map((el) => (
            <option
                key={el.content}
                className={classes.option}
                value={el.value}
            >
                {el.content}
            </option>
        ))
    ), []);

    const onHandleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    return (
        <div className={classNames(classes.wrapper, {}, [className])}>
            {label && (
                <span className={classes.label}>
                    {label}
                </span>
            )}
            <select
                disabled={readOnly}
                className={classes.select}
                value={value}
                onChange={onHandleChange}
            >
                {optionsList}
            </select>

        </div>

    );
};
