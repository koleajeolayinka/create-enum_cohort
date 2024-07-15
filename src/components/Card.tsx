import React from 'react';
import Image from 'next/image';
import { FiUser } from 'react-icons/fi';
import { FiMoreVertical } from 'react-icons/fi';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

interface CardProps {
    id: number;
    name: string;
    description: string;
    image: string;
    programs: string;
    date: string;
}

const Card = ({ name, description, image, programs, date }: CardProps) => {
    return (
        <div className="bg-white border border-solid border-[#F6FCFF] rounded-lg shadow-custom flex items-center justify-between">
            <div className={'flex'}>
                <div className={'items-center flex rounded-lg '}>
                    <Avatar className={'items-center flex rounded-lg justify-center bg-enumGrey4'} style={{ width: '59px', height: '59px' }}>
                        <AvatarImage src={image} style={{ width: '59px', height: '59px' }} />
                        <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                </div>
                <div className="p-4 ">
                    <h1 className="text-xxs font-bold text-enumGray2">{name}</h1>
                    <div className={'flex gap-[24px]'}>
                        <h1>{programs}</h1>
                        <div className={'flex gap-[8px]'}>
                            <FiUser className="text-[#9CABB5] h-[20px] w-[20px]" />
                            <p>25 Learners</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'flex gap-[32px] items-center mr-3'}>
                <p>Created {date}</p>
                <FiMoreVertical />
            </div>
        </div>
    );
};

export default Card;
