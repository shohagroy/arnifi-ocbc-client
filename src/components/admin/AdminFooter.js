import React from "react";

const AdminFooter = () => {
  return (
    <footer className="">
      <div className="flex justify-between items-center text-sm max-w-7xl mx-auto">
        <div>
          <span>©2023 </span> <a href="arnifi.com">Arnifi.com</a>
        </div>
        <div>
          <a
            className="text-primary"
            rel="noopener noreferrer"
            href="https://www.arnifi.com/privacypolicy"
            target="_"
          >
            <span>Privacy policy</span>
          </a>
          <span className="mx-2"> | </span>
          <a
            className="text-primary"
            rel="noopener noreferrer"
            href="https://www.arnifi.com/tnc"
            target="_"
          >
            <span>Terms of service</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;
