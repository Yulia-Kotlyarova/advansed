import { memo, useCallback } from 'react';
import { Listbox } from 'shared/ui/Listbox';
import { useTranslation } from 'react-i18next';
import { Country } from '../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    readOnly?: boolean;
    onChange?: (value?: Country) => void;
}

const CountryList = [
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
];

export const CountrySelect = memo(({
    className,
    value,
    onChange,
    readOnly,
}: CountrySelectProps) => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, []);

    return (
        <Listbox
            selectedValue={value}
            className={className}
            items={CountryList}
            readOnly={readOnly}
            direction="top"
            label={t('Country')}
            onChange={onChangeHandler}
        />
    );
});
