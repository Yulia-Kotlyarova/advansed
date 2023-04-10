import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User/model';
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';
import HouseIcon from 'shared/assets/icons/house-solid.svg';
import AboutIcon from 'shared/assets/icons/address-card-regular.svg';
import UserIcon from 'shared/assets/icons/user-regular.svg';
import FileIcon from 'shared/assets/icons/file-lines.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                Icon: HouseIcon,
                text: 'home',
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'about',
            },

            // {
            //     path: RoutePath.article_list,
            //     Icon: ArticleListIcon,
            //     text: 'article list',
            //     authOnly: true,
            // },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    Icon: UserIcon,
                    text: 'profile',
                    authOnly: true,
                },
                {
                    path: RoutePath.article,
                    Icon: FileIcon,
                    text: 'article',
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
