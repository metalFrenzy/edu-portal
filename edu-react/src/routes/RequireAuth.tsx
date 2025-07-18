import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import { Navigate } from 'react-router-dom';
import type { JSX } from 'react';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return isLoggedIn ? children : <Navigate to="/" replace />;
};

export default RequireAuth;