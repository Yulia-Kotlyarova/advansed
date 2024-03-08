import { memo, useCallback } from 'react';
import { Listbox } from 'shared/ui/Listbox';
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, []);

    return (
        <Listbox
            className={className}
            selectedValue={value}
            defaultValue={t('Currency')}
            items={CurrencyList}
            readOnly={readOnly}
            direction="top"
            label={t('Currency')}
            onChange={onChangeHandler}
        />
    );
});
