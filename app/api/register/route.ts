import bcrypt from 'bcrypt'
import { NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client'
export async function POST(req: NextRequest) {
  try {
    const prisma = new PrismaClient()
    const { full_name, email, password } = await req.json()

    if (!email || !password) {
      return Response.json(
        { error: 'Missing email or password' },
        { status: 400 }
      )
    }
    const userExist = await prisma.user.findUnique({
      where: {
        email: email,
      },
    })
    console.log(userExist)

    if (userExist) {
      return Response.json(
        { error: 'User already registered' },
        { status: 409 }
      )
    }
    const hashedPassword = await bcrypt.hash(password, 12)
    const insertUser = await prisma.user.create({
      data: {
        email: email,
        full_name: full_name,
        password: hashedPassword,
        isAdmin: false,
      },
    })

    return Response.json({ success: insertUser }, { status: 201 })
  } catch (err) {
    console.error('Register Error:', err)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
