import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
interface Props {
  children?: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
