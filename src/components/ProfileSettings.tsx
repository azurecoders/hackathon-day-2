import React from 'react'

const ProfileSettings = () => {
  return (
    <section id="profile" className="p-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile Settings</h1>
          <p className="text-gray-600">Manage your personal information and preferences</p>
        </div>

        <div className="space-y-8">
          {/* Profile Header */}
          <div className="border border-neutral-200/20 rounded-lg p-6">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                <img src="/default-user.svg" alt="logo" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900">John Doe</h2>
                <p className="text-gray-600">Frontend Developer</p>
                <button className="mt-2 px-4 py-2 text-sm border border-neutral-200/20 rounded-lg hover:bg-gray-50">
                  Change Photo
                </button>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="border border-neutral-200/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" className="w-full p-3 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500" defaultValue="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full p-3 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500" defaultValue="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full p-3 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500" defaultValue="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" className="w-full p-3 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500" defaultValue="+1 (555) 123-4567" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input type="text" className="w-full p-3 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500" defaultValue="New York, NY" />
              </div>
            </form>
          </div>

          {/* Professional Information */}
          <div className="border border-neutral-200/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Information</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input type="text" className="w-full p-3 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500" defaultValue="Frontend Developer" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                <select className="w-full p-3 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500" defaultValue="5-7 years">
                  <option>1-3 years</option>
                  <option>3-5 years</option>
                  <option>5-7 years</option>
                  <option>7+ years</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Resume</label>
                <input type="text" className="w-full p-3 border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500" defaultValue="https://www.drive.resume.com/JohnDoe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Skills</label>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">TypeScript</span>
                  <button className="px-3 py-1 border border-neutral-200/20 rounded-full text-sm hover:bg-gray-50">
                    + Add Skill
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Notification Settings */}
          <div className="border border-neutral-200/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Settings</h3>
            <div className="space-y-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-600" defaultChecked />
                <span className="ml-2 text-gray-700">Email notifications for new job matches</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-600" defaultChecked />
                <span className="ml-2 text-gray-700">Application status updates</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-600" />
                <span className="ml-2 text-gray-700">Newsletter and job tips</span>
              </label>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileSettings
