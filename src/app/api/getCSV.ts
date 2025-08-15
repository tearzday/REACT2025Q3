import { CardInfo } from '@/types';

export default async function getCSV(data: Array<CardInfo>) {
  const response = await fetch('/api/generateCSV', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }),
  });

  const result = await response.blob();

  if (!response.ok) {
    console.error('Error downloading the file');
    return;
  }

  return result;
}
