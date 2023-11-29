import Footer from "@/shared/Footer";
import Header from "@/shared/Header";
import React from "react";

const ClientLayout = ({ children }) => {
  return (
    <main className="font-primary">
      <Header />
      <div className="bg-gray-100 min-h-[70vh]">{children}</div>
      <Footer />
    </main>
  );
};

export default ClientLayout;
