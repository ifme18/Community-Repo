import * as React from "react";
import { ChevronRight, type LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "../../components/ui/sidebar";
import { cn } from "../../lib/utils";

interface NavItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
    action?: string;
  }[];
}

export const NavMain = React.memo(function NavMain({
  items,
  onMenuClick,
}: {
  items: NavItem[];
  onMenuClick: (action: string) => void;
}) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  /**
   * On mount, restore the last open accordion from localStorage
   * or default to any item with `isActive = true`.
   */
  React.useEffect(() => {
    const savedTitle = localStorage.getItem("openNavItem");
    if (savedTitle) {
      setOpenItem(savedTitle);
    } else {
      const activeItem = items.find((item) => item.isActive);
      if (activeItem) {
        setOpenItem(activeItem.title);
      }
    }
  }, [items]);

  /**
   * Handler: open the clicked item or close it if it's already open.
   */
  function handleToggle(title: string) {
    setOpenItem((prev) => {
      if (prev === title) {
        localStorage.removeItem("openNavItem");
        return null;
      }
      localStorage.setItem("openNavItem", title);
      return title;
    });
  }

  /**
   * Handle navigation with proper cleanup and forced navigation
   */
  const handleNavigation = React.useCallback(
    (url: string, e?: React.MouseEvent) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      navigate(url, {
        replace: false,
        state: { timestamp: Date.now() },
      });
    },
    [navigate]
  );

  return (
    <SidebarGroup>
      <SidebarGroupLabel
        className="text-xs uppercase sidebar-group-label text-orange-600 dark:text-orange-300 px-4 py-3"
      >
        Platform
      </SidebarGroupLabel>

      <SidebarMenu className="space-y-1">
        {items.map((item) =>
          item.items && item.items.length > 0 ? (
            <CollapsibleItem
              key={item.title}
              item={item}
              isOpen={openItem === item.title}
              onToggle={() => handleToggle(item.title)}
              onMenuClick={onMenuClick}
            />
          ) : (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                className={cn(
                  "flex items-center py-3 px-4 sidebar-menu-button cursor-pointer text-gray-800 dark:text-gray-200 hover:bg-orange-100 dark:hover:bg-orange-700",
                  item.isActive && "bg-orange-50 text-orange-600 dark:bg-orange-800 dark:text-orange-200",
                  location.pathname === item.url && "bg-orange-50 text-orange-600 dark:bg-orange-800 dark:text-orange-200"
                )}
                onClick={(e) => {
                  if (item.url && item.url !== "") {
                    handleNavigation(item.url, e);
                  } else if (item.items?.length === 0) {
                    onMenuClick("openModal");
                  }
                }}
              >
                {item.icon && (
                  <item.icon className="w-5 h-5 sidebar-icon text-orange-500 dark:text-orange-300 shrink-0" />
                )}
                <span className="ml-3 truncate">{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
});

const CollapsibleItem = React.memo(function CollapsibleItem({
  item,
  isOpen,
  onToggle,
  onMenuClick,
}: {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
  onMenuClick: (action: string) => void;
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubNavigation = React.useCallback(
    (url: string, e?: React.MouseEvent) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      navigate(url, {
        replace: false,
        state: { timestamp: Date.now() },
      });
    },
    [navigate]
  );

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        onClick={onToggle}
        className={cn(
          "flex w-full items-center py-5 px-2 text-base sidebar-menu-button text-gray-800 dark:text-gray-200 hover:bg-orange-100 dark:hover:bg-orange-700",
          isOpen && "bg-orange-50 text-orange-600 dark:bg-orange-800 dark:text-orange-200"
        )}
      >
        {item.icon && (
          <item.icon className="w-6 h-6 text-orange-500 dark:text-orange-300 shrink-0" />
        )}
        <span className="ml-3 truncate">{item.title}</span>
        <ChevronRight
          className={cn(
            "ml-auto sidebar-chevron text-orange-500 dark:text-orange-300 transition-transform duration-200 w-6 h-6",
            isOpen && "rotate-90"
          )}
        />
      </SidebarMenuButton>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="accordion-content"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <SidebarMenuSub className="space-y-1 pl-8 py-2 sidebar-submenu">
              {item.items?.map((subItem) => (
                <SidebarMenuSubItem key={subItem.title}>
                  <SidebarMenuSubButton
                    className={cn(
                      "block sidebar-menu-button text-gray-600 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-700 px-2 py-1 rounded-md truncate cursor-pointer w-full text-left",
                      location.pathname === subItem.url &&
                        "bg-orange-50 text-orange-600 dark:bg-orange-800 dark:text-orange-200 border-orange-200"
                    )}
                    onClick={(e) => {
                      if (subItem.action) {
                        e.preventDefault();
                        e.stopPropagation();
                        onMenuClick(subItem.action);
                      } else if (subItem.url && subItem.url !== "") {
                        handleSubNavigation(subItem.url, e);
                      }
                    }}
                  >
                    {subItem.title}
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </motion.div>
        )}
      </AnimatePresence>
    </SidebarMenuItem>
  );
});