import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';

const UserAvatar = () => {
    const userProfile: string = '/avatar.svg';

    return (
        <Avatar>
            <AvatarImage src={userProfile} />
            <AvatarFallback>O</AvatarFallback>
        </Avatar>
    );
};

export default UserAvatar;
