import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';

export default function Home() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Welcome to Edu Portal</h1>
      <button onClick={() => dispatch(login())}>Login</button>
    </div>
  );
}