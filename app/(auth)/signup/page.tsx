import { GoogleIcon } from '@/components/icons/GoogleIcon'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'
import SignupForm from './SignupForm'

function SignUp() {
  return (
    <div className="w-full max-w-md">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="block text-2xl font-bold text-gray-800 dark:text-white">
            Sign Up
          </CardTitle>
          <CardDescription className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
            Already have an account?
            <Link
              className="text-primary-600 hover:font-bold ml-2 font-medium dark:text-blue-500"
              href={'/signin'}
            >
              Sign in here
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
            <GoogleIcon />
            Sign in with Google
          </Button>
          <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
            Or
          </div>
          {/* Form */}
          <SignupForm />
        </CardContent>
      </Card>
    </div>
  )
}

export default SignUp
