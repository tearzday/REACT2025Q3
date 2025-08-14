import { APIData } from '@/types';
import HomeClient from './client';
import APICard from '@/api/card';

export default async function Page() {
  const body = {
    name: '',
    page: 1,
  };

  const data: APIData = await APICard.getCards(body);

  return <HomeClient initialData={data} />;
}
