import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import React, { Suspense, useEffect } from 'react';
import { PageLoader } from 'widgets/PageLoader';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User/model';

const App = () => {
    const dispatch = useDispatch();
    const { theme } = useTheme();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, []);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader className="" />}>
                <Navbar className="header-nav" />
                <div className="content-page">
                    <Sidebar className="" />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
