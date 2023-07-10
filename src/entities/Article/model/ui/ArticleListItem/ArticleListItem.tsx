import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { BaseButton } from 'shared/ui/BaseButton/BaseButton';
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';
import { BaseLink } from 'shared/ui/BaseLink/BaseLink';
import { Article } from '../../..';
import classes from './ArticleListItem.module.scss';
import { ArticleBlockType, ArticleTextBlock, ArticleView } from '../../types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: '_blank';
}

export const ArticleListItem = memo(({
    className, article, view, target,
}: ArticleListItemProps) => {
    const { t } = useTranslation('article');

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <div className={classNames(classes[view], {}, [className])}>
                <Card className={classes.card}>
                    <div className={classes.header}>
                        <Avatar alt={t('avatar')} size="sm" avatar={article.user.avatar} />
                        <span className={classes.name}>
                            {article.user.username}
                        </span>
                        <BaseText text={article?.tag?.join(', ')} className={classes.types} />
                        <span className={classes.date}>
                            {article.createdDate}
                        </span>
                    </div>
                    <div className={classes.imageBox}>
                        <img src={article.img} alt={article.title} className={classes.img} />
                    </div>

                    <BaseText text={String(article.title)} className={classes.title} />

                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={classes.textBlock} />
                    )}
                    <div className={classes.footer}>
                        <BaseLink to={`${RoutePath.article} ${article?.id}`}>
                            <BaseButton theme="secondary">
                                {t('Read more...')}
                            </BaseButton>
                        </BaseLink>
                        <BaseText text={String(article.views)} className={classes.views} />
                        <Icon Svg={EyeIcon} className={classes.icon} />
                    </div>
                </Card>
            </div>
        );
    }
    return (
        <BaseLink
            className={classNames(classes[view], {}, [className])}
            to={RoutePath.article + article.id}
            target={target}
        >
            <Card className={classes.card}>
                <div className={classes.imageBox}>
                    <img src={article.img} alt={t('avatar')} className={classes.img} />
                    <span className={classes.date}>
                        {article.createdDate}
                    </span>
                </div>
                <div className={classes.textWrap}>
                    <BaseText text={article?.tag?.join(', ')} className={classes.types} />
                    <BaseText text={String(article.views)} className={classes.views} />
                    <Icon Svg={EyeIcon} className={classes.icon} />
                </div>
                <BaseText text={String(article.title)} className={classes.title} />
            </Card>
        </BaseLink>
    );
});
