import Link from 'next/link'
import React from 'react'

const SignUp = () => {
    return (
        <section id="sign-up" className="min-h-screen bg-white p-6">
            <div className="max-w-md m-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
                    <p className="text-gray-600 mt-2">Sign up to access your account</p>
                </div>

                {/* Toggle Buttons */}
                <div className="flex border border-neutral-200/20 rounded-lg p-1 mb-8">
                    <button className="flex-1 py-2 rounded-md text-sm font-medium bg-blue-600 text-white">Job Seeker</button>
                    <button className="flex-1 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50">Employer</button>
                </div>

                {/* Login Form */}
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                        <input type="password" className="w-full p-3 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your username" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input type="email" className="w-full p-3 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your email" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input type="password" className="w-full p-3 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your password" />
                    </div>

                    <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Sign Up
                    </button>
                </form>

                {/* Registration Link */}
                <p className="mt-8 text-center text-sm text-gray-600">
                    Don't have an account?
                    <Link href="/auth/sign-in" className="text-blue-600 ml-1 hover:text-blue-700 font-medium">Create Account</Link>
                </p>
            </div>
        </section>
    )
}

export default SignUp
