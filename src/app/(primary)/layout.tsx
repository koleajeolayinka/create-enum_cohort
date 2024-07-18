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


// 'use client';
//
// import { useEffect, useState } from 'react';
// import Loading from '@/app/components/Loading';  // Import the shared Loading component
// import CohortDisplay from '@/components/shared/CohortDisplay';
// // ... other imports ...
//
// const CohortsPage = () => {
//     const [isLoading, setIsLoading] = useState(true);
//
//     useEffect(() => {
//         // Simulate data fetching delay
//         setTimeout(() => {
//             setIsLoading(false);
//         }, 500); // Adjust the delay (500ms) as needed
//     }, []);
//
//     return (
//         <main className="w-full pt-3 px-10">
//             <h1 className={`text-enumGray2 text-2xl`}>Cohorts</h1>
//
//             {isLoading ? (
//                 <Loading />
//             ) : (
//                 // ... rest of your cohort page logic ...
//             )}
//         </main>
//     );
// };
//
// export default CohortsPage;
//
