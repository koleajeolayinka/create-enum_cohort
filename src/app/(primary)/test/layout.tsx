"use client";
import React, { ReactNode } from "react";

interface TestLayoutProps {
  children: ReactNode;
}

const TestLayout: React.FC<TestLayoutProps> = ({ children }) => {
  return (
    <main>
      {children}
    </main>
  );
};

export default TestLayout;
