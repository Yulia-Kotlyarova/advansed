import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { BaseInput } from 'shared/ui/BaseInput/BaseInput';
import { BaseButton } from 'shared/ui/BaseButton/BaseButton';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModalLoader, ReducersList } from 'shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { addNewCommentActions, addNewCommentReducer } from '../../model/slices/addNewCommentSlice';
import { getNewCommentError, getNewCommentText } from '../../model/selectors/addNewCommentSelectors';
import classes from './AddNewComment.module.scss';

export interface AddNewCommentProps {
  className?: string;
  sendNewComment: (text: string) => void;
}

const reducers: ReducersList = {
    addNewComment: addNewCommentReducer,
};

const AddNewComment = memo(({ className, sendNewComment }: AddNewCommentProps) => {
    const { t } = useTranslation('translation');
    const text = useSelector(getNewCommentText);
    const error = useSelector(getNewCommentError);
    const dispatch = useAppDispatch();

    const onHandleChange = useCallback((value: string) => {
        dispatch(addNewCommentActions.setText(value));
    }, []);
    const onSend = useCallback(() => {
        sendNewComment(text ?? '');
    }, [text, sendNewComment]);

    return (
        <DynamicModalLoader reducers={reducers} removeAfterUnmount>
            {error && <BaseText text={error} theme="error" />}
            <form
                className={classNames(classes.AddNewComment, {}, [className])}
            >
                <BaseInput
                    className={classes.input}
                    value={text ?? ''}
                    onChange={onHandleChange}
                    placeholder={t('Text a comment')}
                />
                <BaseButton
                    className={classes.sendBtn}
                    theme="primary"
                    onClick={onSend}
                >
                    {t('Send')}
                </BaseButton>
            </form>
        </DynamicModalLoader>
    );
});

export default AddNewComment;
