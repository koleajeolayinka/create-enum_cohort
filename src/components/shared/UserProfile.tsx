import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FiChevronDown } from 'react-icons/fi';
import React from 'react';
import UserAvatar from '@/components/shared/UserAvatar';

const UserProfile = () => {
    return (
        <div className="flex gap-2.5 justify-center items-center text-enumGrey">
            <UserAvatar />
            <h1>Onowomano</h1>
            <FiChevronDown />
        </div>
    );
};

export default UserProfile;
