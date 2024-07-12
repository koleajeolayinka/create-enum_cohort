import React, { ReactNode } from 'react';
import CompanySection from '@/components/shared/CompanySection';
import LearnHortSideMenu from '@/components/shared/LearnHortSideMenu';

interface WorkspaceLayoutProps {
    children: ReactNode;
}

const WorkspaceLayout: React.FC<WorkspaceLayoutProps> = ({ children }) => {
    return (
        <>
            <CompanySection />
            <section className="flex mt-5">
                <LearnHortSideMenu />
                {children}
            </section>
        </>
    );
};

export default WorkspaceLayout;
