import { ChevronsUpDown, LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "@/redux/features/auth/authSlice";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface UserProps {
  name: string;
  email: string;
  avatar: string;
}

export function NavUser({ user }: { user: UserProps }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
               className="flex items-center justify-between px-4 py-3 bg-[hsl(var(--sidebar-background))] hover:bg-[hsl(var(--sidebar-hover))] text-white"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg bg-[#68b932] text-white">
                  {user.name?.[0]?.toUpperCase() ?? "U"}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 ml-3">
                <div className="text-sm font-semibold text-white truncate">
                  {user.name}
                </div>
                <div className="text-xs text-white truncate">
                  {user.email}
                </div>
              </div>
              <ChevronsUpDown className="ml-auto text-gray-400" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56 text-gray-400 rounded-md border border-none"
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-4">
              <div className="text-sm font-semibold text-gray-800 dark:text-gray-400 truncate">
                {user.name}
              </div>
              <div className="text-xs text-gray-400">{user.email}</div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-200" />
            <DropdownMenuItem
              onClick={handleLogout}
              className="px-4 py-2 cursor-pointer font-bold dark:text-gray-300 dark:bg-gray-900 hover:bg-red-600 hover:text-white focus:bg-gray-200 dark:hover:bg-red-600 dark:focus:bg-gray-800"
            >
              <LogOut className="w-4 h-4 mr-2 text-gray-800 dark:text-gray-400" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
