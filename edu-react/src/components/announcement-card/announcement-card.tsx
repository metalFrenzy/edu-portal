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
        </div>
    );
}