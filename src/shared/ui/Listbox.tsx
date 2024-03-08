import { classNames } from 'shared/lib/classNames/classNames';
import {
    Fragment, memo, ReactNode,
} from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import { VStack } from './Stack';
import { BaseButton } from './BaseButton/BaseButton';
import classes from './Listbox.module.scss';

export interface ListboxItem {
    value: string,
    content: ReactNode,
    disabled?: boolean,
}

type DropdownDirection = 'top' | 'bottom';

interface ListboxProps {
    className?: string;
    selectedValue?: string;
    defaultValue?: string;
    items: ListboxItem[];
    readOnly?: boolean;
    direction?: DropdownDirection;
    label?: string;
    onChange: (value: string) => void;
}

export const Listbox = memo((props: ListboxProps) => {
    const { t } = useTranslation('main');

    const {
        className,
        selectedValue,
        defaultValue = t('Выберите значение'),
        items,
        readOnly = false,
        direction = 'bottom',
        label,
        onChange,
    } = props;

    return (
        <VStack gap="4" align="start">
            { !!label && (
                <h4>
                    {' '}
                    { label }
                    {' '}
                </h4>
            )}
            <HListbox
                className={classNames(classes.Listbox, {}, [className])}
                as="div"
                value={selectedValue ?? defaultValue}
                onChange={onChange}
                disabled={readOnly}
            >
                <HListbox.Button as="div" className={classes.trigger}>

                    <BaseButton className={classes.listButton}>
                        {selectedValue ?? defaultValue}
                    </BaseButton>
                </HListbox.Button>
                <HListbox.Options
                    className={classNames(`${classes.itemList} , ${classes[direction]}`, {}, [])}
                >
                    {items.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        classes.item,
                                        {
                                            [classes.active]: active,
                                            [classes.selected]: selected,
                                            [classes.disabled]: item?.disabled,
                                        },
                                    )}
                                >
                                    {item.content}
                                    {selected && '+'}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </VStack>
    );
});
