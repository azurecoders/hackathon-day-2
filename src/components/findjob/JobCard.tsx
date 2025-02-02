import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { IoBookmark } from 'react-icons/io5'
import { MdAttachMoney, MdWork } from 'react-icons/md'

const JobCard = () => {
    return (
        <div className="border border-neutral-200/20 rounded-lg p-6 hover:border-blue-500/30 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                        Senior Frontend Developer
                    </h3>
                    <p className="text-gray-600">TechCorp Inc.</p>
                </div>
                <button className="text-gray-400 hover:text-blue-500">
                    <span className="material-icons"><IoBookmark /></span>
                </button>
            </div>
            <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                    <span className="material-icons text-sm mr-2">
                        <FaLocationDot />
                    </span>
                    New York, NY
                </div>
                <div className="flex items-center text-gray-600">
                    <span className="material-icons text-sm mr-2"><MdWork /></span>
                    Full-time
                </div>
                <div className="flex items-center text-gray-600">
                    <span className="material-icons text-sm mr-2">
                        <MdAttachMoney />
                    </span>
                    $120k - $150k
                </div>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Posted 2 days ago</span>
                <a
                    href="#jobDetails"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                >
                    View Details
                </a>
            </div>
        </div>
    )
}

export default JobCard
