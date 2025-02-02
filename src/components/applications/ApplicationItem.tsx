import React from 'react'
import { BsCalendar2Date } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { MdWork } from 'react-icons/md';

const ApplicationItem = () => {
    const applicationData = [
        {
            position: "Senior Frontend Developer",
            company: "TechCorp Inc.",
            status: "Under Review",
            statusClass: "bg-yellow-100 text-yellow-800",
            date: "Jan 15, 2024",
            location: "New York, NY",
            type: "Full-time",
            actions: [
                { label: "View Details", className: "text-blue-600 hover:text-blue-700 text-sm font-medium" },
                { label: "Withdraw", className: "text-red-600 hover:text-red-700 text-sm font-medium" }
            ]
        },
        {
            position: "UX Designer",
            company: "Design Studio",
            status: "Interview Scheduled",
            statusClass: "bg-green-100 text-green-800",
            date: "Jan 12, 2024",
            location: "Remote",
            type: "Contract",
            actions: [
                { label: "View Details", className: "text-blue-600 hover:text-blue-700 text-sm font-medium" },
                { label: "Withdraw", className: "text-red-600 hover:text-red-700 text-sm font-medium" }
            ]
        },
        {
            position: "Backend Engineer",
            company: "StartupCo",
            status: "Not Selected",
            statusClass: "bg-gray-100 text-gray-800",
            date: "Jan 10, 2024",
            location: "San Francisco, CA",
            type: "Full-time",
            actions: [
                { label: "View Feedback", className: "text-blue-600 hover:text-blue-700 text-sm font-medium" },
                { label: "Similar Jobs", className: "text-blue-600 hover:text-blue-700 text-sm font-medium" }
            ]
        }
    ];

    return (
        <div className="divide-y divide-neutral-200/20">
            {applicationData.map((app, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">{app.position}</h3>
                            <p className="text-gray-600">{app.company}</p>
                        </div>
                        <span className={`px-4 py-2 rounded-full text-sm font-medium ${app.statusClass}`}>{app.status}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                            <span className="material-icons text-sm mr-2"><BsCalendar2Date /></span>
                            Applied on {app.date}
                        </div>
                        <div className="flex items-center">
                            <span className="material-icons text-sm mr-2"><FaLocationDot /></span>
                            {app.location}
                        </div>
                        <div className="flex items-center">
                            <span className="material-icons text-sm mr-2"><MdWork /></span>
                            {app.type}
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        {app.actions.map((action, idx) => (
                            <button key={idx} className={action.className}>{action.label}</button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ApplicationItem
