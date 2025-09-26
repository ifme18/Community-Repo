import React from 'react';


import { CalendarDays, Users, TrendingUp, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Screen } from '../../app-components/layout/screen';

function DeathReport() {
  // Sample data for the death reports
  const deathData = [
    {
      id: 1,
      name: "",
      age: 67,
      date: "2024-09-15",
      cause: "Heart Disease",
      location: "Central District",
      reportedBy: "Dr. Johnson"
    },
    {
      id: 2,
      name: "Mary Wilson",
      age: 82,
      date: "2024-09-12",
      cause: "Natural Causes",
      location: "North District",
      reportedBy: "Dr. Adams"
    },
    {
      id: 3,
      name: "Robert Brown",
      age: 45,
      date: "2024-09-10",
      cause: "Accident",
      location: "South District",
      reportedBy: "Dr. Lee"
    },
    {
      id: 4,
      name: "Susan Davis",
      age: 71,
      date: "2024-09-08",
      cause: "Cancer",
      location: "East District",
      reportedBy: "Dr. Martinez"
    },
    {
      id: 5,
      name: "Michael Johnson",
      age: 58,
      date: "2024-09-05",
      cause: "Stroke",
      location: "West District",
      reportedBy: "Dr. Thompson"
    }
  ];

  // Calculate statistics
  const totalDeaths = deathData.length;
  const averageAge = Math.round(deathData.reduce((sum, death) => sum + death.age, 0) / totalDeaths);
  const thisMonth = deathData.filter(death => new Date(death.date).getMonth() === 8).length; // September
  const lastMonth = 3; // Mock data for August

  // Group deaths by cause
  const deathsByCause = deathData.reduce<Record<string, number>>((acc, death) => {
    acc[death.cause] = (acc[death.cause] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Group deaths by district
  const deathsByDistrict = deathData.reduce<Record<string, number>>((acc, death) => {
    acc[death.location] = (acc[death.location] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const getCauseColor = (cause: string) => {
    const colors: Record<string, string> = {
      "Heart Disease": "bg-red-500",
      "Natural Causes": "bg-green-500",
      "Accident": "bg-yellow-500",
      "Cancer": "bg-purple-500",
      "Stroke": "bg-blue-500",
    };
    return colors[cause] ?? "bg-gray-500";
  };

  return (
    <Screen>
    <div className="p-6 space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Community Death Report</h1>
        <p className="text-gray-600">Monthly mortality statistics and detailed records</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Deaths</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalDeaths}</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Age</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageAge}</div>
            <p className="text-xs text-muted-foreground">Years old</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Change</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{thisMonth - lastMonth}</div>
            <p className="text-xs text-muted-foreground">vs last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Leading Cause</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Heart Disease</div>
            <p className="text-xs text-muted-foreground">Most common</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Death Records Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Death Records</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Name</th>
                  <th className="text-left p-3 font-semibold">Age</th>
                  <th className="text-left p-3 font-semibold">Date</th>
                  <th className="text-left p-3 font-semibold">Cause</th>
                  <th className="text-left p-3 font-semibold">Location</th>
                  <th className="text-left p-3 font-semibold">Reported By</th>
                </tr>
              </thead>
              <tbody>
                {deathData.map((death) => (
                  <tr key={death.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{death.name}</td>
                    <td className="p-3">{death.age}</td>
                    <td className="p-3">{new Date(death.date).toLocaleDateString()}</td>
                    <td className="p-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white ${getCauseColor(death.cause)}`}>
                        {death.cause}
                      </span>
                    </td>
                    <td className="p-3">{death.location}</td>
                    <td className="p-3 text-sm text-gray-600">{death.reportedBy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Statistics Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Deaths by Cause */}
        <Card>
          <CardHeader>
            <CardTitle>Deaths by Cause</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cause of Death</TableHead>
                  <TableHead>Count</TableHead>
                  <TableHead>Percentage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(deathsByCause)
                  .sort((a, b) => b[1] - a[1])
                  .map(([cause, count]) => (
                    <TableRow key={cause}>
                      <TableCell className="font-medium">{cause}</TableCell>
                      <TableCell>{count}</TableCell>
                      <TableCell>{Math.round((count / totalDeaths) * 100)}%</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Deaths by District */}
        <Card>
          <CardHeader>
            <CardTitle>Deaths by District</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>District</TableHead>
                  <TableHead>Count</TableHead>
                  <TableHead>Percentage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(deathsByDistrict)
                  .sort((a, b) => b[1] - a[1])
                  .map(([district, count]) => (
                    <TableRow key={district}>
                      <TableCell className="font-medium">{district}</TableCell>
                      <TableCell>{count}</TableCell>
                      <TableCell>{Math.round((count / totalDeaths) * 100)}%</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Age Distribution Table */}
      <Card>
        <CardHeader>
          <CardTitle>Age Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Age Group</TableHead>
                <TableHead>Count</TableHead>
                <TableHead>Percentage</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">0-30</TableCell>
                <TableCell>0</TableCell>
                <TableCell>0%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">31-50</TableCell>
                <TableCell>1</TableCell>
                <TableCell>20%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">51-70</TableCell>
                <TableCell>2</TableCell>
                <TableCell>40%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">71+</TableCell>
                <TableCell>2</TableCell>
                <TableCell>40%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
    </Screen>
  );
}

export default DeathReport;