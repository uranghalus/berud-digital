import NextAuth, { User } from 'next-auth'
import { authConfig } from './auth.config'
import Credentials from 'next-auth/providers/credentials'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

interface ExtendedUser extends User {
  isAdmin: boolean
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const prisma = new PrismaClient()
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Missing Credentials')
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email as string,
          },
        })
        if (!user) {
          throw new Error('User Not Found')
        }
        const passwordMatch = await bcrypt.compare(
          credentials.password as string,
          user.password
        )
        if (!passwordMatch) {
          throw new Error('Incorrect Password')
        }
        return user ?? null
      },
    }),
  ],
  callbacks: {
    async jwt({ user, trigger, session, token }: any) {
      const Extuser: ExtendedUser = user
      if (Extuser) {
        token.user = {
          _id: user._id,
          email: user.email,
          name: user.name,
          isAdmin: user.isAdmin,
        }
      }
      if (trigger === 'update' && session) {
        token.user = {
          ...token.user,
          email: session.user.email,
          name: session.user.name,
        }
      }
      return token
    },
    session: async ({ session, token }: any) => {
      if (token) {
        session.user = token.user
      }
      return session
    },
  },
})
