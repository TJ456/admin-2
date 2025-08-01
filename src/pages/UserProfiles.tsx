import { useState } from "react";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import UserMetaCard from "../components/UserProfile/UserMetaCard";
import UserAddressCard from "../components/UserProfile/UserAddressCard";
import AboutSection from "../components/UserProfile/AboutSection";
import PageMeta from "../components/common/PageMeta";

export default function UserProfiles() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About", icon: "👤" },
    { id: "profile", label: "Profile", icon: "📝" },
    { id: "links", label: "Links", icon: "🔗" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutSection />;
      case "profile":
        return (
          <div className="space-y-6">
            <UserMetaCard />
            <UserAddressCard />
          </div>
        );
      case "links":
        return (
          <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
            <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
              Useful Links
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <a
                href="https://bcetdgp.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-900/30 dark:hover:to-blue-800/30 transition-all duration-300 border border-blue-200 dark:border-blue-800"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white/90 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Official Website</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">BCET College Portal</p>
                </div>
              </a>
              
              <a
                href="https://www.wbut.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl hover:from-green-100 hover:to-green-200 dark:hover:from-green-900/30 dark:hover:to-green-800/30 transition-all duration-300 border border-green-200 dark:border-green-800"
              >
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white/90 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">University Portal</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">MAKAUT Official</p>
                </div>
              </a>
              
              <a
                href="#"
                className="group flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl hover:from-purple-100 hover:to-purple-200 dark:hover:from-purple-900/30 dark:hover:to-purple-800/30 transition-all duration-300 border border-purple-200 dark:border-purple-800"
              >
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white/90 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Library Portal</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Digital Library</p>
                </div>
              </a>
              
              <a
                href="#"
                className="group flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl hover:from-orange-100 hover:to-orange-200 dark:hover:from-orange-900/30 dark:hover:to-orange-800/30 transition-all duration-300 border border-orange-200 dark:border-orange-800"
              >
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white/90 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">Exam Portal</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Results & Schedules</p>
                </div>
              </a>
              
              <a
                href="#"
                className="group flex items-center gap-4 p-4 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl hover:from-red-100 hover:to-red-200 dark:hover:from-red-900/30 dark:hover:to-red-800/30 transition-all duration-300 border border-red-200 dark:border-red-800"
              >
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white/90 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Placement Cell</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Career Services</p>
                </div>
              </a>
              
              <a
                href="#"
                className="group flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-xl hover:from-indigo-100 hover:to-indigo-200 dark:hover:from-indigo-900/30 dark:hover:to-indigo-800/30 transition-all duration-300 border border-indigo-200 dark:border-indigo-800"
              >
                <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white/90 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Achievements</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Awards & Recognition</p>
                </div>
              </a>
            </div>
          </div>
        );
      default:
        return <AboutSection />;
    }
  };

  return (
    <>
      <PageMeta
        title="User Profile | Department Admin Dashboard"
        description="User profile and account management for department administrators"
      />
      <PageBreadcrumb pageTitle="User Profile" />
      
      {/* Header with College Logo */}
      <div className="mb-6 flex items-center gap-4 p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
        <div className="w-16 h-16 overflow-hidden border border-gray-200 rounded-full dark:border-gray-800">
          <img src="/images/user/bg1.jpg" alt="BCET Logo" className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white/90">
            BENGAL COLLEGE OF ENGINEERING & TECHNOLOGY
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Approved by AICTE   |   New Delhi and Affiliated to MAKAUT   |     Kolkata

            |      ISO 9001 2008 Certified Institute
          </p>
        </div>
      </div>
      
      {/* Tab Navigation */}
      <div className="mb-6">
        <div className="border-b border-gray-200 dark:border-gray-800">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? "border-brand-500 text-brand-600 dark:text-brand-400"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </>
  );
}
