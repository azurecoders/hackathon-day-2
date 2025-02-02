import React from 'react'
import JobCard from "./JobCard";
import Filter from './Filter';

const Jobs = () => {
    return (
        <section id="jobs" className="p-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Dream Job</h1>
                    <p className="text-lg text-gray-600 mb-6">Browse through thousands of job opportunities</p>

                    {/* Category Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors">
                            Full Time
                        </button>
                        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
                            Part Time
                        </button>
                        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
                            Remote
                        </button>
                        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
                            Contract
                        </button>
                    </div>
                    <Filter />
                    
                </div>

                {/* Job Listings */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                </div>

                {/* Load More Button */}
                <div className="text-center mt-8">
                    <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                        Load More Jobs
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Jobs
