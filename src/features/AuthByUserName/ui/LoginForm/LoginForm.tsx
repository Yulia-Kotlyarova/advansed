import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { BaseButton } from 'shared/ui/BaseButton/BaseButton';
import { BaseInput } from 'shared/ui/BaseInput/BaseInput';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from 'features/AuthByUserName/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUserName/model/selectors/getLoginState/getLoginState';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import classes from './LoginForm.module.scss';
import { fetchLogin } from '../../model/services/loginByUserName';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation('translation');
    const dispatch = useDispatch();

    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, []);
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, []);

    const onLoginClick = useCallback(() => {
        dispatch(fetchLogin({ username, password }));
    }, [username, password]);
    return (
        <form className={classNames(classes.LoginForm, {}, [className])}>
            <h2>{t('LogIn')}</h2>
            {error && <BaseText text={t('error')} theme="error" />}
            <BaseInput
                className={classes.input}
                placeholder={t('Input Name')}
                value={username}
                onChange={onChangeUserName}
            />
            <BaseInput
                className={classes.input}
                type="password"
                placeholder={t('Input Password')}
                value={password}
                onChange={onChangePassword}
            />
            <BaseButton
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {' '}
                {t('LogIn')}
            </BaseButton>
        </form>
    );
});
