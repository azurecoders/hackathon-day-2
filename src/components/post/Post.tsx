import { CircleArrowUp, CloudUpload } from 'lucide-react'
import React from 'react'
import PostFrom from './PostFrom'

const Post = () => {
    return (
        <section id="postJob" className="p-6 bg-white">
            <div className="max-w-3xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Post a New Job</h1>
                    <p className="text-gray-600">Fill in the details below to post your job listing</p>
                </div>
                <PostFrom />
            </div>
        </section>
    )
}

export default Post
