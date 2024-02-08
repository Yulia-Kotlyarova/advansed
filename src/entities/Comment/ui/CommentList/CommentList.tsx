import { memo } from 'react';
import { BaseText } from 'shared/ui/BaseText/BaseText';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../..';

interface CommentListProps {
  comments?: Comment[];
  isLoading?: boolean;
  error?: string;
}

export const CommentList = memo(({
    comments,
    isLoading,
    error,
}: CommentListProps) => {
    const { t } = useTranslation('article');
    if (isLoading) {
        return (
            <>
                <CommentCard isLoading={isLoading} />
                <CommentCard isLoading={isLoading} />
                <CommentCard isLoading={isLoading} />
            </>
        );
    }
    if (error) {
        return <BaseText theme="error" text={error} />;
    }

    return (
        <VStack gap="16" align="start">
            {comments?.length
                ? comments.map((comment) => <CommentCard isLoading={isLoading} comment={comment} />)
                : <BaseText text={t('no comments')} />}
        </VStack>
    );
});
