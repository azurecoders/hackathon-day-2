import Image from "next/image";
import { Upload, CheckCircle } from "lucide-react";
import { CgProfile } from "react-icons/cg";

export default function ProfileSettings() {
  return (
    <section id="profile" className="p-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile Settings</h1>
          <p className="text-gray-600">Manage your personal information and preferences</p>
        </div>

        <div className="space-y-8">
          <div className="border border-neutral-200/20 rounded-lg p-6">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                {/* <Image
                  src="/default-avatar.png"
                  alt="Profile Picture"
                  width={96}
                  height={96}
                /> */}
                <CgProfile className="size-full text-text/30" />
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

          <div className="border border-neutral-200/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="input-field" defaultValue="John" />
                <input type="text" placeholder="Last Name" className="input-field" defaultValue="Doe" />
              </div>
              <input type="email" placeholder="Email" className="input-field" defaultValue="john@example.com" />
              <input type="tel" placeholder="Phone" className="input-field" defaultValue="+1 (555) 123-4567" />
              <input type="text" placeholder="Location" className="input-field" defaultValue="New York, NY" />
            </form>
          </div>

          <div className="border border-neutral-200/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resume</h3>
            <div className="border-2 border-dashed border-neutral-200/20 rounded-lg p-6 text-center">
              <Upload className="text-gray-400 mx-auto mb-2" size={40} />
              <p className="text-sm text-gray-600 mb-1">Drag and drop your resume here or</p>
              <button className="text-blue-600 hover:text-blue-700">browse files</button>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}