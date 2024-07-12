'use client';

import { IconType } from 'react-icons';
import { FiUsers, FiBookOpen, FiBriefcase, FiUser } from 'react-icons/fi';
import { useState } from 'react';
import Link from 'next/link';

interface MenuItem {
    name: string;
    Icon: IconType;
}

const LearnHortSideMenu = () => {
    const sideMenuItems: MenuItem[] = [
        { name: 'Cohorts', Icon: FiUsers },
        { name: 'Programs', Icon: FiBookOpen },
        { name: 'Instructors', Icon: FiBriefcase },
        { name: 'Learners', Icon: FiUser },
    ];
    const [buttonClicked, setButtonClicked] = useState('Cohorts');
    return (
        <aside className={'w-[20%] flex justify-center'}>
            <ul className={'text-[15.597px] font-bold leading-[26.737px]'}>
                {sideMenuItems.map((item: MenuItem) => (
                    <li key={item.name}>
                        <Link href={`/${item.name.toLowerCase()}`}>
                            <button
                                className={
                                    item.name === buttonClicked
                                        ? 'flex gap-[14px] items-center p-2 px-10 text-enumBlue bg-[#F6FCFF] rounded-[300px] m-2'
                                        : 'flex gap-[14px] items-center p-2 px-10 rounded-[300px] m-2 text-enumGrey'
                                }
                                onClick={() => setButtonClicked(item.name)}
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
