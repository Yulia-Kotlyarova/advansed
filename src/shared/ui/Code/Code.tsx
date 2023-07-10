import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback } from 'react';
import { BaseButton } from '../BaseButton/BaseButton';
import CopyIcon from '../../assets/icons/code.svg';
import classes from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = ({ className, text }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(classes.Code, {}, [className])}>
            <BaseButton
                className={classes.copyBtn}
                theme="outlined"
                onClick={onCopy}
            >
                <CopyIcon className={classes.copyIcon} />
            </BaseButton>
            <code>
                {text}
            </code>
        </pre>
    );
};
