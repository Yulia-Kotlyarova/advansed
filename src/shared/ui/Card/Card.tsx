import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import classes from './Card.module.scss';

interface CardProps {
  className?: string;
  children: ReactNode;
}

export const Card = memo(({ className, children }: CardProps) => (
    <div className={classNames(classes.Card, {}, [className])}>
        {children}
    </div>
));
