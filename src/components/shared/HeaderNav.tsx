'use client';
import { useState } from 'react';
import Link from 'next/link';

const HeaderNav = () => {
    const navItems: string[] = ['Home', 'Workspace', 'Resources Library'];
    const [activeNav, setActiveNav] = useState('');
    return (
        <nav className="text-enumGrey">
            <ul className="flex h-13 gap-3 text-base font-semibold leading-[175%] max-lg:space-x-1 space-x-3  max-lg:gap-[1px]  ">
                {navItems.map((item: string) => (
                    <li key={item} className={item === activeNav ? 'border-b-4 border-enumBlue rounded-[4px]' : ''}>
                        <Link href={`/${item.toLowerCase().replace(/ /g, '-')}`}>
                            <button
                                className={
                                    item === activeNav
                                        ? 'p-2 px-6 text-enumBlue bg-[#F6FCFF] rounded-[300px] m-2   max-md:p1 '
                                        : 'p-2 px-6 m-2 '
                                }
                                onClick={() => setActiveNav(item)}
                            >
                                <h4 className={'max-[1024px]:text-xxs'}>{item}</h4>
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default HeaderNav;
