import { CircleArrowUp } from 'lucide-react'
import React from 'react'

const PostFrom = () => {
    return (
        <form className="space-y-6">
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Title*</label>
                    <input
                        type="text"
                        className="w-full p-3 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="e.g., Senior Frontend Developer"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company*</label>
                    <input
                        type="text"
                        className="w-full p-3 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Your company name"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location*</label>
                    <input
                        type="text"
                        className="w-full p-3 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="e.g., New York, NY or Remote"
                        required
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Employment Type*</label>
                        <select
                            className="w-full p-3 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        >
                            <option value="">Select type</option>
                            <option>Full-time</option>
                            <option>Part-time</option>
                            <option>Contract</option>
                            <option>Remote</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category*</label>
                        <select
                            className="w-full p-3 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        >
                            <option value="">Select category</option>
                            <option>Development</option>
                            <option>Design</option>
                            <option>Marketing</option>
                            <option>Sales</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Salary Range (Min)*</label>
                        <input
                            type="number"
                            className="w-full p-3 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="e.g., 50000"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Salary Range (Max)*</label>
                        <input
                            type="number"
                            className="w-full p-3 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="e.g., 80000"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Application Deadline*</label>
                    <input
                        type="date"
                        className="w-full p-3 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Social</label>
                    <input
                        type="link"
                        className="w-full p-3 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder='e.g., Instagram Link'
                    />
                </div>
                
            </div>

            <div className="flex justify-end space-x-4">
                <button
                    type="button"
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                    Save Draft
                </button>
                <button
                    type="button"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Post <CircleArrowUp className="inline ml-2" />
                </button>
            </div>
        </form>
    )
}

export default PostFrom
