import '../../shared/card.scss';
import { Announcement } from '../../viewmodels/announcemnts.viewmodel';

interface Props {
    announcement: Announcement;
}

export default function AnnouncementCard({ announcement }: Props) {
    return (
        <div className="card">
            <h3>{announcement.title}</h3>
            <p>{announcement.content}</p>
            <div className='date'>
                <p>
                    {new Date(announcement.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: '2-digit',
                    })}
                </p>
            </div>
        </div>
    );
}