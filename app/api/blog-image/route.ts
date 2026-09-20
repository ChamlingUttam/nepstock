import { readFileSync } from 'fs';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const fileBuffer = readFileSync('C:/Users/Acer/.gemini/antigravity/brain/187a9370-fd6f-4262-8bf1-e9110be5c2dd/.user_uploaded/media_1789883336119.jpg');
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'image/jpeg',
      },
    });
  } catch (error) {
    return new NextResponse('Image not found', { status: 404 });
  }
}
