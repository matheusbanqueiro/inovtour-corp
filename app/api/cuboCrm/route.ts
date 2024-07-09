import { NextRequest, NextResponse } from 'next/server';
import createDeal from './service';
import { DealPayload } from './model';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    await createDeal(body);

    return new NextResponse(null, { status: 201 });
  } catch (error) {
    return new NextResponse(null, { status: 500 });
  }
}