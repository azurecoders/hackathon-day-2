import React from 'react'
import { BsFillPeopleFill } from 'react-icons/bs';
import { TbFileDescription } from 'react-icons/tb';
import { VscOpenPreview } from 'react-icons/vsc';
import ApplicationItem from './ApplicationItem';

const Applications = () => {
    return (
        <section id="applications" className="p-6 pt-16 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">My Applications</h1>
                    <p className="text-gray-600">Track your job applications and their status</p>
                </div>

                {/* Applications Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="border border-neutral-200/20 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-900">Total Applications</h3>
                            <span className="material-icons text-blue-600"><TbFileDescription /></span>
                        </div>
                        <p className="text-3xl font-bold text-blue-600">24</p>
                    </div>
                    <div className="border border-neutral-200/20 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-900">Under Review</h3>
                            <span className="material-icons text-yellow-600"><VscOpenPreview /></span>
                        </div>
                        <p className="text-3xl font-bold text-yellow-600">8</p>
                    </div>
                    <div className="border border-neutral-200/20 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-900">Interviews</h3>
                            <span className="material-icons text-green-600"><BsFillPeopleFill /></span>
                        </div>
                        <p className="text-3xl font-bold text-green-600">3</p>
                    </div>
                </div>

                {/* Applications List */}
                <div className="border border-neutral-200/20 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 border-b border-neutral-200/20 p-4">
                        <h2 className="text-xl font-semibold text-gray-900">Application History</h2>
                    </div>
                    <ApplicationItem />
                </div>
            </div>
        </section>
    );
};

export default Applications;
