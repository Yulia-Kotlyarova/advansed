import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { ArticleTextBlock } from '../../types/article';
import classes from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => (
    <div className={classNames(classes.ArticleTextBlockComponent, {}, [className])}>
        { block?.title && <BaseText title={block.title} className={classes.title} size="m" />}
        { block?.paragraphs.map((p) => (
            <BaseText key={p} text={p} className={classes.paragraph} />
        )) }
    </div>
));
