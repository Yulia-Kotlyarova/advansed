import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { PageNotFound } from 'pages/PageNotFound';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlePage } from 'pages/ArticlePage';
import { ArticleListPage } from 'pages/ArticleListPage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  // ARTICLE_LIST = 'article_list',
  ARTICLE = 'article',
  // last
  PAGE_404 = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/',
    [AppRoutes.ARTICLE]: '/articles/', //* + id
    // [AppRoutes.ARTICLE_LIST]: '/articles',
    [AppRoutes.PAGE_404]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE]: {
        path: `${RoutePath.article}:id`,
        element: <ArticlePage />,
        authOnly: true,
    },
    // [AppRoutes.ARTICLE_LIST]: {
    //     path: RoutePath.article_list,
    //     element: <ArticleListPage />,
    //     authOnly: true,
    // },
    [AppRoutes.PAGE_404]: {
        path: RoutePath.not_found,
        element: <PageNotFound />,
    },
};
