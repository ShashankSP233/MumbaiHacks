import React from "react";
import { FloatingNav } from "../../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Hero from "@/components/Hero";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div>
      {/* <Sidebar /> */}
      <div className="relative  w-full">
        <FloatingNav navItems={navItems} />
      </div>
      <div className="flex">{children}
      </div>
    </div>
  );
};

export default Layout;
