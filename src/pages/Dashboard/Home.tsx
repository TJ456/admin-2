import PageMeta from "../../components/common/PageMeta";

export default function Home() {
  return (
    <>
      <PageMeta
        title="LMS Dashboard | College Learning Management System"
        description="Dashboard for College Learning Management System"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {/* Welcome Header */}
        <div className="col-span-12">
          <div className="rounded-lg border border-stroke bg-gradient-to-r from-primary/5 to-secondary/5 shadow-default dark:border-strokedark dark:from-primary/10 dark:to-secondary/10">
            <div className="p-8 text-center">
              <h1 className="mb-3 text-3xl font-bold text-black dark:text-white">
                Welcome Back! 👋
              </h1>
              <p className="text-lg text-body dark:text-bodydark">
                Ready to continue your learning journey? Let's make today productive!
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats Cards */}
        <div className="col-span-12">
          <div className="grid grid-cols-4 gap-4 md:gap-6">
            {/* Batches Card */}
            <div className="group rounded-lg border border-stroke bg-white p-6 shadow-default transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-strokedark dark:bg-boxdark">
              <div className="flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="text-right">
                  <h3 className="text-3xl font-bold text-black dark:text-white">5</h3>
                  <p className="text-sm font-medium text-body dark:text-bodydark">Batches</p>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="flex items-center text-sm text-meta-3">
                  <svg className="mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Active batches
                </span>
              </div>
            </div>

            {/* Total Teachers Card */}
            <div className="group rounded-lg border border-stroke bg-white p-6 shadow-default transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-strokedark dark:bg-boxdark">
              <div className="flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div className="text-right">
                  <h3 className="text-3xl font-bold text-black dark:text-white">125</h3>
                  <p className="text-sm font-medium text-body dark:text-bodydark">Total Teacher</p>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="flex items-center text-sm text-meta-1">
                  <svg className="mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Faculty members
                </span>
              </div>
            </div>

            {/* Total Students Card */}
            <div className="group rounded-lg border border-stroke bg-white p-6 shadow-default transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-strokedark dark:bg-boxdark">
              <div className="flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="text-right">
                  <h3 className="text-3xl font-bold text-black dark:text-white">330</h3>
                  <p className="text-sm font-medium text-body dark:text-bodydark">Total Student</p>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="flex items-center text-sm text-meta-3">
                  <svg className="mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Enrolled students
                </span>
              </div>
            </div>

            {/* Total Programmes Card */}
            <div className="group rounded-lg border border-stroke bg-white p-6 shadow-default transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-strokedark dark:bg-boxdark">
              <div className="flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="text-right">
                  <h3 className="text-3xl font-bold text-black dark:text-white">15</h3>
                  <p className="text-sm font-medium text-body dark:text-bodydark">Total Programme</p>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="flex items-center text-sm text-meta-3">
                  <svg className="mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Programmes ongoing
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions & Recent Activities */}
        <div className="col-span-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Quick Actions */}
          <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6 py-4 dark:border-strokedark">
              <h3 className="text-xl font-semibold text-black dark:text-white">
                Quick Actions
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <button className="flex flex-col items-center rounded-lg border border-stroke p-4 transition-all duration-200 hover:bg-gray-50 hover:shadow-md dark:border-strokedark dark:hover:bg-gray-800">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-black dark:text-white">View Courses</span>
                </button>

                <button className="flex flex-col items-center rounded-lg border border-stroke p-4 transition-all duration-200 hover:bg-gray-50 hover:shadow-md dark:border-strokedark dark:hover:bg-gray-800">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900">
                    <svg className="h-6 w-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-black dark:text-white">Assignments</span>
                </button>

                <button className="flex flex-col items-center rounded-lg border border-stroke p-4 transition-all duration-200 hover:bg-gray-50 hover:shadow-md dark:border-strokedark dark:hover:bg-gray-800">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                    <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-black dark:text-white">Grades</span>
                </button>

                <button className="flex flex-col items-center rounded-lg border border-stroke p-4 transition-all duration-200 hover:bg-gray-50 hover:shadow-md dark:border-strokedark dark:hover:bg-gray-800">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                    <svg className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-black dark:text-white">Schedule</span>
                </button>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6 py-4 dark:border-strokedark">
              <h3 className="text-xl font-semibold text-black dark:text-white">
                Recent Activities
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-black dark:text-white">
                      New assignment posted in Computer Science 101
                    </p>
                    <p className="text-xs text-body dark:text-bodydark">2 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                    <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-black dark:text-white">
                      Grade received for Mathematics Midterm
                    </p>
                    <p className="text-xs text-body dark:text-bodydark">1 day ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                    <div className="h-2 w-2 rounded-full bg-purple-600 dark:bg-purple-400"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-black dark:text-white">
                      Enrolled in Physics Laboratory
                    </p>
                    <p className="text-xs text-body dark:text-bodydark">3 days ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900">
                    <div className="h-2 w-2 rounded-full bg-orange-600 dark:bg-orange-400"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-black dark:text-white">
                      Upcoming exam: Data Structures
                    </p>
                    <p className="text-xs text-body dark:text-bodydark">5 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="col-span-12">
          <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6 py-4 dark:border-strokedark">
              <h3 className="text-xl font-semibold text-black dark:text-white">
                Course Progress Overview
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Course Progress Items */}
                <div className="rounded-lg border border-stroke p-4 dark:border-strokedark">
                  <div className="mb-3 flex items-center justify-between">
                    <h4 className="font-semibold text-black dark:text-white">Computer Science 101</h4>
                    <span className="text-sm font-medium text-meta-3">85%</span>
                  </div>
                  <div className="mb-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600" style={{width: '85%'}}></div>
                  </div>
                  <p className="text-xs text-body dark:text-bodydark">12/14 assignments completed</p>
                </div>

                <div className="rounded-lg border border-stroke p-4 dark:border-strokedark">
                  <div className="mb-3 flex items-center justify-between">
                    <h4 className="font-semibold text-black dark:text-white">Mathematics 201</h4>
                    <span className="text-sm font-medium text-meta-3">92%</span>
                  </div>
                  <div className="mb-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="h-2 rounded-full bg-gradient-to-r from-green-500 to-green-600" style={{width: '92%'}}></div>
                  </div>
                  <p className="text-xs text-body dark:text-bodydark">11/12 assignments completed</p>
                </div>

                <div className="rounded-lg border border-stroke p-4 dark:border-strokedark">
                  <div className="mb-3 flex items-center justify-between">
                    <h4 className="font-semibold text-black dark:text-white">Physics Laboratory</h4>
                    <span className="text-sm font-medium text-meta-3">67%</span>
                  </div>
                  <div className="mb-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="h-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600" style={{width: '67%'}}></div>
                  </div>
                  <p className="text-xs text-body dark:text-bodydark">8/12 experiments completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
