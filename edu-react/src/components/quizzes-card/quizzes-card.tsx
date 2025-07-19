import '../../shared/card.scss';
import { Quiz } from '../../viewmodels/quizzes.viewmodel';

interface Props {
    quiz: Quiz;
}
export default function QuizCard({ quiz }: Props) {

    return (
        <div className="card">
            <h3>{quiz.title}</h3>
            <p>Total Marks: {quiz.totalMarks}</p>
            <div className='date'>
                <p>
                    {new Date(quiz.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: '2-digit',
                    })}
                </p>
            </div>
        </div>
    );
}
