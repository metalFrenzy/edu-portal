import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

    return isLoggedIn ? children : <Navigate to="/" replace />;
};

export default RequireAuth;
