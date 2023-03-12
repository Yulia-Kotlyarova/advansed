import React from 'react';
import HouseIcon from 'shared/assets/icons/house-solid.svg';
import AboutIcon from 'shared/assets/icons/address-card-regular.svg';
import UserIcon from 'shared/assets/icons/user-regular.svg';
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
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
    {
        path: RoutePath.profile,
        Icon: UserIcon,
        text: 'profile',
    },
];
