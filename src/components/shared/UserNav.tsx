import Image from 'next/image';
import React from 'react';
import NotificationHub from '@/components/shared/NotificationHub';
import UserProfile from '@/components/shared/UserProfile';

const UserNav = () => {
    return (
        <nav className="flex justify-center items-center gap-[32px]">
            <ul className="flex justify-center items-center gap-[24px]">
                <NotificationHub />
                <UserProfile />
            </ul>
            <Image src={'/menu.svg'} alt="Menu Icon" height={28} width={28} />
        </nav>
    );
};

export default UserNav;
