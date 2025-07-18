export async function getQuizzes() {
    const response = await fetch('http://localhost:3000/quizzes');
    if (!response.ok) throw new Error('Failed to fetch quizzes');
    return await response.json();
}