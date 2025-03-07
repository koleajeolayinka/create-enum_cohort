import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

interface DashboardNavLinkProps {
    href: string;
    children: ReactNode;
}

const DashboardNavLink: React.FC<DashboardNavLinkProps> = ({ href, children }) => {
    const pathname = usePathname();
    const active = href === pathname;

    return (
        <Link
            href={href}
            className={`hover:bg-gray-100 p-2 rounded block text-sm ${
                active ? 'text-black font-semibold' : 'text-gray-500'
            }`}
        >
            {children}
        </Link>
    );
};

export default DashboardNavLink;
