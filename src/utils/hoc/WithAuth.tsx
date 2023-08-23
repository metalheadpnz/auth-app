import {Navigate, useLocation} from 'react-router-dom';
import {ReactNode} from 'react';
import {useAppSelector} from "../../hooks/redux";

export const WithAuth = ({children}: { children: ReactNode }) => {
    const location = useLocation();
    // const { username } = useLoginStore();
    const isAuthenticated = useAppSelector(state => state.app.isAuth)

    if (!isAuthenticated) {
        return <Navigate to={'/login'} state={{from: location}} replace/>;
    }

    return <>{children}</>;
};
