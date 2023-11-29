import Footer from "@/shared/Footer";
import Header from "@/shared/Header";
import React from "react";

const ClientLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 min-h-screen font-primary">{children}</div>
      <Footer />
    </div>
  );
};

export default ClientLayout;
