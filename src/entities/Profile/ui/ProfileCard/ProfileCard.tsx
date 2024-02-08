import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { BaseInput } from 'shared/ui/BaseInput/BaseInput';
import { Loader } from 'shared/ui/Loader/Loader';
import { useTranslation } from 'react-i18next';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { memo } from 'react';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { VStack } from 'shared/ui/Stack';
import { Profile } from '../..';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean,
  error?: string,
  readonly?: boolean,
  onChangeFirstName?: (value?: string) => void,
  onChangeLastName?: (value?: string) => void,
  onChangeCity?: (value?: string) => void,
  onChangeCountry?: (value?: Country) => void,
  onChangeCurrency?: (value?: Currency) => void,
  onChangeUsername?: (value?: string) => void,
  onChangeAvatar?: (value?: string) => void,
}

export const ProfileCard = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeCity,
        onChangeCountry,
        onChangeCurrency,
        onChangeUsername,
        onChangeAvatar,
    } = props;

    const { t } = useTranslation('profile');

    const mods: Mods = {
        [classes.readonly]: readonly,
    };

    if (isLoading) {
        return (
            <div className={classNames(classes.ProfileCard, {}, [className])}>
                <Loader />
            </div>
        );
    }
    if (error) {
        return (
            <div className={classNames(classes.ProfileCard, {}, [className])}>
                <BaseText theme="error" title={error} />
            </div>
        );
    }

    return (
        <VStack align="start" gap="16" className={classNames(classes.ProfileCard, mods, [className])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            { data?.avatar && <Avatar avatar={data?.avatar} alt={t('avatar')} size="md" />}
            <BaseInput value={data?.first ?? ''} onChange={onChangeFirstName} readOnly={readonly} />
            <BaseInput value={data?.lastname ?? ''} onChange={onChangeLastName} readOnly={readonly} />
            <BaseInput value={data?.city ?? ''} onChange={onChangeCity} readOnly={readonly} />
            {/* @ts-ignore */}
            <BaseInput value={data?.username ?? ''} onChange={onChangeUsername} readOnly={readonly} />
            <BaseInput value={data?.avatar ?? ''} onChange={onChangeAvatar} readOnly={readonly} />
            <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readOnly={readonly} />
            <CountrySelect value={data?.country} onChange={onChangeCountry} readOnly={readonly} />
        </VStack>
    );
});
