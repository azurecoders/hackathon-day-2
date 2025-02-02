import React from 'react'

const Filter = () => {
    return (

        <div className="w-full lg:w-64 space-y-6">
            {/* Experience Level */}
            <div className="border border-neutral-200/20 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">
                    Experience Level
                </h3>
                <div className="space-y-2">
                    {["Entry Level", "Mid Level", "Senior Level"].map(
                        (level, index) => (
                            <label key={index} className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox text-blue-600"
                                />
                                <span className="ml-2 text-gray-700">{level}</span>
                            </label>
                        )
                    )}
                </div>
            </div>

            {/* Job Type */}
            <div className="border border-neutral-200/20 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Job Type</h3>
                <div className="space-y-2">
                    {["Full-time", "Part-time", "Contract", "Remote"].map(
                        (type, index) => (
                            <label key={index} className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox text-blue-600"
                                />
                                <span className="ml-2 text-gray-700">{type}</span>
                            </label>
                        )
                    )}
                </div>
            </div>

            {/* Salary Range */}
            <div className="border border-neutral-200/20 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Salary Range</h3>
                <div className="space-y-2">
                    {["$0-$50k", "$50k-$100k", "$100k-$150k", "$150k+"].map(
                        (range, index) => (
                            <label key={index} className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox text-blue-600"
                                />
                                <span className="ml-2 text-gray-700">{range}</span>
                            </label>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default Filter
