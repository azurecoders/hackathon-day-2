import { Bookmark, Send, Share, Building, MapPin, Briefcase, DollarSign, ArrowRight } from "lucide-react";

const JobDetails = () => {
  return (
    <section id="jobDetails" className="p-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Job Header */}
        <div className="mb-8 border-b border-neutral-200/20 pb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Senior Frontend Developer</h1>
              <div className="flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <Building size={16} /> TechCorp Inc.
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} /> New York, NY
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase size={16} /> Full-time
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign size={16} /> $120k - $150k
                </div>
              </div>
            </div>
            <button className="text-gray-400 hover:text-blue-500 transition-colors">
              <Bookmark size={20} />
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
              <Send size={16} className="mr-2" /> Apply Now
            </button>
            <button className="px-6 py-3 border border-neutral-200/20 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
              <Share size={16} className="mr-2" /> Share
            </button>
          </div>
        </div>

        {/* Job Description */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">About the Role</h2>
          <div className="prose text-gray-600 space-y-4">
            <p>We are seeking an experienced Frontend Developer to join our growing team. You will be responsible for building and maintaining web applications using modern JavaScript frameworks.</p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Requirements:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>5+ years of experience with JavaScript/TypeScript</li>
              <li>Strong proficiency in React.js and modern frontend tools</li>
              <li>Experience with responsive design and cross-browser compatibility</li>
              <li>Understanding of REST APIs and frontend security best practices</li>
              <li>Bachelor's degree in Computer Science or related field</li>
            </ul>
          </div>
        </div>

        {/* Company Info */}
        <div className="mb-8 p-6 border border-neutral-200/20 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">About TechCorp Inc.</h2>
          <p className="text-gray-600 mb-4">TechCorp is a leading software development company specializing in creating innovative solutions for enterprise clients.</p>
          <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center">
            Visit Company Website <ArrowRight size={16} className="ml-1" />
          </a>
        </div>

        {/* Similar Jobs */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Similar Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[{ title: "Frontend Developer", company: "StartupCo", location: "Remote" }, { title: "Senior UI Developer", company: "Tech Solutions Ltd", location: "Boston, MA" }].map((job, index) => (
              <div key={index} className="border border-neutral-200/20 rounded-lg p-4 hover:border-blue-500/30 transition-colors">
                <h3 className="font-semibold text-gray-900">{job.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{job.company}</p>
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <MapPin size={16} className="mr-1" /> {job.location}
                </div>
                <a href="#jobDetails" className="text-blue-600 hover:text-blue-700 text-sm">View Details</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;