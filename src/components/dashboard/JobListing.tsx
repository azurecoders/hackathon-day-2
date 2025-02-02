import { Pencil, Trash } from 'lucide-react'
import React from 'react'

const JobListing = () => {
    return (
        <tr>
            <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900">
                    Senior Frontend Developer
                </div>
                <div className="text-sm text-gray-500">Full-time</div>
            </td>
            <td className="px-6 py-4">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                    Active
                </span>
            </td>
            <td className="px-6 py-4 text-sm text-gray-600">
                12 applications
            </td>
            <td className="px-6 py-4 text-sm text-gray-600">
                Jan 15, 2024
            </td>
            <td className="px-6 py-4 text-sm">
                <div className="flex space-x-2">
                    <button className="text-blue-600">
                        <span className="material-icons text-sm"><Pencil /></span>
                    </button>
                    <button className="text-red-600">
                        <span className="material-icons text-sm"><Trash /></span>
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default JobListing
