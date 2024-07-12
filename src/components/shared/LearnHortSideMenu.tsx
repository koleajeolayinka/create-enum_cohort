'use client';
// imports ...
import { IconType } from 'react-icons';
import { FiUsers, FiBookOpen, FiBriefcase, FiUser } from 'react-icons/fi';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItem {
    name: string;
    Icon: IconType;
}

const sideMenuItems: MenuItem[] = [
    { name: 'Cohorts', Icon: FiUsers },
    { name: 'Programs', Icon: FiBookOpen },
    { name: 'Instructors', Icon: FiBriefcase },
    { name: 'Learners', Icon: FiUser },
];

interface LearnHortSideMenuProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const LearnHortSideMenu: React.FC<LearnHortSideMenuProps> = ({
                                                                 activeTab,
                                                                 setActiveTab,
                                                             }) => {
    // ... (your sideMenuItems array)
    const pathname = usePathname();

    const isActive = (tab: string) => {
        if (tab === 'Cohorts') {
            return pathname === '/workspace'; // Active if on "/workspace"
        } else {
            return pathname === `/workspace/${tab.toLowerCase()}`; // Active for other tabs
        }
    };
    return (
        <aside className={'w-[20%] flex justify-center'}>
            <ul className={'text-[15.597px] font-bold leading-[26.737px]'}>
                {sideMenuItems.map((item) => (
                    <li key={item.name}>
                            <Link href={item.name === "Cohorts" ? "/workspace" : `/workspace/${item.name.toLowerCase()}`}>

                            <button
                                className={
                                    isActive(item.name) // Check if the current route matches
                                        ? 'flex gap-[14px] items-center p-2 px-10 text-enumBlue bg-[#F6FCFF] rounded-[300px] m-2'
                                        : 'flex gap-[14px] items-center p-2 px-10 rounded-[300px] m-2 text-enumGrey'
                                }
                                onClick={() => setActiveTab(item.name)} // Update active tab
                            >
                <span>
                  <item.Icon />
                </span>
                                <h1>{item.name}</h1>
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default LearnHortSideMenu;
