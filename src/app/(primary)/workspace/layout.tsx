'use client'
import React, { ReactNode, useState } from "react";
import CompanySection from "@/components/shared/CompanySection";
import LearnHortSideMenu from "@/components/shared/LearnHortSideMenu";

interface WorkspaceLayoutProps {
  children: ReactNode;
}

const WorkspaceLayout: React.FC<WorkspaceLayoutProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState("cohorts");
  return (
    <>
      <CompanySection />
      <section className="flex mt-5">
        <LearnHortSideMenu
          activeTab={activeTab}
          setActiveTab={setActiveTab} // Pass setActiveTab function to LearnHortSideMenu
        />{" "}
        {children}
      </section>
    </>
  );
};

export default WorkspaceLayout;
