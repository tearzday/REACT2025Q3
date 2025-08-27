import type { Data } from '@/types';

export async function getCO2Info(): Promise<Data> {
  const response = await fetch('./data/data.json');
  const data = (await response.json()) as Data;

  const currentData = Object.entries(data).filter(
    ([, value]) => 'iso_code' in value
  );

  return Object.fromEntries(currentData);
}
