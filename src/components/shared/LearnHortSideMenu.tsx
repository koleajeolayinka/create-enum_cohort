"use client";
// import {IconContext, IconType } from "react-icons";
import { Users, BookOpen, Briefcase, User } from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  name: string;
  Icon: any;
}

const sideMenuItems: MenuItem[] = [
  { name: "Cohorts", Icon: Users },
  { name: "Programs", Icon: BookOpen },
  { name: "Instructors", Icon: Briefcase },
  { name: "Learners", Icon: User },
];

interface LearnHortSideMenuProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const LearnHortSideMenu: React.FC<LearnHortSideMenuProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const pathname = usePathname();

  const isActive = (tab: string) => {
    const expectedPath =
      tab === "Cohorts" ? "/workspace" : `/workspace/${tab.toLowerCase()}`;
    return pathname === expectedPath;
  };

  return (
    <aside className="w-[20%] flex justify-center">
      <ul className="text-[15.597px] font-bold leading-[26.737px]">
        {sideMenuItems.map((item) => (
          <li key={item.name}>
            <Link
              href={
                item.name === "Cohorts"
                  ? "/workspace"
                  : `/workspace/${item.name.toLowerCase()}`
              }
            >
              <button
                className={`flex gap-[14px] items-center p-2 px-10 rounded-[300px] m-2 max-md:p1 hover:bg-[#F6FCFF] ${
                  isActive(item.name) ? "bg-[#F6FCFF] text-enumBlue" : ""
                }`}
                onClick={() => setActiveTab(item.name)}
              >
                <item.Icon
                  color={isActive(item.name) ? "#008EEF" : "#475661"}
                  size="20.067px"
                />
                <h1
                  className={
                    isActive(item.name) ? "text-enumBlue" : "text-enumGrey"
                  }
                >
                  {item.name}
                </h1>
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default LearnHortSideMenu;
