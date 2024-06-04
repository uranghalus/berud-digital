import { RegisterForm } from '@/types/form-type'
import { ZodType, z } from 'zod'

export const RegisterSchema: ZodType<RegisterForm> = z
  .object({
    full_name: z.string().min(1, { message: 'Name cannot empty' }),
    password: z.string().min(6).max(100, {
      message: 'Password must be between 6 and 100 characters',
    }),
    email: z.string().email({
      message: 'Please enter a valid email address',
    }),
    confirm_password: z.string().min(6).max(100, {
      message: 'Confirm password must be between 6 and 100 characters',
    }),
  })
  .superRefine(({ confirm_password, password }, ctx) => {
    if (confirm_password !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Passwords do not match',
        path: ['confirm_password'],
      })
    }
  })
export const LoginSchema = z.object({
  password: z
    .string()
    .min(6, {
      message: 'Password must have at least 6 or more characters',
    })
    .max(100, {
      message: 'Password must be between 6 and 100 characters',
    }),
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
})
