// Тут роут для получения/добавления/удаления юзеров

// app/api/users/route.ts - ваш backend endpoint
import { NextResponse } from 'next/server'

export async function GET() {
  // Работа с базой данных
  const users = await db.user.findMany()
  
  return NextResponse.json(users)
}

export async function POST(request: Request) {
  const body = await request.json()
  // Создание пользователя в БД
  const user = await db.user.create({ data: body })
  
  return NextResponse.json(user)
}