export async function getAnnouncements() {
  const response = await fetch('http://localhost:3000/announcements');
  if (!response.ok) throw new Error('Failed to fetch announcements');
  return await response.json();
}