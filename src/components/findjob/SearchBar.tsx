import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { IoSearch } from 'react-icons/io5'

const SearchBar = () => {
    return (
        <div className="relative mb-8" >
            <div className="flex flex-col md:flex-row items-center max-w-3xl mx-auto gap-4">
                <div className="relative flex-1 w-full">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="material-icons text-gray-400"><IoSearch /></span>
                    </span>
                    <input
                        type="search"
                        className="w-full pl-10 pr-4 py-3 border border-neutral-200/20 rounded-lg md:rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Job title, company, or keywords"
                    />
                </div>
                <div className="relative w-full md:w-auto">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="material-icons text-gray-400"><FaLocationDot /></span>
                    </span>
                    <input
                        type="text"
                        className="w-full md:w-48 pl-10 pr-4 py-3 border border-neutral-200/20 rounded-lg  focus:outline-none focus:border-blue-500"
                        placeholder="Location"
                    />
                </div>
                <button className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg md:rounded-lg hover:bg-blue-700 transition-colors">
                    Search
                </button>
            </div>
        </div >
    )
}

export default SearchBar
