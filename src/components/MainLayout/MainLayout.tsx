import React from "react";
import Navbar from "../Navbar/Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="content">{children}</div>
    </div>
  );
};

export default MainLayout;
