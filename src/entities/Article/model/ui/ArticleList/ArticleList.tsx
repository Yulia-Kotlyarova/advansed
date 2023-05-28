import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Article, ArticleListItem } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/types/article';
import { ArticleListItemSkeleton } from 'entities/Article/model/ui/ArticleListItem/ArticleListItemSkeleton';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { useTranslation } from 'react-i18next';
import {
    AutoSizer, List, ListRowProps, WindowScroller,
} from 'react-virtualized';
import { PAGE_ID } from 'shared/ui/Page/Page';
import classes from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  view: ArticleView;
  isLoading: boolean;
}

const getSkeletons = (view: ArticleView) => (
    <div className={classNames(classes.ArticleList, {}, [classes[ArticleView.SMALL]])}>
        {new Array(view === ArticleView.BIG ? 3 : 9)
            .fill(0)
            .map((item, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <ArticleListItemSkeleton className={classes.card} key={index} view={view} />
            ))}
    </div>
);

export const ArticleList = memo(({
    className, articles, view = ArticleView.SMALL, isLoading,
}: ArticleListProps) => {
    const { t } = useTranslation('article');

    const isBig = view === ArticleView.BIG;

    const itemsPerRow = isBig ? 1 : 4;
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

    const renderArticles = (article: Article) => (
        <ArticleListItem
            key={article.id}
            className={classes.card}
            article={article}
            view={view}
        />
    );

    if (!isLoading && articles.length === 0) {
        return <BaseText theme="error" text={t('no articles')} />;
    }

    const rowRenderer = ({
        key,
        index,
        style,
        isScrolling,
    }: ListRowProps) => {
        return (
            <div key={key} style={style}>
                <ArticleListItem
                    className={classes.card}
                    article={articles[index]}
                    view={view}
                />
            </div>
        );
    };

    return (
        <WindowScroller
            onScroll={() => console.log('scroll')}
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                width,
                height,
                registerChild,
                onChildScroll,
                isScrolling,
                scrollTop,
            }) => (
                <div
                    className={classNames(classes.ArticleList, {}, [className, classes[ArticleView.SMALL]])}
                    ref={registerChild}
                >
                    <List
                        height={height ?? 500}
                        rowCount={rowCount}
                        rowHeight={isBig ? 700 : 400}
                        rowRenderer={rowRenderer}
                        width={width ? width - 80 : 700}
                        autoHeight
                        onScroll={onChildScroll}
                        isScrolling={isScrolling}
                        scrollTop={scrollTop}
                    />
                    {isLoading && getSkeletons(view)}
                </div>
            )}
        </WindowScroller>
    );
});
