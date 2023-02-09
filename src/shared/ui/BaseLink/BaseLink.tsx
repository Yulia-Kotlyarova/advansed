import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import classes from './BaseLink.module.scss';

export enum BaseLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface BaseLinkProps extends LinkProps{
  className?: string;
  theme?: BaseLinkTheme;

}

export const BaseLink: FC<BaseLinkProps> = (props) => {
    const {
        className,
        children,
        to,
        theme = BaseLinkTheme.PRIMARY,
        ...restProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(classes.BaseLink, {}, [className, classes[theme]])}
            {...restProps}
        >
            {children}
        </Link>
    );
};
