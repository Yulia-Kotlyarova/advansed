import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthData, getUserRoles, UserRole } from 'entities/User/model';
import { useMemo } from 'react';
import { RoutePath } from '../routeConfig/routeConfig';

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);
    const data = useSelector(getUserAuthData);

    const hasAccess = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((role) => {
            return userRoles?.includes(role);
        });
    }, [roles, userRoles]);

    console.log('hasAccess', hasAccess, roles, userRoles, data);

    if (!hasAccess) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
    }

    if (!auth) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
}
