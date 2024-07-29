import React, { ReactNode } from 'react';
import Header from '@/components/shared/Header';
interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default MainLayout;
