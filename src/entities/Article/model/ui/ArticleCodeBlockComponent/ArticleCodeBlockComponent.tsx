import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className: string;

}

export const ArticleCodeBlockComponent = ({ className }: ArticleCodeBlockComponentProps) => {
    const { t } = useTranslation('about');
    return (
        <div className={classNames(classes.ArticleCodeBlockComponent, {}, [className])} />
    );
};
