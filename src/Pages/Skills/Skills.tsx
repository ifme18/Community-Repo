import React, { useState } from "react";
import { Users, Briefcase, UserCheck, UserX, MapPin, Phone, Search, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Screen } from "../../app-components/layout/screen";


function SkillsGap() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterSkill, setFilterSkill] = useState("All");

  // Comprehensive skills and employment data
  const skillsData = [
    {
      id: 1,
      name: "John Kamau",
      age: 28,
      gender: "Male",
      phone: "+254-712-345-678",
      location: "Central District",
      primarySkill: "Plumber",
      secondarySkills: ["Electrical Work", "General Repairs"],
      experienceYears: 5,
      employmentStatus: "Employed",
      currentWorkplace: "Highlands Construction Co.",
      monthlyIncome: 35000,
      availableForWork: false,
      certifications: ["Plumbing Certificate - KTI"],
      seekingOpportunities: false
    },
    {
      id: 2,
      name: "Mary Wanjiku",
      age: 24,
      gender: "Female",
      phone: "+254-723-456-789",
      location: "North District",
      primarySkill: "Hairdresser",
      secondarySkills: ["Makeup Artist", "Braiding"],
      experienceYears: 3,
      employmentStatus: "Self-Employed",
      currentWorkplace: "Own Salon",
      monthlyIncome: 25000,
      availableForWork: true,
      certifications: ["Beauty Therapy Diploma"],
      seekingOpportunities: true
    },
    {
      id: 3,
      name: "Peter Otieno",
      age: 32,
      gender: "Male",
      phone: "+254-734-567-890",
      location: "South District",
      primarySkill: "Carpenter",
      secondarySkills: ["Furniture Making", "Cabinet Installation"],
      experienceYears: 8,
      employmentStatus: "Unemployed",
      currentWorkplace: "None",
      monthlyIncome: 0,
      availableForWork: true,
      certifications: ["Carpentry Level 3 Certificate"],
      seekingOpportunities: true
    },
    {
      id: 4,
      name: "Grace Chebet",
      age: 26,
      gender: "Female",
      phone: "+254-745-678-901",
      location: "East District",
      primarySkill: "Tailor",
      secondarySkills: ["Fashion Design", "Alterations"],
      experienceYears: 4,
      employmentStatus: "Self-Employed",
      currentWorkplace: "Home Workshop",
      monthlyIncome: 18000,
      availableForWork: true,
      certifications: ["Fashion Design Certificate"],
      seekingOpportunities: true
    },
    {
      id: 5,
      name: "James Mwangi",
      age: 35,
      gender: "Male",
      phone: "+254-756-789-012",
      location: "West District",
      primarySkill: "Driver",
      secondarySkills: ["Mechanic", "Tour Guide"],
      experienceYears: 12,
      employmentStatus: "Employed",
      currentWorkplace: "SafeBoda",
      monthlyIncome: 30000,
      availableForWork: false,
      certifications: ["Driving License Class C", "Motor Vehicle Inspection"],
      seekingOpportunities: false
    },
    {
      id: 6,
      name: "Sarah Akinyi",
      age: 22,
      gender: "Female",
      phone: "+254-767-890-123",
      location: "Central District",
      primarySkill: "Computer Skills",
      secondarySkills: ["Data Entry", "Social Media Management"],
      experienceYears: 2,
      employmentStatus: "Unemployed",
      currentWorkplace: "None",
      monthlyIncome: 0,
      availableForWork: true,
      certifications: ["Computer Packages Certificate", "Digital Marketing"],
      seekingOpportunities: true
    },
    {
      id: 7,
      name: "David Kipchoge",
      age: 29,
      gender: "Male",
      phone: "+254-778-901-234",
      location: "North District",
      primarySkill: "Electrician",
      secondarySkills: ["Solar Installation", "Appliance Repair"],
      experienceYears: 6,
      employmentStatus: "Self-Employed",
      currentWorkplace: "Freelance",
      monthlyIncome: 28000,
      availableForWork: true,
      certifications: ["Electrical Installation Level 2"],
      seekingOpportunities: true
    },
    {
      id: 8,
      name: "Ruth Nyong'o",
      age: 31,
      gender: "Female",
      phone: "+254-789-012-345",
      location: "South District",
      primarySkill: "Cook/Chef",
      secondarySkills: ["Catering", "Food Preparation"],
      experienceYears: 7,
      employmentStatus: "Unemployed",
      currentWorkplace: "None",
      monthlyIncome: 0,
      availableForWork: true,
      certifications: ["Food Handler's Certificate", "Culinary Arts"],
      seekingOpportunities: true
    },
    {
      id: 9,
      name: "Michael Mutua",
      age: 27,
      gender: "Male",
      phone: "+254-790-123-456",
      location: "East District",
      primarySkill: "Mason",
      secondarySkills: ["Tiling", "Plastering"],
      experienceYears: 5,
      employmentStatus: "Self-Employed",
      currentWorkplace: "Contract Work",
      monthlyIncome: 22000,
      availableForWork: true,
      certifications: ["Masonry Level 2 Certificate"],
      seekingOpportunities: true
    },
    {
      id: 10,
      name: "Faith Wambui",
      age: 25,
      gender: "Female",
      phone: "+254-701-234-567",
      location: "West District",
      primarySkill: "Teacher",
      secondarySkills: ["Tutoring", "Child Care"],
      experienceYears: 3,
      employmentStatus: "Unemployed",
      currentWorkplace: "None",
      monthlyIncome: 0,
      availableForWork: true,
      certifications: ["Teaching Certificate P1", "First Aid Certificate"],
      seekingOpportunities: true
    }
  ];

  // Filter the data based on search term and filters
  const filteredData = skillsData.filter(person => {
    const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         person.primarySkill.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         person.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === "All" || person.employmentStatus === filterStatus;
    const matchesSkill = filterSkill === "All" || person.primarySkill === filterSkill;
    
    return matchesSearch && matchesStatus && matchesSkill;
  });

  // Calculate statistics
  const totalPeople = skillsData.length;
  const employed = skillsData.filter(p => p.employmentStatus === "Employed").length;
  const selfEmployed = skillsData.filter(p => p.employmentStatus === "Self-Employed").length;
  const unemployed = skillsData.filter(p => p.employmentStatus === "Unemployed").length;
  const availableForWork = skillsData.filter(p => p.availableForWork).length;
  const seekingOpportunities = skillsData.filter(p => p.seekingOpportunities).length;

  // Group by skills
  const skillsBreakdown = skillsData.reduce<Record<string, number>>((acc, person) => {
    acc[person.primarySkill] = (acc[person.primarySkill] ?? 0) + 1;
    return acc;
  }, {});

  // Get unique skills for filter dropdown
  const uniqueSkills = [...new Set(skillsData.map(p => p.primarySkill))].sort();

  const getStatusColor = (status: string | number) => {
    const colors = {
      "Employed": "bg-green-500",
      "Self-Employed": "bg-blue-500",
      "Unemployed": "bg-red-500",
    };
    
  };

  const getStatusTextColor = (status: string): string => {
    const colors = {
      "Employed": "text-green-700 bg-green-100 dark:text-green-100 dark:bg-green-800",
      "Self-Employed": "text-blue-700 bg-blue-100 dark:text-blue-100 dark:bg-blue-800",
      "Unemployed": "text-red-700 bg-red-100 dark:text-red-100 dark:bg-red-800",
    } as const;
    return colors[status as keyof typeof colors] ?? "text-gray-700 bg-gray-100";
  };

  return (
    <Screen>
    <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-800 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Community Skills & Employment Repository
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Connecting skilled workers with employment opportunities in Nyagatugu Highlands Community
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Total Skilled Workers
            </CardTitle>
            <Users className="h-4 w-4 text-blue-500 dark:text-blue-300" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-500 dark:text-blue-300">
              {totalPeople}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              In our database
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Currently Employed
            </CardTitle>
            <UserCheck className="h-4 w-4 text-green-500 dark:text-green-300" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500 dark:text-green-300">
              {employed + selfEmployed}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {Math.round(((employed + selfEmployed) / totalPeople) * 100)}% employment rate
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Seeking Work
            </CardTitle>
            <UserX className="h-4 w-4 text-red-500 dark:text-red-300" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500 dark:text-red-300">
              {unemployed}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Need employment
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Available for Work
            </CardTitle>
            <Briefcase className="h-4 w-4 text-purple-500 dark:text-purple-300" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-500 dark:text-purple-300">
              {availableForWork}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Open to opportunities
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter Controls */}
      <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">
            Search & Filter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, skill, or location..."
                className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <select
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="All">All Employment Status</option>
              <option value="Employed">Employed</option>
              <option value="Self-Employed">Self-Employed</option>
              <option value="Unemployed">Unemployed</option>
            </select>

            <select
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              value={filterSkill}
              onChange={(e) => setFilterSkill(e.target.value)}
            >
              <option value="All">All Skills</option>
              {uniqueSkills.map(skill => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Skills Directory Table */}
      <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">
            Skills Directory ({filteredData.length} results)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100">Name</th>
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100">Primary Skill</th>
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100">Experience</th>
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100">Employment Status</th>
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100">Current Workplace</th>
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100">Location</th>
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100">Contact</th>
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100">Available</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((person) => (
                  <tr key={person.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700">
                    <td className="p-3">
                      <div className="font-medium text-gray-900 dark:text-gray-100">{person.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{person.age} years, {person.gender}</div>
                    </td>
                    <td className="p-3">
                      <div className="font-medium text-gray-900 dark:text-gray-100">{person.primarySkill}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {person.secondarySkills.slice(0, 2).join(", ")}
                      </div>
                    </td>
                    <td className="p-3 text-gray-600 dark:text-gray-400">{person.experienceYears} years</td>
                    <td className="p-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusTextColor(person.employmentStatus)}`}>
                        {person.employmentStatus}
                      </span>
                    </td>
                    <td className="p-3 text-gray-600 dark:text-gray-400">
                      {person.currentWorkplace || "None"}
                      {person.monthlyIncome > 0 && (
                        <div className="text-sm text-green-600 dark:text-green-400">
                          KES {person.monthlyIncome.toLocaleString()}/month
                        </div>
                      )}
                    </td>
                    <td className="p-3">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin className="h-3 w-3 mr-1" />
                        {person.location}
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Phone className="h-3 w-3 mr-1" />
                        <span className="text-sm">{person.phone}</span>
                      </div>
                    </td>
                    <td className="p-3">
                      {person.availableForWork ? (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                          Available
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
                          Not Available
                        </span>
                      )}
                      {person.seekingOpportunities && (
                        <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">Seeking opportunities</div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Skills Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-100">
              Skills Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(skillsBreakdown)
                .sort((a, b) => b[1] - a[1])
                .map(([skill, count]) => (
                  <div key={skill} className="flex justify-between items-center">
                    <span className="text-gray-900 dark:text-gray-100">{skill}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600 dark:text-gray-400">{count}</span>
                      <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${(count / totalPeople) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-100">
              Urgent Job Seekers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {skillsData
                .filter(person => person.employmentStatus === "Unemployed")
                .map(person => (
                  <div key={person.id} className="border-l-4 border-red-500 pl-4 py-2 bg-red-50 dark:bg-red-900/20 rounded">
                    <div className="font-medium text-gray-900 dark:text-gray-100">{person.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{person.primarySkill} - {person.experienceYears} years exp.</div>
                    <div className="text-sm text-gray-500 dark:text-gray-500">{person.location} • {person.phone}</div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </Screen>
  );
}

export default SkillsGap;