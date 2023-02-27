import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { BaseButton } from 'shared/ui/BaseButton/BaseButton';
import { BaseInput } from 'shared/ui/BaseInput/BaseInput';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation('translation');
    const onChange = () => {

    };
    return (
        <div className={classNames(classes.LoginForm, {}, [className])}>
            <BaseInput
                className={classes.input}
                placeholder={t('Input Name')}
                onChange={onChange}
            />
            <BaseInput
                className={classes.input}
                placeholder={t('Input Password')}
                onChange={onChange}
            />
            <BaseButton>
                {' '}
                {t('LogIn')}
            </BaseButton>
        </div>
    );
};
