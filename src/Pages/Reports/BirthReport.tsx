import React from "react";
import { CalendarDays, Users, TrendingUp, Baby } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Screen } from "../../app-components/layout/screen";

function BirthReport() {
  // Sample data for birth reports
  const birthData = [
    {
      id: 1,
      babyName: "Baby Pendo",
      gender: "Female",
      birthDate: "2024-09-15",
      deliveryType: "Natural",
      location: "Central District",
      reportedBy: "Dr. Johnson",
      motherAge: 28,
    },
    {
      id: 2,
      babyName: "Baby James",
      gender: "Male",
      birthDate: "2024-09-12",
      deliveryType: "C-Section",
      location: "North District",
      reportedBy: "Dr. Adams",
      motherAge: 32,
    },
    {
      id: 3,
      babyName: "Baby Sarah",
      gender: "Female",
      birthDate: "2024-09-10",
      deliveryType: "Natural",
      location: "South District",
      reportedBy: "Dr. Lee",
      motherAge: 25,
    },
    {
      id: 4,
      babyName: "Baby Michael",
      gender: "Male",
      birthDate: "2024-09-08",
      deliveryType: "C-Section",
      location: "East District",
      reportedBy: "Dr. Martinez",
      motherAge: 30,
    },
    {
      id: 5,
      babyName: "Baby Grace",
      gender: "Female",
      birthDate: "2024-09-05",
      deliveryType: "Natural",
      location: "West District",
      reportedBy: "Dr. Thompson",
      motherAge: 27,
    },
  ];

  // Calculate statistics
  const totalBirths = birthData.length;
  const averageMotherAge = Math.round(
    birthData.reduce((sum, birth) => sum + birth.motherAge, 0) / totalBirths
  );
  const thisMonth = birthData.filter(
    (birth) => new Date(birth.birthDate).getMonth() === 8
  ).length; // September
  const lastMonth = 4; // Mock data for August

  // Group births by gender
  const birthsByGender = birthData.reduce<Record<string, number>>(
    (acc, birth) => {
      acc[birth.gender] = (acc[birth.gender] ?? 0) + 1;
      return acc;
    },
    {}
  );

  // Group births by district
  const birthsByDistrict = birthData.reduce<Record<string, number>>(
    (acc, birth) => {
      acc[birth.location] = (acc[birth.location] ?? 0) + 1;
      return acc;
    },
    {}
  );

  // Group births by delivery type
  const birthsByDeliveryType = birthData.reduce<Record<string, number>>(
    (acc, birth) => {
      acc[birth.deliveryType] = (acc[birth.deliveryType] ?? 0) + 1;
      return acc;
    },
    {}
  );

  // Define colors for delivery types
  const getDeliveryTypeColor = (deliveryType: string) => {
    const colors: Record<string, string> = {
      Natural: "bg-indigo-300",
      "C-Section": "bg-indigo-400",
    };
    return colors[deliveryType] ?? "bg-indigo-200";
  };

  return (
    <Screen
      headerContent={
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Community Birth Report
        </h1>
      }
    >
      <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-800">
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400">
            Monthly birth statistics and detailed records for Nyagatugu Highlands
            Community
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Total Births
              </CardTitle>
              <Users className="h-4 w-4 text-indigo-500 dark:text-indigo-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-indigo-500 dark:text-indigo-300">
                {totalBirths}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                This month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Average Mother’s Age
              </CardTitle>
              <CalendarDays className="h-4 w-4 text-indigo-500 dark:text-indigo-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-indigo-500 dark:text-indigo-300">
                {averageMotherAge}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Years</p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Monthly Change
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-indigo-500 dark:text-indigo-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-indigo-500 dark:text-indigo-300">
                {thisMonth - lastMonth > 0 ? "+" : ""}
                {thisMonth - lastMonth}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                vs last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Most Common Gender
              </CardTitle>
              <Baby className="h-4 w-4 text-indigo-500 dark:text-indigo-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-indigo-500 dark:text-indigo-300">
                Female
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Most common
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Birth Records Table */}
        <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-100">
              Recent Birth Records
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" aria-label="Birth Records Table">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100"
                      scope="col"
                    >
                      Baby Name
                    </th>
                    <th
                      className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100"
                      scope="col"
                    >
                      Gender
                    </th>
                    <th
                      className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100"
                      scope="col"
                    >
                      Birth Date
                    </th>
                    <th
                      className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100"
                      scope="col"
                    >
                      Delivery Type
                    </th>
                    <th
                      className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100"
                      scope="col"
                    >
                      Location
                    </th>
                    <th
                      className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100"
                      scope="col"
                    >
                      Reported By
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {birthData.map((birth) => (
                    <tr
                      key={birth.id}
                      className="border-b border-gray-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-gray-700"
                    >
                      <td className="p-3 font-medium text-gray-900 dark:text-gray-100">
                        {birth.babyName}
                      </td>
                      <td className="p-3 text-gray-600 dark:text-gray-400">
                        {birth.gender}
                      </td>
                      <td className="p-3 text-gray-600 dark:text-gray-400">
                        {new Date(birth.birthDate).toLocaleDateString()}
                      </td>
                      <td className="p-3">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white ${getDeliveryTypeColor(
                            birth.deliveryType
                          )}`}
                        >
                          {birth.deliveryType}
                        </span>
                      </td>
                      <td className="p-3 text-gray-600 dark:text-gray-400">
                        {birth.location}
                      </td>
                      <td className="p-3 text-sm text-gray-600 dark:text-gray-400">
                        {birth.reportedBy}
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
          {/* Births by Gender */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-gray-100">
                Births by Gender
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
                  {Object.entries(birthsByGender)
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
                          {Math.round((count / totalBirths) * 100)}%
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Births by District */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-gray-100">
                Births by District
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
                  {Object.entries(birthsByDistrict)
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
                          {Math.round((count / totalBirths) * 100)}%
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Births by Delivery Type */}
        <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-100">
              Births by Delivery Type
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-b border-gray-200 dark:border-gray-700">
                  <TableHead className="text-gray-900 dark:text-gray-100">
                    Delivery Type
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
                {Object.entries(birthsByDeliveryType)
                  .sort((a, b) => b[1] - a[1])
                  .map(([deliveryType, count]) => (
                    <TableRow
                      key={deliveryType}
                      className="border-b border-gray-200 dark:border-gray-700"
                    >
                      <TableCell className="font-medium text-gray-900 dark:text-gray-100">
                        {deliveryType}
                      </TableCell>
                      <TableCell className="text-gray-600 dark:text-gray-400">
                        {count}
                      </TableCell>
                      <TableCell className="text-gray-600 dark:text-gray-400">
                        {Math.round((count / totalBirths) * 100)}%
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Mother Age Distribution */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-gray-100">
                Mother Age Distribution
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
                  <TableRow className="border-b border-gray-200 dark:border-gray-700">
                    <TableCell className="font-medium text-gray-900 dark:text-gray-100">
                      18-25
                    </TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-400">1</TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-400">20%</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-200 dark:border-gray-700">
                    <TableCell className="font-medium text-gray-900 dark:text-gray-100">
                      26-35
                    </TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-400">4</TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-400">80%</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-200 dark:border-gray-700">
                    <TableCell className="font-medium text-gray-900 dark:text-gray-100">
                      36-45
                    </TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-400">0</TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-400">0%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </Screen>
    );
  }

export default BirthReport;