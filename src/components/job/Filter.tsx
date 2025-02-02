import React from 'react'

const Filter = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <select className="p-2 border border-neutral-200/20 rounded-lg">
                <option>Location</option>
                <option>New York</option>
                <option>London</option>
                <option>Remote</option>
            </select>
            <select className="p-2 border border-neutral-200/20 rounded-lg">
                <option>Category</option>
                <option>Technology</option>
                <option>Design</option>
                <option>Marketing</option>
            </select>
            <select className="p-2 border border-neutral-200/20 rounded-lg">
                <option>Experience Level</option>
                <option>Entry Level</option>
                <option>Mid Level</option>
                <option>Senior Level</option>
            </select>
            <select className="p-2 border border-neutral-200/20 rounded-lg">
                <option>Salary Range</option>
                <option>$0-$50k</option>
                <option>$50k-$100k</option>
                <option>$100k+</option>
            </select>
        </div>
    )
}

export default Filter
