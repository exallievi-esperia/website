import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <Header title={title} description={description} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
