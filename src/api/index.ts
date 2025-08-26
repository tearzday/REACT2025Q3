import type { Data } from '@/types';

export async function getCO2Info(): Promise<Data> {
  const response = await fetch('./data/data.json');
  const data = await response.json();

  return data;
}
