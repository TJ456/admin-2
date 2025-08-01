import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageMeta from "../components/common/PageMeta";

interface Semester {
  id: number;
  semNumber: number;
  semYear: string;
  route: string;
}

interface Batch {
  id: number;
  name: string;
  students: number;
  year: string;
  semester: string;
  description?: string;
  semesters: Semester[];
}

interface Course {
  id: number;
  name: string;
  batches: Batch[];
}

interface Teacher {
  id: number;
  name: string;
  designation: string;
  experience: string;
  specialization: string;
}

interface DepartmentInfo {
  email: string;
  password: string;
  hod: Teacher | null;
  description: string;
}

interface Department {
  id: string;
  name: string;
  fullName: string;
  departmentInfo: DepartmentInfo;
  courses: Course[];
  availableTeachers: Teacher[];
}

export default function Academics() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Department-specific states
  const [expandedCourses, setExpandedCourses] = useState<number[]>([]);
  const [isAddBatchModalOpen, setIsAddBatchModalOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const [newBatchName, setNewBatchName] = useState("");
  const [newBatchYear, setNewBatchYear] = useState("");
  const [newBatchSemester, setNewBatchSemester] = useState("");
  const [activeBatchTabs, setActiveBatchTabs] = useState<{[key: number]: number}>({});
  
  // HOD Management states
  const [isAssignHODModalOpen, setIsAssignHODModalOpen] = useState(false);
  
  // Edit Department states
  const [isEditDepartmentModalOpen, setIsEditDepartmentModalOpen] = useState(false);
  const [editDeptEmail, setEditDeptEmail] = useState("");
  const [editDeptPassword, setEditDeptPassword] = useState("");
  const [editDeptDescription, setEditDeptDescription] = useState("");
  
  // Edit Batch states
  const [isEditBatchModalOpen, setIsEditBatchModalOpen] = useState(false);
  const [selectedEditBatch, setSelectedEditBatch] = useState<Batch | null>(null);
  const [editBatchName, setEditBatchName] = useState("");
  const [editBatchYear, setEditBatchYear] = useState("");
  const [editBatchSemester, setEditBatchSemester] = useState("");
  const [editBatchStudents, setEditBatchStudents] = useState("");

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      setLoading(true);
      // TODO: Replace with actual API call
      // const response = await fetch('/api/academics/departments');
      // const data = await response.json();
      // setDepartments(data);
      
      // For now, set empty array until API is ready
      setDepartments([]);
      setLoading(false);
    } catch {
      setError('Failed to fetch departments data');
      setLoading(false);
    }
  };

  const selectDepartment = (department: Department) => {
    setSelectedDepartment(department);
    // Reset department-specific states
    setExpandedCourses([]);
    setActiveBatchTabs({});
  };

  const goBackToDepartments = () => {
    setSelectedDepartment(null);
    setExpandedCourses([]);
    setActiveBatchTabs({});
  };

  // Department management functions
  const toggleCourse = (courseId: number) => {
    setExpandedCourses(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  const openAddBatchModal = (courseId: number) => {
    setSelectedCourseId(courseId);
    setIsAddBatchModalOpen(true);
  };

  const closeAddBatchModal = () => {
    setIsAddBatchModalOpen(false);
    setSelectedCourseId(null);
    setNewBatchName("");
    setNewBatchYear("");
    setNewBatchSemester("");
  };

  const addBatch = () => {
    if (selectedCourseId && newBatchName.trim() && selectedDepartment) {
      const updatedDepartment = {
        ...selectedDepartment,
        courses: selectedDepartment.courses.map(course => {
          if (course.id === selectedCourseId) {
            const newBatch: Batch = {
              id: Date.now(),
              name: newBatchName.trim(),
              students: 0,
              year: newBatchYear.trim() || "TBD",
              semester: newBatchSemester.trim() || "TBD",
              semesters: []
            };
            return {
              ...course,
              batches: [...course.batches, newBatch]
            };
          }
          return course;
        })
      };
      
      setSelectedDepartment(updatedDepartment);
      setDepartments(prev => prev.map(dept => 
        dept.id === selectedDepartment.id ? updatedDepartment : dept
      ));
      closeAddBatchModal();
    }
  };

  const openAssignHODModal = () => {
    setIsAssignHODModalOpen(true);
  };

  const closeAssignHODModal = () => {
    setIsAssignHODModalOpen(false);
  };

  const assignHOD = (teacher: Teacher) => {
    if (selectedDepartment) {
      const updatedDepartment = {
        ...selectedDepartment,
        departmentInfo: {
          ...selectedDepartment.departmentInfo,
          hod: teacher
        }
      };
      
      setSelectedDepartment(updatedDepartment);
      setDepartments(prev => prev.map(dept => 
        dept.id === selectedDepartment.id ? updatedDepartment : dept
      ));
    }
    closeAssignHODModal();
  };

  // Edit Department functions
  const openEditDepartmentModal = () => {
    if (selectedDepartment) {
      setEditDeptEmail(selectedDepartment.departmentInfo.email);
      setEditDeptPassword(selectedDepartment.departmentInfo.password);
      setEditDeptDescription(selectedDepartment.departmentInfo.description);
      setIsEditDepartmentModalOpen(true);
    }
  };

  const closeEditDepartmentModal = () => {
    setIsEditDepartmentModalOpen(false);
    setEditDeptEmail("");
    setEditDeptPassword("");
    setEditDeptDescription("");
  };

  const saveDepartmentEdit = () => {
    if (editDeptEmail.trim() && editDeptPassword.trim() && editDeptDescription.trim() && selectedDepartment) {
      const updatedDepartment = {
        ...selectedDepartment,
        departmentInfo: {
          ...selectedDepartment.departmentInfo,
          email: editDeptEmail.trim(),
          password: editDeptPassword.trim(),
          description: editDeptDescription.trim()
        }
      };
      
      setSelectedDepartment(updatedDepartment);
      setDepartments(prev => prev.map(dept => 
        dept.id === selectedDepartment.id ? updatedDepartment : dept
      ));
      closeEditDepartmentModal();
    }
  };

  // Edit Batch functions
  const openEditBatchModal = (batch: Batch) => {
    setSelectedEditBatch(batch);
    setEditBatchName(batch.name);
    setEditBatchYear(batch.year);
    setEditBatchSemester(batch.semester);
    setEditBatchStudents(batch.students.toString());
    setIsEditBatchModalOpen(true);
  };

  const closeEditBatchModal = () => {
    setIsEditBatchModalOpen(false);
    setSelectedEditBatch(null);
    setEditBatchName("");
    setEditBatchYear("");
    setEditBatchSemester("");
    setEditBatchStudents("");
  };

  const saveBatchEdit = () => {
    if (selectedEditBatch && editBatchName.trim() && selectedDepartment) {
      const updatedDepartment = {
        ...selectedDepartment,
        courses: selectedDepartment.courses.map(course => ({
          ...course,
          batches: course.batches.map(batch => {
            if (batch.id === selectedEditBatch.id) {
              return {
                ...batch,
                name: editBatchName.trim(),
                year: editBatchYear.trim() || batch.year,
                semester: editBatchSemester.trim() || batch.semester,
                students: parseInt(editBatchStudents) || batch.students
              };
            }
            return batch;
          })
        }))
      };
      
      setSelectedDepartment(updatedDepartment);
      setDepartments(prev => prev.map(dept => 
        dept.id === selectedDepartment.id ? updatedDepartment : dept
      ));
      closeEditBatchModal();
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600">
        {error}
      </div>
    );
  }

  // If no department is selected, show department list
  if (!selectedDepartment) {
    return (
      <>
        <PageMeta
          title="Academics | InfuniLMS"
          description="Academic Departments Management"
        />
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
              Academic Departments
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Manage academic departments, courses, and programmes
            </p>
          </div>

          {/* Departments Grid */}
          <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="px-6 py-4 border-b border-stroke dark:border-strokedark">
              <h3 className="text-xl font-semibold text-black dark:text-white">
                Departments
              </h3>
            </div>
            <div className="p-6">
              {departments.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {departments.map((department) => (
                    <div
                      key={department.id}
                      onClick={() => selectDepartment(department)}
                      className="cursor-pointer rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 bg-white dark:bg-boxdark"
                    >
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {department.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {department.fullName}
                      </p>
                      <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                        <span>{department.courses.length} Programmes</span>
                        <span>
                          {department.courses.reduce((total, course) => total + course.batches.length, 0)} Batches
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No departments found</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Departments will appear here once the API is configured.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }

  // If department is selected, show department details (same as your IT department pattern)
  return (
    <>
      <PageMeta
        title={`${selectedDepartment.name} Department | InfuniLMS`}
        description={`${selectedDepartment.fullName} Department - Institute Administration`}
      />
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={goBackToDepartments}
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
              {selectedDepartment.fullName} ({selectedDepartment.name})
            </h1>
          </div>
          <button 
            onClick={openEditDepartmentModal}
            className="inline-flex items-center justify-center rounded-md bg-green-600 py-2 px-4 text-center font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 lg:px-6 xl:px-8 shadow-lg"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Edit Department
          </button>
        </div>

        {/* Department Information Section */}
        <div className="mb-6 bg-white dark:bg-boxdark rounded-lg border border-stroke dark:border-strokedark shadow-default">
          <div className="px-6 py-4 border-b border-stroke dark:border-strokedark">
            <h3 className="text-xl font-semibold text-black dark:text-white">
              Department Information
            </h3>
          </div>
          <div className="p-6">
            {/* Department Description */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-black dark:text-white mb-3">About the Department</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {selectedDepartment.departmentInfo.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Department Credentials */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Department Credentials</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Department Email</label>
                    <p className="text-black dark:text-white font-mono bg-white dark:bg-gray-700 px-3 py-2 rounded border">
                      {selectedDepartment.departmentInfo.email}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Department Password</label>
                    <p className="text-black dark:text-white font-mono bg-white dark:bg-gray-700 px-3 py-2 rounded border">
                      {selectedDepartment.departmentInfo.password}
                    </p>
                  </div>
                </div>
              </div>

              {/* HOD Information */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Head of Department</h4>
                {selectedDepartment.departmentInfo.hod ? (
                  <div className="space-y-2">
                    <p className="text-black dark:text-white font-semibold">{selectedDepartment.departmentInfo.hod.name}</p>
                    <p className="text-gray-600 dark:text-gray-400">{selectedDepartment.departmentInfo.hod.designation}</p>
                    <p className="text-gray-600 dark:text-gray-400">Experience: {selectedDepartment.departmentInfo.hod.experience}</p>
                    <p className="text-gray-600 dark:text-gray-400">Specialization: {selectedDepartment.departmentInfo.hod.specialization}</p>
                    <button
                      onClick={openAssignHODModal}
                      className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      Change HOD
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-gray-500 dark:text-gray-400 mb-3">No HOD assigned</p>
                    <button
                      onClick={openAssignHODModal}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Assign HOD
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Courses and Batches */}
        <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="px-6 py-4 border-b border-stroke dark:border-strokedark">
            <h3 className="text-xl font-semibold text-black dark:text-white">
              Programmes
            </h3>
          </div>
          
          <div className="p-6">
            {selectedDepartment.courses.length > 0 ? (
              selectedDepartment.courses.map((course) => (
                <div key={course.id} className="mb-4 last:mb-0">
                  {/* Course Header */}
                  <div 
                    onClick={() => toggleCourse(course.id)}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`transform transition-transform ${expandedCourses.includes(course.id) ? 'rotate-90' : 'rotate-0'}`}>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M6 6l8 4-8 4V6z"/>
                        </svg>
                      </span>
                      <h4 className="text-lg font-semibold text-black dark:text-white">
                        {course.name}
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        ({course.batches.length} batches)
                      </span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openAddBatchModal(course.id);
                      }}
                      className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 shadow-md font-medium"
                    >
                      Add Batch
                    </button>
                  </div>

                  {/* Batches */}
                  {expandedCourses.includes(course.id) && (
                    <div className="mt-2 ml-6">
                      {course.batches.length > 0 ? (
                        <>
                          {/* Batch Tabs */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {course.batches.map((batch) => (
                              <button
                                key={batch.id}
                                onClick={() => setActiveBatchTabs(prev => ({...prev, [course.id]: batch.id}))}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm ${
                                  (activeBatchTabs[course.id] || course.batches[0]?.id) === batch.id
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600'
                                }`}
                              >
                                {batch.name}
                              </button>
                            ))}
                          </div>

                          {/* Active Batch Content */}
                          {(() => {
                            const activeBatch = course.batches.find(b => 
                              b.id === (activeBatchTabs[course.id] || course.batches[0]?.id)
                            );
                            
                            if (!activeBatch) return null;

                            return (
                              <div className="bg-white dark:bg-boxdark border border-stroke dark:border-strokedark rounded-lg p-4">
                                {/* Batch Info */}
                                <div className="mb-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <h5 className="text-lg font-semibold text-black dark:text-white">
                                      {activeBatch.name}
                                    </h5>
                                    <div className="flex items-center gap-2">
                                      <span className="text-sm text-gray-500 dark:text-gray-400">
                                        {activeBatch.students} students
                                      </span>
                                      <button
                                        onClick={() => openEditBatchModal(activeBatch)}
                                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-yellow-600 text-white hover:bg-yellow-700 transition-colors"
                                      >
                                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                        Edit
                                      </button>
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                    <div>
                                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Academic Year:</span>
                                      <p className="text-black dark:text-white">{activeBatch.year}</p>
                                    </div>
                                    <div>
                                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Current Semester:</span>
                                      <p className="text-black dark:text-white">{activeBatch.semester}</p>
                                    </div>
                                  </div>
                                </div>

                                {/* Semester Table */}
                                <div className="border border-stroke dark:border-strokedark rounded-lg">
                                  <div className="px-4 py-3 border-b border-stroke dark:border-strokedark bg-gray-50 dark:bg-gray-800">
                                    <h6 className="text-sm font-semibold text-black dark:text-white">
                                      Semester Information
                                    </h6>
                                  </div>
                                  <div className="overflow-x-auto">
                                    <table className="w-full">
                                      <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Sem Number
                                          </th>
                                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Sem Year
                                          </th>
                                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Action
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody className="bg-white dark:bg-boxdark divide-y divide-gray-200 dark:divide-gray-700">
                                        {activeBatch.semesters.length > 0 ? (
                                          activeBatch.semesters.map((semester) => (
                                            <tr key={semester.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                              <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                                                Semester {semester.semNumber}
                                              </td>
                                              <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                                                {semester.semYear}
                                              </td>
                                              <td className="px-4 py-3 text-sm">
                                                <Link
                                                  to={semester.route}
                                                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                                                >
                                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                  </svg>
                                                </Link>
                                              </td>
                                            </tr>
                                          ))
                                        ) : (
                                          <tr>
                                            <td colSpan={3} className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                                              No semesters added yet
                                            </td>
                                          </tr>
                                        )}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            );
                          })()}
                        </>
                      ) : (
                        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                          No batches added yet for this course
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                No courses found for this department
              </div>
            )}
          </div>
        </div>

        {/* Add Batch Modal */}
        {isAddBatchModalOpen && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700 relative z-[100000]">
              <div className="sticky top-0 bg-white dark:bg-gray-800 px-6 py-4 border-b border-gray-200 dark:border-gray-700 rounded-t-xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Add New Batch
                  </h3>
                  <button
                    onClick={closeAddBatchModal}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                {selectedCourseId && (
                  <div className="mb-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <label className="block text-sm font-medium text-blue-800 dark:text-blue-200">
                      Selected Course
                    </label>
                    <p className="text-lg font-semibold text-blue-900 dark:text-blue-100">
                      {selectedDepartment.courses.find(c => c.id === selectedCourseId)?.name}
                    </p>
                  </div>
                )}

                <div className="mb-4">
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Batch Name *
                  </label>
                  <input
                    type="text"
                    value={newBatchName}
                    onChange={(e) => setNewBatchName(e.target.value)}
                    placeholder="Enter batch name (e.g., Batch 1)"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-gray-900 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Academic Year
                  </label>
                  <input
                    type="text"
                    value={newBatchYear}
                    onChange={(e) => setNewBatchYear(e.target.value)}
                    placeholder="Enter academic year (e.g., 2024-2028)"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-gray-900 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Current Semester
                  </label>
                  <select
                    value={newBatchSemester}
                    onChange={(e) => setNewBatchSemester(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-gray-900 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="">Select Semester</option>
                    <option value="1st Semester">1st Semester</option>
                    <option value="2nd Semester">2nd Semester</option>
                    <option value="3rd Semester">3rd Semester</option>
                    <option value="4th Semester">4th Semester</option>
                    <option value="5th Semester">5th Semester</option>
                    <option value="6th Semester">6th Semester</option>
                    <option value="7th Semester">7th Semester</option>
                    <option value="8th Semester">8th Semester</option>
                  </select>
                </div>

                <div className="mb-6">
                  <button
                    onClick={addBatch}
                    disabled={!newBatchName.trim()}
                    className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium shadow-lg transition-colors w-full"
                  >
                    Add Batch
                  </button>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={closeAddBatchModal}
                    className="flex-1 bg-gray-500 text-white py-3 px-4 rounded-lg hover:bg-gray-600 font-medium shadow-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Assign HOD Modal */}
        {isAssignHODModalOpen && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700 relative z-[100000]">
              <div className="sticky top-0 bg-white dark:bg-gray-800 px-6 py-4 border-b border-gray-200 dark:border-gray-700 rounded-t-xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Assign Head of Department
                  </h3>
                  <button
                    onClick={closeAssignHODModal}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Select a teacher from the available faculty to assign as Head of Department:
                </p>
                
                {selectedDepartment.availableTeachers.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedDepartment.availableTeachers.map((teacher) => (
                      <div key={teacher.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {teacher.name}
                            </h4>
                            <p className="text-blue-600 dark:text-blue-400 font-medium">
                              {teacher.designation}
                            </p>
                          </div>
                          <button
                            onClick={() => assignHOD(teacher)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                          >
                            Assign
                          </button>
                        </div>
                        <div className="space-y-1 text-sm">
                          <p className="text-gray-600 dark:text-gray-300">
                            <span className="font-medium">Experience:</span> {teacher.experience}
                          </p>
                          <p className="text-gray-600 dark:text-gray-300">
                            <span className="font-medium">Specialization:</span> {teacher.specialization}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500 dark:text-gray-400">No teachers available for assignment</p>
                  </div>
                )}
                
                <div className="flex justify-end mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={closeAssignHODModal}
                    className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Edit Department Modal */}
        {isEditDepartmentModalOpen && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 relative z-[100000]">
              <div className="bg-white dark:bg-gray-800 px-6 py-4 border-b border-gray-200 dark:border-gray-700 rounded-t-xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Edit Department Information
                  </h3>
                  <button
                    onClick={closeEditDepartmentModal}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Department Email *
                  </label>
                  <input
                    type="email"
                    value={editDeptEmail}
                    onChange={(e) => setEditDeptEmail(e.target.value)}
                    placeholder="department.email@infuni.edu"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-gray-900 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Department Password *
                  </label>
                  <input
                    type="text"
                    value={editDeptPassword}
                    onChange={(e) => setEditDeptPassword(e.target.value)}
                    placeholder="Enter department password"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-gray-900 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Department Description *
                  </label>
                  <textarea
                    value={editDeptDescription}
                    onChange={(e) => setEditDeptDescription(e.target.value)}
                    placeholder="Enter department description..."
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-gray-900 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={saveDepartmentEdit}
                    disabled={!editDeptEmail.trim() || !editDeptPassword.trim() || !editDeptDescription.trim()}
                    className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium shadow-lg transition-colors"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={closeEditDepartmentModal}
                    className="flex-1 bg-gray-500 text-white py-3 px-4 rounded-lg hover:bg-gray-600 font-medium shadow-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Edit Batch Modal */}
        {isEditBatchModalOpen && selectedEditBatch && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 relative z-[100000]">
              <div className="bg-white dark:bg-gray-800 px-6 py-4 border-b border-gray-200 dark:border-gray-700 rounded-t-xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Edit Batch Information
                  </h3>
                  <button
                    onClick={closeEditBatchModal}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                    Editing: {selectedEditBatch.name}
                  </p>
                </div>

                <div className="mb-4">
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Batch Name *
                  </label>
                  <input
                    type="text"
                    value={editBatchName}
                    onChange={(e) => setEditBatchName(e.target.value)}
                    placeholder="Enter batch name (e.g., Batch 1)"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-gray-900 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Academic Year
                  </label>
                  <input
                    type="text"
                    value={editBatchYear}
                    onChange={(e) => setEditBatchYear(e.target.value)}
                    placeholder="Enter academic year (e.g., 2024-2028)"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-gray-900 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Current Semester
                  </label>
                  <select
                    value={editBatchSemester}
                    onChange={(e) => setEditBatchSemester(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-gray-900 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="">Select Semester</option>
                    <option value="1st Semester">1st Semester</option>
                    <option value="2nd Semester">2nd Semester</option>
                    <option value="3rd Semester">3rd Semester</option>
                    <option value="4th Semester">4th Semester</option>
                    <option value="5th Semester">5th Semester</option>
                    <option value="6th Semester">6th Semester</option>
                    <option value="7th Semester">7th Semester</option>
                    <option value="8th Semester">8th Semester</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Number of Students
                  </label>
                  <input
                    type="number"
                    value={editBatchStudents}
                    onChange={(e) => setEditBatchStudents(e.target.value)}
                    placeholder="Enter number of students"
                    min="0"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-3 px-4 text-gray-900 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={saveBatchEdit}
                    disabled={!editBatchName.trim()}
                    className="flex-1 bg-yellow-600 text-white py-3 px-4 rounded-lg hover:bg-yellow-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium shadow-lg transition-colors"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={closeEditBatchModal}
                    className="flex-1 bg-gray-500 text-white py-3 px-4 rounded-lg hover:bg-gray-600 font-medium shadow-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
