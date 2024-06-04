import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  pages: {
    error: '/signin',
    signIn: '/signin',
    newUser: '/signup',
  },
  callbacks: {
    authorized({ request, auth }: any) {
      const protectedPaths = [
        // /\/shipping/,
        // /\/payment/,
        // /\/place-order/,
        /\/profile/,
        // /\/order\/(.*)/,
        /\/admin/,
      ]
      const { pathname } = request.nextUrl
      if (protectedPaths.some((p) => p.test(pathname))) return !!auth
      return true
    },
  },
  secret: process.env.AUTH_SECRET,
  providers: [],
} satisfies NextAuthConfig
