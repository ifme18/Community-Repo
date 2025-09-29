import * as React from "react";
import {
  
  Briefcase,
  LocateFixed,
  Home,
  Calendar,
  Umbrella,
  UserSearch,
  Activity,
  Settings,
  Target,
  ChartArea,
  Group,
} from "lucide-react";




import { NavMain } from "./nav-main";

import { TeamSwitcher } from "./team-switcher";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "../../components/ui/sidebar";

const navData = {
  teams: [
    {
      name: "Nyagatugu Highlands Community",
      logo: Group,
      plan: "Community",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: Home,
      isActive: true,
    },
    {
      title: "FundPage",
      url:"/funds-page",
      icon: Briefcase,
      isActive: true,
    },
    {
      title: "Our Community Reports",
      url: "",
      icon: Briefcase,
      isActive: true,
      items: [
        { title: "Homes Reports", url:"/Homes" },
        { title: "Students Reports", url: "/student_report" },
        { title: "Gender Reports", url: "/Gender" },
        { title: "NewBirthsReports", url: "/birth-reports" },
        { title: "Death Reports", url: "/death-report" },
        { title: "Contribution Reports", url: "/contributions-reports" },
        { title: "Empwerements", url: "/empowerements-reports" },
        
      ],
    },
    {
      title: "Events and Notification",
      url: "",
      icon: ChartArea,
      isActive: true,
      items: [
        { title: "Organizational Chart", url: "/organizational-chart" },
      ],
    },
    {
      title: "Training",
      url: "",
      icon: LocateFixed,
      items: [
       //{ title: "Create Training Need", url: "/create-training-need" },
        //{ title: "Approve Training", url: "/approve-training" },
        
      ],
    },
    {
      title: "Calendar",
      url: "",
      icon: Calendar,
      items: [
       // { title: "Calendar Management", url: "/calender-management" },
       // { title: "Calendar Analytics", url: "/calendar-analytics" },
      ],
    },
    
    {
      title: "Recruitment",
      url: "",
      icon: UserSearch,
      items: [
        //{ title: "Job Position Management", url: "/job-management" },
        //{ title: "Job Requisition", url: "/create-vacancy" },
        //{ title: "Requisition Pipeline", url: "/requisition-pipeline" },
        //{ title: "Recruitment Dashboard", url: "/recruitment-dash" },
        //{ title: "Recruitment Analytics", url: "/recruitment-analytics" },
      ],
    },
    
    {
      title: "SKILLS GAP",
      url: "",
      icon: Target,
      items: [
        { title: "View Community Skills Gap", url: "/skills_gap" },
        { title: "Custom Kpi Approval", url: "/custom-kpi-approval" },
      ],
    },
    {
      title: "Settings",
      url: "",
      icon: Settings,
      items: [
        { title: "Employee Permissions", url: "/emp-permissions" },
        { title: "Permissions Management", url: "/permissions" },
        { title: "Department Management", url: "/departments" },
        { title: "Group Management", url: "/groups" },
      ],
    },
  ],
};

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const [modalOpen, setModalOpen] = React.useState(false);

  // Hardcoded user data as a fallback (replace with props or context if needed)
  const realUser = {
    name: "John Doe",
    email: "john.doe@optiven.com",
    avatar: "/avatars/shadcn.jpg",
  };

  // Handle menu click to open modal
  const handleMenuClick = (action: string) => {
    if (action === "openModal") {
      setModalOpen(true);
    }
  };

  return (
    <>
      <Sidebar collapsible="icon" className="sidebar" {...props}>
        <SidebarHeader className="border-b sidebar-header">
          <TeamSwitcher teams={navData.teams} />
        </SidebarHeader>

        <SidebarContent className="flex-1 overflow-y-auto">
          <NavMain items={navData.navMain} onMenuClick={handleMenuClick} />
        </SidebarContent>

        <SidebarFooter className="sidebar-footer border-t">
          
        </SidebarFooter>
      </Sidebar>

      
    </>
  );
}
