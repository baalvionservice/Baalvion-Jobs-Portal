
import { NextResponse } from 'next/server';
import { requestAccess } from '@/mocks/baalvion-api';

export async function POST(request: Request) {
  const body = await request.json();
  const { email } = body;

  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!email || !email.includes('@')) {
    return NextResponse.json(
      { success: false, message: 'Invalid institutional email provided.' },
      { status: 400 }
    );
  }

  const message = requestAccess.mockResponse.message.replace('{email}', email);

  return NextResponse.json({
    success: true,
    message,
  });
}
