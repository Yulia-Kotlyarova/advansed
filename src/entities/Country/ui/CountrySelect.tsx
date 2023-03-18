import { memo, useCallback } from 'react';
import { Select } from 'shared/ui/Select/Select';
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
    const onChangeHandler = useCallback((value: Country) => {
        onChange?.(value);
    }, []);

    return (
        <Select
            className={className}
            value={value}
            options={CountryList}
            readOnly={readOnly}
            onChange={onChangeHandler}
        />
    );
});
