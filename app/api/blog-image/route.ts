import { readFileSync } from 'fs';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const fileBuffer = readFileSync('C:/Users/Acer/downloads/detailimage.jpg');
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'image/jpeg',
      },
    });
  } catch (error) {
    return new NextResponse('Image not found', { status: 404 });
  }
}
