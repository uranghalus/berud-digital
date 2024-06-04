'use client'

import SubmitButton from '@/components/common/SubmitButton'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RegisterSchema } from '@/lib/schema/auth-schema'
import { registerServices } from '@/lib/services/auth-service'
import { RegisterForm } from '@/types/form-type'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      full_name: '',
      email: '',
      password: '',
      confirm_password: '',
    },
  })
  const formSubmit = async (form: z.infer<typeof RegisterSchema>) => {
    try {
      const response = await registerServices(form)
      if (response.error) {
        toast.error('Oops!', {
          description: response.message,
        })
      } else {
        toast.success('Yeay!', {
          description: 'Registrasi Berhasil',
        })
      }
    } catch (error) {
      console.error('Register Action Error:', error)
    }
  }
  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <div className="grid gap-y-4">
        <div className="space-y-2">
          <Label htmlFor="full_name">Full Name</Label>
          <Input
            id="full_name"
            type="text"
            placeholder="John Doe"
            {...register('full_name')}
            error={errors.full_name}
          />
        </div>
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
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="password"
            {...register('password')}
            error={errors.password}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm_password">Confirm Password</Label>
          <Input
            id="confirm_password"
            type="password"
            placeholder="password"
            {...register('confirm_password')}
            error={errors.confirm_password}
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
              I accept the{' '}
              <a
                className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                href="#"
              >
                Terms and Conditions
              </a>
            </label>
          </div>
        </div>
        <div className="">
          <SubmitButton
            text={'Sign Up'}
            loadingText={'Mohon Tunggu...'}
            loading={isSubmitting}
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          ></SubmitButton>
        </div>
      </div>
    </form>
  )
}

export default SignupForm
