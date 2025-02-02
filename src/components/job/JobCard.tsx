import { Bookmark } from 'lucide-react'
import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { MdAttachMoney, MdWork } from 'react-icons/md'

const JobCard = () => {
    return (
        <div className="border border-neutral-200/20 rounded-lg p-6 hover:border-blue-500/30 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Senior Frontend Developer</h3>
                    <p className="text-gray-600">TechCorp Inc.</p>
                </div>
                <button className="text-gray-400 hover:text-blue-500">
                    <Bookmark className="text-lg" />
                </button>
            </div>
            <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                    <FaLocationDot className="text-sm mr-2" />
                    New York, NY
                </div>
                <div className="flex items-center text-gray-600">
                    <MdWork className="text-sm mr-2" />
                    Full-time
                </div>
                <div className="flex items-center text-gray-600">
                    <MdAttachMoney className="text-sm mr-2" />
                    $120k - $150k
                </div>
            </div>
            <a
                href="#jobDetails"
                className="block w-full text-center py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
                View Job
            </a>
        </div>
    )
}

export default JobCard
