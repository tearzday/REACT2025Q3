import { CardInfo } from '@/types';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { data } = (await req.json()) as { data: CardInfo[] };
  const content = data
    .map(
      (item, index) =>
        `${index + 1}. ${item.name}, ${item.gender}, ${item.species}, ${item.status}\n`
    )
    .join('\n');

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv',
      'Content-Disposition': 'attachment; filename="items.csv"',
    },
  });
}
