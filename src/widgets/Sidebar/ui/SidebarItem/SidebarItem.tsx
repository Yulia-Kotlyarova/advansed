import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { BaseLink, BaseLinkTheme } from 'shared/ui/BaseLink/BaseLink';
import { SidebarItemType } from '../../model/types/sidebar';
import classes from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    isOpen: boolean;
    authOnly?: boolean;
}

export const SidebarItem = memo(({ item, isOpen, authOnly }: SidebarItemProps) => {
    const { t } = useTranslation('translation');

    return (
        <BaseLink
            theme={BaseLinkTheme.PRIMARY}
            to={item.path}
            className={classNames('', { [classes.isOpen]: isOpen }, [])}
        >
            <item.Icon className={classes.linkIcon} />
            <span className={classes.link}>
                {t(item.text)}
            </span>
        </BaseLink>
    );
});
