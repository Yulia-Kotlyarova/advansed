import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { BaseButton } from 'shared/ui/BaseButton/BaseButton';
import { BaseInput } from 'shared/ui/BaseInput/BaseInput';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions, loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { getLogin } from 'features/AuthByUserName/model/selectors/getLoginState/getLoginState';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { DynamicModalLoader, ReducersList } from 'shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import classes from './LoginForm.module.scss';
import { fetchLogin } from '../../model/services/loginByUserName';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initReducer: ReducersList = { loginForm: loginReducer };

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation('translation');
    const dispatch = useAppDispatch();

    const {
        username, password, error, isLoading,
    } = useSelector(getLogin);

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, []);
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, []);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(fetchLogin({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [username, password]);
    return (
        <DynamicModalLoader
            // eslint-disable-next-line i18next/no-literal-string
            reducers={initReducer}
            removeAfterUnmount
        >
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
        </DynamicModalLoader>
    );
});

export default LoginForm;
