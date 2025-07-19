import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { RootState } from '../../store';
import { login } from '../../store/authSlice';
import '/home.scss'


export default function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isLoggedIn);

    const handleLogin = () => {
        dispatch(login());
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard');
        }
    }, [isAuthenticated, navigate]);

    return (
        <div>
            <h1>Welcome to Edu Portal</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
