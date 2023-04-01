import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Code } from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../types/article';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(({ className, block }: ArticleCodeBlockComponentProps) => (
    <Code
        className={classNames('', {}, [className])}
        text={block.code}
    />
));
