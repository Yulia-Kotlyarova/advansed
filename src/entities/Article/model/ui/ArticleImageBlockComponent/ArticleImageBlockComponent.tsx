import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { ArticleImageBlock } from '../../types/article';
import classes from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => (
    <div className={classNames(classes.ArticleImageBlockComponent, {}, [className])}>
        <img src={block?.src} alt={block.title} className={classes.img} />
        {block?.title && <BaseText text={block.title} align="center" />}
    </div>
));
