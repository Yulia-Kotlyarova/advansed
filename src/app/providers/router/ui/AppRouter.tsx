import { Route, Routes } from 'react-router-dom';
import React, { Suspense, useMemo } from 'react';
import { routeConfig } from 'app/providers/router/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User/model';

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);
    const routes = useMemo(() => (
        Object.values(routeConfig).filter((route) => {
            if (route.authOnly && !isAuth?.username) {
                return false;
            }
            return true;
        })), [isAuth?.username]);
    return (
        <Routes>
            {routes.map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<PageLoader className="" />}>
                            <div className="page-wrapper">
                                {' '}
                                {element}
                                {' '}
                            </div>
                        </Suspense>

                    )}
                />
            ))}
        </Routes>
    );
};

export default AppRouter;
