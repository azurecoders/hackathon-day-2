"use client";
import React from "react";
import SearchResults from "./SearchResults";
import SearchBar from "./SearchBar";
import JobDetails from "./JobDetails";

const Find = () => {
  return (
    <section
      id="search"
      className={`p-6 pt-16 bg-white transition-opacity duration-1000 ease-in-out`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Find Your Next Job
          </h1>
          <p className="text-gray-600">
            Search through thousands of job opportunities
          </p>
        </div>
        <SearchBar />

        {/* Popular Searches */}
        <div className="mb-8">
          <h2 className="text-sm font-medium text-gray-600 mb-2">
            Popular Searches:
          </h2>
          <div className="flex flex-wrap gap-2">
            {["Frontend Developer", "Full Stack", "Remote", "UI/UX Design"].map(
              (search, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                >
                  {search}
                </button>
              )
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* <Filter /> */}
          <SearchResults />
        </div>
      </div>
      <JobDetails />
    </section>
  )
}
export default Find
