import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import classes from './Select.module.scss';

interface SelectOption {
  value: string;
  content: string;
}
interface SelectProps {
    className?: string;
    label?: string;
    options: SelectOption[];
    value?: string;
    readOnly?: boolean;
    onChange?: (value?: any) => void;
}

export const Select = memo(({
    className, label, options, value, readOnly, onChange,
}: SelectProps) => {
    const optionsList = useMemo(() => (
        options.map((el) => (
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
        onChange?.(e.target.value);
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
});
