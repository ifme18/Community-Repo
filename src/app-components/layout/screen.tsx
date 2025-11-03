"use client";
import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Moon, Sun, LogOut, Calendar, Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../components/ui/sidebar";
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar";
import { Separator } from "../../components/ui/separator";
import { AppSidebar } from "../sidebar/app-sidebar";
import { useTheme } from "../../hooks/use-theme";

interface ScreenProps {
  children: React.ReactNode;
  headerContent?: React.ReactNode;
}

export function Screen({ children, headerContent }: ScreenProps) {
  const { toggleTheme, theme } = useTheme(); // Assuming useTheme is a custom hook
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col flex-1 w-full overflow-hidden">
        <header
          className="
            flex h-16 shrink-0 items-center justify-between
            px-4 bg-white text-black shadow-md
            dark:bg-gray-900 dark:text-gray-100
            transition-all border-b
          "
        >
          <div className="flex items-center space-x-2">
            <SidebarTrigger className="dark:bg-gray-700 dark:text-white" />
            <Separator orientation="vertical" className="h-6" />
            <div>{headerContent}</div>
          </div>

          <div className="flex items-center space-x-6">
            {/* NOTIFICATION BELL */}
            <button
              className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* CALENDAR */}
            <button
              onClick={() => navigate("/calender-management")}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Calendar"
            >
              <Calendar className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>

            {/* THEME TOGGLE */}
            <div className="flex items-center space-x-2">
              <Sun className="w-5 h-5 text-yellow-500" />
              <button
                onClick={toggleTheme}
                className="
                  relative inline-flex items-center h-6 w-12
                  rounded-full bg-gray-200 dark:bg-gray-700
                  transition-colors focus:outline-none focus:ring-2 focus:ring-green-500
                "
                aria-label="Toggle theme"
              >
                <span
                  className={`${
                    theme === "dark" ? "translate-x-4" : "-translate-x-4"
                  } inline-block w-4 h-4 transform bg-white rounded-full shadow transition-transform`}
                />
              </button>
              <Moon className="w-5 h-5 text-gray-500 dark:text-gray-300" />
            </div>

            {/* USER AVATAR DROPDOWN */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="
                    flex items-center gap-2
                    rounded-full p-0
                    hover:bg-gray-200 dark:hover:bg-gray-800
                    transition-colors
                  "
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage />
                    <AvatarFallback className="rounded-full bg-green-600 text-white" />
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="
                  w-48 rounded-lg bg-white text-black border
                  dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700
                "
                align="end"
                sideOffset={6}
              >
                <DropdownMenuLabel className="p-2 text-sm" />
                <DropdownMenuSeparator className="dark:bg-gray-700" />
                <DropdownMenuItem
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <main
          key={location.pathname} // Force re-render when route changes
          className="
            flex-1 overflow-auto
            bg-white text-black dark:bg-gray-900 dark:text-gray-100
          "
        >
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}