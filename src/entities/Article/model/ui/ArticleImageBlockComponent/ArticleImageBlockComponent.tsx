import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className: string;

}

export const ArticleImageBlockComponent = ({ className }: ArticleImageBlockComponentProps) => {
    const { t } = useTranslation('about');
    return (
        <div className={classNames(classes.ArticleImageBlockComponent, {}, [className])} />
    );
};
