import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { BaseButton } from 'shared/ui/BaseButton/BaseButton';
import classes from './PageError.module.scss';

export const PageError = () => {
    const { t } = useTranslation('translation');

    const onReload = () => {
        document.location.reload();
    };
    return (
        <div className={classNames(classes.PageError, {}, [])}>
            <p>
                {' '}
                {t('page error')}
                {' '}
            </p>
            <BaseButton onClick={() => onReload()}>
                {' '}
                {t('restart')}
                {' '}
            </BaseButton>
        </div>
    );
};
