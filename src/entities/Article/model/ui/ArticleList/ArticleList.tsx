import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { useTranslation } from 'react-i18next';
import {
    AutoSizer, List, ListRowProps, WindowScroller,
} from 'react-virtualized';
import { PAGE_ID } from 'shared/ui/Page/Page';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleView } from '../../types/article';
import { Article, ArticleListItem } from '../../..';
import classes from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  view: ArticleView;
  isLoading: boolean;
  virtualized?: boolean;
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
    className,
    articles,
    view = ArticleView.SMALL,
    isLoading,
    virtualized = true,
}: ArticleListProps) => {
    const { t } = useTranslation('article');

    const isBig = view === ArticleView.BIG;
    const itemsPerRow = isBig ? 1 : 4;
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

    if (!isLoading && articles.length === 0) {
        return <BaseText theme="error" text={t('no articles')} />;
    }

    const rowRenderer = ({
        key,
        index,
        style,
        isScrolling,
    }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    className={classes.card}
                    article={articles[i]}
                    view={view}
                    key={`str${i}`}
                />
                ,
            );
        }

        return (
            <div
                key={key}
                style={style}
                className={classes.row}
            >
                {items}
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
                    {virtualized
                        ? (
                            <List
                                height={height ?? 500}
                                rowCount={rowCount}
                                rowHeight={isBig ? 700 : 350}
                                rowRenderer={rowRenderer}
                                width={width ? width - 80 : 700}
                                autoHeight
                                onScroll={onChildScroll}
                                isScrolling={isScrolling}
                                scrollTop={scrollTop}
                            />
                        )
                        : (
                            articles.map((article) => (
                                <ArticleListItem
                                    key={article.id}
                                    article={article}
                                    view={ArticleView.SMALL}
                                />
                            ))
                        )}
                    {isLoading && getSkeletons(view)}
                </div>
            )}
        </WindowScroller>
    );
});
