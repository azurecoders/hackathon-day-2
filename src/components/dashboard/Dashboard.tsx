import React from "react";
import Application from "./Application";
import JobListing from "./JobListing";
import { Bookmark, Eye, Plus } from "lucide-react";
import { BsPeopleFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";

const Dashboard = () => {
  return (
    <section id="Dashboard" className="p-6 pt-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Employer Dashboard
          </h1>
          <p className="text-gray-600">
            Manage your job listings and view applications
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Active Jobs */}
          <div className="border border-neutral-200/20 rounded-lg p-6 bg-blue-50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Active Jobs</h3>
              <span className="material-icons text-blue-600"><MdWork /></span>
            </div>
            <p className="text-3xl font-bold text-blue-600">12</p>
            <p className="text-sm text-gray-600 mt-2">+2 from last month</p>
          </div>

          {/* Total Applications */}
          <div className="border border-neutral-200/20 rounded-lg p-6 bg-green-50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Total Applications
              </h3>
              <span className="material-icons text-green-600"><BsPeopleFill /></span>
            </div>
            <p className="text-3xl font-bold text-green-600">48</p>
            <p className="text-sm text-gray-600 mt-2">+15 new this week</p>
          </div>

          {/* Views */}
          <div className="border border-neutral-200/20 rounded-lg p-6 bg-purple-50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Views</h3>
              <span className="material-icons text-purple-600"><Eye /></span>
            </div>
            <p className="text-3xl font-bold text-purple-600">1,254</p>
            <p className="text-sm text-gray-600 mt-2">+324 this month</p>
          </div>

          {/* Saved */}
          <div className="border border-neutral-200/20 rounded-lg p-6 bg-orange-50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Saved</h3>
              <span className="material-icons text-orange-600"><Bookmark /></span>
            </div>
            <p className="text-3xl font-bold text-orange-600">85</p>
            <p className="text-sm text-gray-600 mt-2">+12 this week</p>
          </div>
        </div>

        {/* Job Listings Table */}
        <div className="border border-neutral-200/20 rounded-lg overflow-hidden mb-8">
          <div className="p-4 bg-gray-50 border-b border-neutral-200/20 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">
              Your Job Listings
            </h2>
            <a
              href="#postJob"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center"
            >
              <span className="material-icons text-sm mr-2"><Plus /></span>
              Post New Job
            </a>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Job Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applications
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Posted Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200/20">
                {/* Job Listings */}
                <JobListing />
                <JobListing />
                <JobListing />
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Applications */}
        <div className="border border-neutral-200/20 rounded-lg overflow-hidden">
          <div className="p-4 bg-gray-50 border-b border-neutral-200/20">
            <h2 className="text-xl font-semibold text-gray-900">
              Recent Applications
            </h2>
          </div>
          <div className="p-4 space-y-4">
            {/* Applications */}
            <Application />
            <Application />
            <Application />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;