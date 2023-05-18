import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { Tabs, TabsItem } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entities/Article/model/types/article';
import { useSelector } from 'react-redux';
import { getArticlesPageType } from 'pages/ArticleListPage/model/selectors/articleListSelectors';
import classes from './ArticleTypesTabs.module.scss';

interface ArticleTypesTabsProps {
  className?: string;
  onChangeType: (value: ArticleType) => void;
}

export const ArticleTypesTabs = memo(({ className, onChangeType }: ArticleTypesTabsProps) => {
    const { t } = useTranslation('article');
    const type = useSelector(getArticlesPageType);

    const tabs = useMemo<TabsItem[]>(() => [
        { value: ArticleType.ALL, content: t('ALL') },
        { value: ArticleType.IT, content: t('IT') },
        { value: ArticleType.REACT, content: t('REACT') },
        { value: ArticleType.ECONOMICS, content: t('ECONOMICS') },
        { value: ArticleType.SCIENCE, content: t('SCIENCE') },
    ], []);

    return (
        <div className={classes.ArticleTypesTabs}>
            <Tabs
                tabs={tabs}
                value={type}
                // @ts-ignore
                onClickTab={(type) => onChangeType(type.value)}
            />
        </div>
    );
});
