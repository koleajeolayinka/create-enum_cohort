import { FiBell } from 'react-icons/fi';
import React from 'react';

const NotificationHub = () => {
    return (
        <div style={{ position: 'relative' }}>
            <FiBell size={26} color="#000" />
            <span className="absolute top-0 right-0 bg-enumBlue rounded-full text-white p-1 w-[15.6px] h-[15.6px] flex justify-center items-center">
                <p className="text-white text-center text-xs font-medium leading-[10.4px] tracking-[0.104px]">5</p>
            </span>
        </div>
    );
};

export default NotificationHub;
