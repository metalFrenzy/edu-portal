import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { useEffect } from 'react';
import { getAnnouncements } from '../services/announcement.service';
import { getQuizzes } from '../services/quizzes.service';

export default function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [announcements, quizzes] = await Promise.all([
          getAnnouncements(),
          getQuizzes(),
        ]);
        console.log('📢 Announcements:', announcements);
        console.log('📝 Quizzes:', quizzes);
      } catch (err) {
        console.error('❌ Error fetching data:', err);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}
