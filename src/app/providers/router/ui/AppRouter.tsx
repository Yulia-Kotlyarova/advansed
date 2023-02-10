import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { routeConfig } from 'app/providers/router/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
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

export default AppRouter;
