import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Article, ArticleListItem } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/types/article';
import { ArticleListItemSkeleton } from 'entities/Article/model/ui/ArticleListItem/ArticleListItemSkeleton';
import classes from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  view: ArticleView;
  isLoading: boolean;
}

const getSkeletons = (view: ArticleView) => (
    new Array(view === ArticleView.BIG ? 3 : 9)
        .fill(0)
        .map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <ArticleListItemSkeleton className={classes.card} key={index} view={view} />
        ))
);

export const ArticleList = memo(({
    className, articles, view = ArticleView.SMALL, isLoading,
}: ArticleListProps) => {
    if (isLoading) {
        return (
            <div className={classNames(classes.ArticleList, {}, [className, classes[ArticleView.SMALL]])}>
                {getSkeletons(view)}
            </div>
        );
    }

    const renderArticles = (article: Article) => (
        <ArticleListItem
            key={article.id}
            className={classes.card}
            article={article}
            view={view}
        />
    );

    return (
        <div className={classNames(classes.ArticleList, {}, [className, classes[ArticleView.SMALL]])}>
            {articles.length > 0
                ? articles.map(renderArticles)
                : null}
        </div>
    );
});
