import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { RootState } from '../../store';
import { login } from '../../store/authSlice';
import './home.scss'
import { useTranslation } from 'react-i18next';


export default function Home() {
    const { t } = useTranslation();
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
        <div className='home-container'>
            <h1> <h1>{t('welcome')}</h1></h1>
            <p className='home-subtitle'>{t('welcomeMessage')}</p>
            <button onClick={handleLogin} className='login-button'> {t('login')}</button>
        </div>
    );
}
