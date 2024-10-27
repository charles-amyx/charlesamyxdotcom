export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);
  return `${month}/${day}/${year}`;
}

export function calculateDurationInMonths(durationString: string): number {
  const [startDate, endDate] = durationString.split(' - ').map(d => new Date(d.split('/').reverse().join('-')));
  const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
  return months + 1; // Add 1 to include both start and end months
}
