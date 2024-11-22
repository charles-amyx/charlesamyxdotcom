export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', { 
    year: 'numeric',
    month: 'long',
    day: 'numeric' 
  }).format(date);
}

export function calculateMonthsBetween(startDate: string, endDate: string): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return (end.getFullYear() - start.getFullYear()) * 12 + 
         (end.getMonth() - start.getMonth());
}