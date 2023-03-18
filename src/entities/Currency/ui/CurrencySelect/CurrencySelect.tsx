import { memo, useCallback } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currancy';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  readOnly?: boolean;
  onChange?: (value?: Currency) => void;
}

export const CurrencyList = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(({
    className,
    value,
    onChange,
    readOnly,
}: CurrencySelectProps) => {
    const onChangeHandler = useCallback((value: Currency) => {
        onChange?.(value);
    }, []);

    return (
        <Select
            className={className}
            value={value}
            options={CurrencyList}
            readOnly={readOnly}
            onChange={onChangeHandler}
        />
    );
});
