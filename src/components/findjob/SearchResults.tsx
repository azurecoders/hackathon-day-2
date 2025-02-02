import React from 'react'
import JobCard from './JobCard'

const SearchResults = () => {
    return (
        <div className="flex-1">
            <div className="mb-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-600">Showing 127 results</p>
                <select className="p-2 border border-neutral-200/20 rounded-lg">
                    <option>Most Relevant</option>
                    <option>Newest First</option>
                    <option>Highest Salary</option>
                </select>
            </div>

            <div className="grid grid-cols-1 gap-4">
                <JobCard />
            </div>

            <div className="mt-8 text-center">
                <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    Load More Results
                </button>
            </div>
        </div>
    )
}

export default SearchResults
