import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAnnouncements } from '../../services/announcement.service';
import { getQuizzes } from '../../services/quizzes.service';
import { logout } from '../../store/authSlice';
import './dashboard.scss';
import AnnouncementCard from '../../components/announcement-card/announcement-card';
import QuizCard from '../../components/quizzes-card/quizzes-card';
import Sidebar from '../../components/sidebar/sidebar';
import { Announcement } from '../../viewmodels/announcemnts.viewmodel';
import { Quiz } from '../../viewmodels/quizzes.viewmodel';
import CampaignIcon from '@mui/icons-material/Campaign';
import QuizIcon from '@mui/icons-material/MenuBook';

export default function Dashboard() {
  const dispatch = useDispatch();
  const [announcements, setAnnouncements] = useState([]);
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [annData, quizData] = await Promise.all([
          getAnnouncements(),
          getQuizzes(),
        ]);
        setAnnouncements(annData);
        setQuizzes(quizData);
        console.log(annData);
        console.log(quizData);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <button onClick={() => dispatch(logout())} className='logout-btn'>Logout</button>
        </div>

        <section>
          <h2><CampaignIcon sx={{ mr: 1, color: '#2b8887' }} /> Announcements</h2>
          <div className="card-grid">
            {announcements.map((a: Announcement) => (
              <AnnouncementCard key={a._id} announcement={a} />
            ))}
          </div>
        </section>

        <section>
          <h2><QuizIcon sx={{ mr: 1, color: '#2b8887' }} /> Quizzes</h2>
          <div className="card-grid">
            {quizzes.map((q: Quiz) => (
              <QuizCard key={q._id} quiz={q} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
