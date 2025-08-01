import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageMeta from "../../components/common/PageMeta";

interface Teacher {
  id: number;
  name: string;
  email: string;
  mobile: string;
  department: string;
  subjects: Subject[];
  designation: string;
  qualification: string;
  joinDate: string;
}

interface Subject {
  id: string;
  name: string;
  code: string;
  semester: number;
  credits: number;
}

interface Department {
  id: string;
  name: string;
  fullName: string;
  teachers: Teacher[];
}

export default function TeacherPage() {
  const { deptId } = useParams<{ deptId: string }>();
  const [departments] = useState<Department[]>([
    // This is mock data - replace with actual API
  ]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Replace this with actual API call
    const fetchTeachers = async () => {
      try {
        setLoading(true);
        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // In real implementation, you would fetch data from your backend:
        // const response = await fetch(\`/api/departments/\${deptId}/teachers\`);
        // const data = await response.json();
        // setDepartments(data);
        
        setLoading(false);
      } catch {
        setError('Failed to fetch teachers data');
        setLoading(false);
      }
    };

    fetchTeachers();
  }, [deptId]);

  const getCurrentDepartment = () => {
    return departments.find(dept => dept.id === deptId);
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

  const currentDept = getCurrentDepartment();

  if (!currentDept) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600">
        Department not found
      </div>
    );
  }

  return (
    <>
      <PageMeta
        title={`${currentDept.name} Department Teachers | InfuniLMS`}
        description={`Teachers in ${currentDept.fullName} Department`}
      />
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            {currentDept.name} Department Teachers
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {currentDept.fullName}
          </p>
        </div>

        {/* Teachers Table */}
        <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="px-4 py-6 md:px-6 xl:px-7.5">
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-2 dark:bg-meta-4 text-left">
                    <th className="py-4 px-4 font-medium text-black dark:text-white">
                      Name
                    </th>
                    <th className="py-4 px-4 font-medium text-black dark:text-white">
                      Designation
                    </th>
                    <th className="py-4 px-4 font-medium text-black dark:text-white">
                      Subjects
                    </th>
                    <th className="py-4 px-4 font-medium text-black dark:text-white">
                      Contact
                    </th>
                    <th className="py-4 px-4 font-medium text-black dark:text-white">
                      Joined
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentDept.teachers.map((teacher) => (
                    <tr key={teacher.id}>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <div className="flex flex-col gap-1">
                          <h5 className="font-medium text-black dark:text-white">
                            {teacher.name}
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {teacher.qualification}
                          </p>
                        </div>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <span className="text-black dark:text-white">
                          {teacher.designation}
                        </span>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <div className="flex flex-wrap gap-2">
                          {teacher.subjects.map(subject => (
                            <span
                              key={subject.id}
                              className="inline-block px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
                            >
                              {subject.name} ({subject.code})
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <div className="flex flex-col gap-1">
                          <span className="text-black dark:text-white">
                            {teacher.email}
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {teacher.mobile}
                          </span>
                        </div>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <span className="text-black dark:text-white">
                          {new Date(teacher.joinDate).toLocaleDateString()}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {currentDept.teachers.length === 0 && (
                    <tr>
                      <td
                        colSpan={5}
                        className="border-b border-[#eee] py-5 px-4 dark:border-strokedark text-center text-gray-600 dark:text-gray-400"
                      >
                        No teachers found in this department
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
