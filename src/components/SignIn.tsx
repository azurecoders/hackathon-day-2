import Link from 'next/link'
import React from 'react'

const SignIn = () => {
    return (
        <section id="auth" className="min-h-screen bg-white p-6">
            <div className="max-w-md mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
                    <p className="text-gray-600 mt-2">Sign in to access your account</p>
                </div>

                {/* Sign-in Form */}
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input type="email" className="w-full p-3 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your email" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input type="password" className="w-full p-3 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your password" />
                    </div>

                    <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Sign In
                    </button>
                </form>

                {/* Registration Link */}
                <p className="mt-8 text-center text-sm text-gray-600">
                    Already have an account?
                    <Link href="/auth/sign-up" className="text-blue-600 ml-1 hover:text-blue-700 font-medium">Sign In</Link>
                </p>
            </div>
        </section>
    )
}

export default SignIn
