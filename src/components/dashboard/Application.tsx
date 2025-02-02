import React from 'react'

const Application = () => {
    return (
        <div className="flex items-center justify-between p-4 border border-neutral-200/20 rounded-lg">
            <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <img src="/default-user.svg" alt="logo" />
                </div>
                <div>
                    <div className="font-medium text-gray-900">John Smith</div>
                    <div className="text-sm text-gray-600">
                        Applied for Senior Frontend Developer
                    </div>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <button className="px-3 py-1 text-sm border border-neutral-200/20 rounded-lg">
                    View
                </button>
                <div className="text-sm text-gray-500">2 hours ago</div>
            </div>
        </div>
    )
}

export default Application
