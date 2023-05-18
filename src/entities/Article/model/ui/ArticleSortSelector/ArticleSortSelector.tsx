import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { Order } from 'shared/types';
import { ArticleSortField, ArticleType } from '../../types/article';
import classes from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sort?: ArticleSortField;
  order?: Order;
  onChangeOrder: (value: Order) => void;
  onChangeSort: (value: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort,
    } = props;
    const { t } = useTranslation('article');

    const orderOptions = useMemo<SelectOption[]>(() => [
        {
            value: 'asc',
            content: t('ascending'),
        },
        {
            value: 'desc',
            content: t('descending'),
        },
    ], []);

    const sortFieldOptions = useMemo<SelectOption[]>(() => [
        {
            value: ArticleSortField.TITLE,
            content: t('title'),
        },
        {
            value: ArticleSortField.VIEW,
            content: t('view'),
        },
        {
            value: ArticleSortField.CREATED,
            content: t('date'),
        },
    ], []);

    return (
        <div className={classNames(classes.ArticleSortSelector, {}, [className])}>
            <Select<ArticleSortField>
                value={sort}
                options={sortFieldOptions}
                label={t('Sort')}
                onChange={onChangeSort}
            />
            <Select
                className={classes.order}
                value={order}
                options={orderOptions}
                label={t('Order')}
                onChange={onChangeOrder}
            />
        </div>
    );
});
