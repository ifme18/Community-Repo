import React from "react";
import { GraduationCap, Users, TrendingUp, BookOpen, AlertTriangle } from "lucide-react";

import { Screen } from "../../app-components/layout/screen";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";

function StudentsReport() {
  // Sample data for student reports
  const studentData = [
    {
      id: 1,
      studentName: "John Kiprotich",
      age: 20,
      gender: "Male",
      educationLevel: "Tertiary",
      institution: "University of Nairobi",
      course: "Computer Science",
      location: "Central District",
      guardianName: "Peter Kiprotich",
      enrollmentStatus: "Active",
      year: 3
    },
    {
      id: 2,
      studentName: "Mary Wanjiku",
      age: 17,
      gender: "Female",
      educationLevel: "Secondary",
      institution: "Nyagatugu High School",
      course: "Sciences",
      location: "North District",
      guardianName: "Grace Wanjiku",
      enrollmentStatus: "Active",
      year: 4
    },
    {
      id: 3,
      studentName: "Peter Otieno",
      age: 13,
      gender: "Male",
      educationLevel: "Primary",
      institution: "Highland Primary School",
      course: "General Studies",
      location: "South District",
      guardianName: "Jane Otieno",
      enrollmentStatus: "Active",
      year: 7
    },
    {
      id: 4,
      studentName: "Sarah Chebet",
      age: 19,
      gender: "Female",
      educationLevel: "Technical Vocational",
      institution: "Highlands Technical College",
      course: "Tailoring & Design",
      location: "East District",
      guardianName: "Samuel Chebet",
      enrollmentStatus: "Active",
      year: 2
    },
    {
      id: 5,
      studentName: "David Mwangi",
      age: 16,
      gender: "Male",
      educationLevel: "Dropout",
      institution: "Former: Central High",
      course: "N/A",
      location: "West District",
      guardianName: "Margaret Mwangi",
      enrollmentStatus: "Inactive",
      year: 0
    },
    {
      id: 6,
      studentName: "Faith Akinyi",
      age: 15,
      gender: "Female",
      educationLevel: "Secondary",
      institution: "Community Secondary",
      course: "Arts",
      location: "Central District",
      guardianName: "Elizabeth Akinyi",
      enrollmentStatus: "Active",
      year: 2
    },
    {
      id: 7,
      studentName: "James Mutua",
      age: 11,
      gender: "Male",
      educationLevel: "Primary",
      institution: "Valley Primary School",
      course: "General Studies",
      location: "North District",
      guardianName: "Rose Mutua",
      enrollmentStatus: "Active",
      year: 5
    },
    {
      id: 8,
      studentName: "Grace Nyong'o",
      age: 22,
      gender: "Female",
      educationLevel: "Tertiary",
      institution: "Kenyatta University",
      course: "Education",
      location: "South District",
      guardianName: "Joseph Nyong'o",
      enrollmentStatus: "Active",
      year: 4
    }
  ];

  // Calculate statistics
  const totalStudents = studentData.length;
  const activeStudents = studentData.filter(student => student.enrollmentStatus === "Active").length;
  const dropouts = studentData.filter(student => student.educationLevel === "Dropout").length;
  const averageAge = Math.round(
    studentData.reduce((sum, student) => sum + student.age, 0) / totalStudents
  );

  // Group students by education level
  const studentsByLevel = studentData.reduce<Record<string, number>>((acc, student) => {
    acc[student.educationLevel] = (acc[student.educationLevel] || 0) + 1;
    return acc;
  }, {});

  // Group students by gender
  const studentsByGender = studentData.reduce<Record<string, number>>((acc, student) => {
    acc[student.gender] = (acc[student.gender] || 0) + 1;
    return acc;
  }, {});

  // Group students by district
  const studentsByDistrict = studentData.reduce<Record<string, number>>((acc, student) => {
    acc[student.location] = (acc[student.location] || 0) + 1;
    return acc;
  }, {});

  // Age distribution
  const ageGroups = {
    "5-10": studentData.filter(s => s.age >= 5 && s.age <= 10).length,
    "11-15": studentData.filter(s => s.age >= 11 && s.age <= 15).length,
    "16-20": studentData.filter(s => s.age >= 16 && s.age <= 20).length,
    "21-25": studentData.filter(s => s.age >= 21 && s.age <= 25).length,
  };

  // Define colors for education levels
  const getEducationLevelColor = (level: string): string => {
    const colors: Record<string, string> = {
      "Primary": "bg-green-500",
      "Secondary": "bg-blue-500",
      "Tertiary": "bg-purple-500",
      "Technical Vocational": "bg-orange-500",
      "Dropout": "bg-red-500",
    };
    return colors[level] || "bg-gray-500";
  };

  return (
    <Screen>
    <div className="p-6 space-y-6  min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Community Student Report
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Comprehensive educational statistics and student records for Nyagatugu Highlands Community
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Total Students
            </CardTitle>
            <Users className="h-4 w-4 text-blue-500 dark:text-blue-300" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-500 dark:text-blue-300">
              {totalStudents}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Enrolled students
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Active Students
            </CardTitle>
            <BookOpen className="h-4 w-4 text-green-500 dark:text-green-300" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500 dark:text-green-300">
              {activeStudents}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Currently learning
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Dropouts
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500 dark:text-red-300" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500 dark:text-red-300">
              {dropouts}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Need intervention
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Average Age
            </CardTitle>
            <GraduationCap className="h-4 w-4 text-purple-500 dark:text-purple-300" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-500 dark:text-purple-300">
              {averageAge}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Years old
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Student Records Table */}
      <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">
            Student Records
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" aria-label="Student Records Table">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100" scope="col">
                    Student Name
                  </th>
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100" scope="col">
                    Age
                  </th>
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100" scope="col">
                    Gender
                  </th>
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100" scope="col">
                    Education Level
                  </th>
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100" scope="col">
                    Institution
                  </th>
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100" scope="col">
                    Course/Subject
                  </th>
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100" scope="col">
                    Location
                  </th>
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100" scope="col">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {studentData.map((student) => (
                  <tr
                    key={student.id}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700"
                  >
                    <td className="p-3 font-medium text-gray-900 dark:text-gray-100">
                      {student.studentName}
                    </td>
                    <td className="p-3 text-gray-600 dark:text-gray-400">
                      {student.age}
                    </td>
                    <td className="p-3 text-gray-600 dark:text-gray-400">
                      {student.gender}
                    </td>
                    <td className="p-3">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white ${getEducationLevelColor(
                          student.educationLevel
                        )}`}
                      >
                        {student.educationLevel}
                      </span>
                    </td>
                    <td className="p-3 text-gray-600 dark:text-gray-400">
                      {student.institution}
                    </td>
                    <td className="p-3 text-gray-600 dark:text-gray-400">
                      {student.course}
                    </td>
                    <td className="p-3 text-gray-600 dark:text-gray-400">
                      {student.location}
                    </td>
                    <td className="p-3">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          student.enrollmentStatus === "Active"
                            ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                            : "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100"
                        }`}
                      >
                        {student.enrollmentStatus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Statistics Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Students by Education Level */}
        <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-100">
              Students by Education Level
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-b border-gray-200 dark:border-gray-700">
                  <TableHead className="text-gray-900 dark:text-gray-100">
                    Level
                  </TableHead>
                  <TableHead className="text-gray-900 dark:text-gray-100">
                    Count
                  </TableHead>
                  <TableHead className="text-gray-900 dark:text-gray-100">
                    Percentage
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(studentsByLevel)
                  .sort((a, b) => b[1] - a[1])
                  .map(([level, count]) => (
                    <TableRow
                      key={level}
                      className="border-b border-gray-200 dark:border-gray-700"
                    >
                      <TableCell className="font-medium text-gray-900 dark:text-gray-100">
                        {level}
                      </TableCell>
                      <TableCell className="text-gray-600 dark:text-gray-400">
                        {count}
                      </TableCell>
                      <TableCell className="text-gray-600 dark:text-gray-400">
                        {Math.round((count / totalStudents) * 100)}%
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Students by Gender */}
        <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-100">
              Students by Gender
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-b border-gray-200 dark:border-gray-700">
                  <TableHead className="text-gray-900 dark:text-gray-100">
                    Gender
                  </TableHead>
                  <TableHead className="text-gray-900 dark:text-gray-100">
                    Count
                  </TableHead>
                  <TableHead className="text-gray-900 dark:text-gray-100">
                    Percentage
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(studentsByGender)
                  .sort((a, b) => b[1] - a[1])
                  .map(([gender, count]) => (
                    <TableRow
                      key={gender}
                      className="border-b border-gray-200 dark:border-gray-700"
                    >
                      <TableCell className="font-medium text-gray-900 dark:text-gray-100">
                        {gender}
                      </TableCell>
                      <TableCell className="text-gray-600 dark:text-gray-400">
                        {count}
                      </TableCell>
                      <TableCell className="text-gray-600 dark:text-gray-400">
                        {Math.round((count / totalStudents) * 100)}%
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Students by District */}
        <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-100">
              Students by District
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-b border-gray-200 dark:border-gray-700">
                  <TableHead className="text-gray-900 dark:text-gray-100">
                    District
                  </TableHead>
                  <TableHead className="text-gray-900 dark:text-gray-100">
                    Count
                  </TableHead>
                  <TableHead className="text-gray-900 dark:text-gray-100">
                    Percentage
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(studentsByDistrict)
                  .sort((a, b) => b[1] - a[1])
                  .map(([district, count]) => (
                    <TableRow
                      key={district}
                      className="border-b border-gray-200 dark:border-gray-700"
                    >
                      <TableCell className="font-medium text-gray-900 dark:text-gray-100">
                        {district}
                      </TableCell>
                      <TableCell className="text-gray-600 dark:text-gray-400">
                        {count}
                      </TableCell>
                      <TableCell className="text-gray-600 dark:text-gray-400">
                        {Math.round((count / totalStudents) * 100)}%
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Age Distribution */}
        <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-100">
              Age Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-b border-gray-200 dark:border-gray-700">
                  <TableHead className="text-gray-900 dark:text-gray-100">
                    Age Group
                  </TableHead>
                  <TableHead className="text-gray-900 dark:text-gray-100">
                    Count
                  </TableHead>
                  <TableHead className="text-gray-900 dark:text-gray-100">
                    Percentage
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(ageGroups).map(([ageGroup, count]) => (
                  <TableRow
                    key={ageGroup}
                    className="border-b border-gray-200 dark:border-gray-700"
                  >
                    <TableCell className="font-medium text-gray-900 dark:text-gray-100">
                      {ageGroup}
                    </TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-400">
                      {count}
                    </TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-400">
                      {Math.round((count / totalStudents) * 100)}%
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
    </Screen>
  );
}

export default StudentsReport;