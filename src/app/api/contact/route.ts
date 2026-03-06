
import { NextResponse } from 'next/server';
import { contactForm } from '@/mocks/baalvion-api';

export async function POST(request: Request) {
  const body = await request.json();
  const { name } = body;

  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!name) {
    return NextResponse.json(
      { success: false, message: 'Required fields are missing.' },
      { status: 400 }
    );
  }

  const message = contactForm.mockResponse.message.replace('{name}', name);

  return NextResponse.json({
    success: true,
    message,
  });
}
