import * as React from "react";
import { ChevronsUpDown, Plus } from "lucide-react";

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
  useSidebar,
} from "@/components/ui/sidebar";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
}) {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="flex items-center justify-between px-4 py-3 bg-[hsl(var(--sidebar-background))] hover:bg-[hsl(var(--sidebar-hover))] text-white"
            >
              <div className="flex aspect-square items-center justify-center w-8 h-8 rounded-lg bg-gray-800 text-gray-100">
                <activeTeam.logo className="w-4 h-4" />
              </div>
              <div className="grid flex-1 ml-3 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{activeTeam.name}</span>
                <span className="truncate text-xs text-gray-400">
                  {activeTeam.plan}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto text-gray-400" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg dark:text-gray-300 dark:bg-gray-900 hover:bg-gray-200 focus:bg-gray-200 dark:hover:bg-gray-800 dark:focus:bg-gray-800"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-gray-400 px-3 py-2">
              Companies
            </DropdownMenuLabel>
            {teams.map((team) => (
              <DropdownMenuItem
                key={team.name}
                onClick={() => setActiveTeam(team)}
                className="gap-2 p-2 cursor-pointer font-bold hover:bg-gray-700"
              >
                <div className="flex w-6 h-6 items-center justify-center rounded-sm border border-gray-600 bg-gray-800">
                  <team.logo className="w-4 h-4 shrink-0 text-gray-200" />
                </div>
                {team.name}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator className="bg-gray-700" />
            <DropdownMenuItem className="gap-2 p-2 cursor-pointer hover:bg-gray-700">
              <div className="flex w-6 h-6 items-center justify-center rounded-md border border-gray-600 bg-gray-800">
                <Plus className="w-4 h-4 text-gray-200" />
              </div>
              <div className="font-medium text-gray-900">Add company</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
