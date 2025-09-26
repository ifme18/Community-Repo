import React, { useState } from 'react';
import { Calendar, MapPin, Bell, Newspaper, Users, TrendingUp, Clock, ChevronRight, Star, AlertCircle } from 'lucide-react';
import { Screen } from '../app-components/layout/screen';

function Home() {
  const [activeTab, setActiveTab] = useState('overview');

  const Events = [
    {
      eventName: "Community Fundraising",
      location: "Chiefs Corner",
      date: "20/12/2023",
      time: "10:00 AM",
      attendees: 45,
      category: "fundraising",
      priority: "high",
      id: "3",
    },
    {
      eventName: "Community Meeting",
      location: "Town Hall",
      date: "25/12/2023",
      time: "2:00 PM",
      attendees: 32,
      category: "meeting",
      priority: "medium",
      id: "4",
    },
    {
      eventName: "Youth Sports Day",
      location: "Community Field",
      date: "30/12/2023",
      time: "9:00 AM",
      attendees: 78,
      category: "sports",
      priority: "low",
      id: "5",
    },
  ];

  const Announcements = [
    {
      announcementName: "Chanjo ya Ngombe",
      description: "House-to-house vaccination program for livestock health",
      date: "18/12/2023",
      urgent: true,
      category: "health",
      id: "3",
    },
    {
      announcementName: "Road Maintenance",
      description: "Scheduled road repairs on Main Street next week",
      date: "15/12/2023",
      urgent: false,
      category: "infrastructure",
      id: "5",
    },
    {
      announcementName: "Water Supply Update",
      description: "New water connection points available in Zone B",
      date: "14/12/2023",
      urgent: false,
      category: "utilities",
      id: "6",
    },
  ];

  const News = [
    {
      newsTitle: "New Community Center Opens",
      description: "State-of-the-art facility with meeting rooms and recreational areas",
      date: "16/12/2023",
      author: "Community Board",
      readTime: "3 min",
      featured: true,
      id: "4",
    },
    {
      newsTitle: "Agricultural Training Program",
      description: "Free training sessions on modern farming techniques",
      date: "12/12/2023",
      author: "Extension Officer",
      readTime: "5 min",
      featured: false,
      id: "6",
    },
    {
      newsTitle: "School Renovation Complete",
      description: "Primary school gets new classrooms and playground",
      date: "10/12/2023",
      author: "Education Committee",
      readTime: "2 min",
      featured: false,
      id: "7",
    },
  ];

  const stats = [
    { label: "Active Members", value: "1,247", icon: Users, change: "+12%" },
    { label: "Upcoming Events", value: Events.length.toString(), icon: Calendar, change: "+3" },
    { label: "Recent Updates", value: "8", icon: TrendingUp, change: "+2" },
    { label: "Community Projects", value: "15", icon: Star, change: "Active" },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      fundraising: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
      meeting: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      sports: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      health: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
      infrastructure: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
      utilities: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
    };
   ;
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      high: "border-l-red-500 bg-red-50 dark:bg-red-900/20",
      medium: "border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/20",
      low: "border-l-green-500 bg-green-50 dark:bg-green-900/20",
    };
    
  };

  return (
    <Screen>
    
    <div className="min-h-screen ">
      {/* Header */}
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    {stat.change}
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-green-500 p-3 rounded-lg">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Events Section */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                    Upcoming Events
                  </h2>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {Events.length}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
                {Events.map((event) => (
                  <div
                    key={event.id}
                    className={`p-4 rounded-lg border-l-4 ${getPriorityColor(event.priority)} hover:shadow-md transition-all duration-200 cursor-pointer`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {event.eventName}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${getCategoryColor(event.category)}`}>
                        {event.category}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.date} at {event.time}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {event.attendees} attending
                        </span>
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Announcements Section */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                    <Bell className="h-5 w-5 mr-2 text-orange-500" />
                    Announcements
                  </h2>
                  <div className="flex items-center">
                    <AlertCircle className="h-4 w-4 text-red-500 mr-1" />
                    <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {Announcements.filter(a => a.urgent).length} urgent
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
                {Announcements.map((announcement) => (
                  <div
                    key={announcement.id}
                    className={`p-4 rounded-lg border ${
                      announcement.urgent 
                        ? 'border-red-200 bg-red-50 dark:border-red-700 dark:bg-red-900/20' 
                        : 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900/50'
                    } hover:shadow-md transition-all duration-200 cursor-pointer`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {announcement.announcementName}
                      </h3>
                      <div className="flex items-center space-x-2">
                        {announcement.urgent && (
                          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                            Urgent
                          </span>
                        )}
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${getCategoryColor(announcement.category)}`}>
                          {announcement.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      {announcement.description}
                    </p>
                    <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                      <span>{announcement.date}</span>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* News Section */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                    <Newspaper className="h-5 w-5 mr-2 text-green-500" />
                    Latest News
                  </h2>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {News.filter(n => n.featured).length} featured
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
                {News.map((news) => (
                  <div
                    key={news.id}
                    className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                      news.featured 
                        ? 'border-green-200 bg-gradient-to-r from-green-50 to-blue-50 dark:border-green-700 dark:from-green-900/20 dark:to-blue-900/20 hover:shadow-lg' 
                        : 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900/50 hover:shadow-md'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {news.newsTitle}
                      </h3>
                      {news.featured && (
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      {news.description}
                    </p>
                    <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <span>{news.author}</span>
                        <span>•</span>
                        <span>{news.date}</span>
                      </div>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {news.readTime}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Submit Report", color: "blue" },
              { label: "Request Service", color: "green" },
              { label: "Join Event", color: "purple" },
              { label: "Contact Officials", color: "orange" }
            ].map((action, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 
                  ${action.color === 'blue' ? 'bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200' :
                    action.color === 'green' ? 'bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-200' :
                    action.color === 'purple' ? 'bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-200' :
                    'bg-orange-100 text-orange-800 hover:bg-orange-200 dark:bg-orange-900 dark:text-orange-200'
                  }`}
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    </Screen>
  );
}

export default Home;