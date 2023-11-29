import Footer from "@/shared/Footer";
import Header from "@/shared/Header";
import React from "react";

const ClientLayout = ({ children }) => {
  return (
    <main className="font-primary">
      <Header />
      <div className="bg-[#EEEEEE] min-h-[70vh]">{children}</div>
      <Footer />
    </main>
  );
};

export default ClientLayout;
