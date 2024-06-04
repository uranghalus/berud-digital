'use client'
import { LoginSchema } from '@/lib/schema/auth-schema'

import { zodResolver } from '@hookform/resolvers/zod'
import { signIn, useSession } from 'next-auth/react'
import { redirect, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import Link from 'next/link'
import { toast } from 'sonner'
import { LoginForm } from '@/types/form-type'
import { loginServices } from '@/lib/services/auth-service'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import SubmitButton from '@/components/common/SubmitButton'

function SigninForm() {
  const { data: session } = useSession()
  const params = useSearchParams()
  const router = useRouter()
  let callbackUrl = params.get('callbackUrl') || '/'

  useEffect(() => {
    if (session && session.user) {
      if (session?.user?.isAdmin) {
        router.push('/admin')
      } else {
        router.push(callbackUrl)
      }
    }
  }, [callbackUrl, params, router, session])

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const formSubmit = async (form: z.infer<typeof LoginSchema>) => {
    const response = await loginServices(form)
    if (response?.error) {
      return toast.error('Login Gagal!', {
        description: response.message,
      })
    } else {
      toast.success('Yeay!', {
        description: 'Login Berhasil',
      })
      setTimeout(() => {
        if (session?.user.isAdmin === true) {
          router.push('/admin')
        } else {
          router.push(callbackUrl)
        }
      }, 2000)
    }
  }
  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <div className="grid gap-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            {...register('email')}
            error={errors.email}
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              href={'forgot-password'}
              className="text-sm text-blue-600 decoration-2 hover:underline font-medium"
            >
              Forgot password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="password"
            {...register('password')}
            error={errors.password}
          />
        </div>
        <div className="flex items-center">
          <div className="flex">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            />
          </div>
          <div className="ms-3">
            <label htmlFor="remember-me" className="text-sm dark:text-white">
              Remember me
            </label>
          </div>
        </div>
        <div className="">
          <SubmitButton
            text={'Sign In'}
            loadingText={'Mohon Tunggu...'}
            loading={isSubmitting}
            className="w-full justify-center"
          ></SubmitButton>
        </div>
      </div>
    </form>
  )
}

export default SigninForm
