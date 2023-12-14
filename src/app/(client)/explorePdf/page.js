"use client";

import React, { useState } from "react";
import { Button } from "antd";
// import * as html2pdf from "html2pdf.js";
import willTemp from "@/template/will";
import savePdfFile from "@/utils/savePdfFile";
import { useSelector } from "react-redux";
import numberToWords from "@/utils/numberToWord";

const ExplorePdf = () => {
  const { formsData } = useSelector((state) => state.forms) || {};

  // console.log(formsData?.personalDetails?.fullName);

  const [loading, setLoading] = useState(false);
  const generatePdf = async () => {
    setLoading(true);
    const htmlTemplate = willTemp(formsData);
    const result = await savePdfFile(htmlTemplate);
    setLoading(false);
  };

  return (
    <section className="min-h-screen">
      <div>
        <Button onClick={generatePdf}>
          {loading ? "Loading..." : "Download PDF"}{" "}
        </Button>
      </div>
    </section>
  );
};

export default ExplorePdf;

// "use client";

// import React from "react";
// import { Button } from "antd";
// import * as html2pdf from "html2pdf.js";
// import willTemp from "@/template/will";

// const ExplorePdf = () => {
//   const generatePdf = () => {
//     const htmlTemplate = willTemp();
//     const options = {
//       filename: `${"filename"}.pdf`,
//       margin: 0,
//       image: { type: "jpeg", quality: 1.9 },
//       jsPDF: { unit: "mm", format: "A4" },
//       html2canvas: { scale: 2 },
//       pagebreak: { mode: "avoid-all" },
//       jsPDF: {
//         unit: "mm",
//         format: "a4",
//         orientation: "portrait",
//       },
//       hooks: {
//         afterPageContent: (pageNumber, pageCount, pdf) => {
//           const pageDetailHtml = `
//             <div style="text-align: center; font-size: 10px;">
//               Page ${pageNumber} of ${pageCount}
//             </div>
//           `;
//           pdf.addHTML(pageDetailHtml, {
//             x: 10,
//             y: pdf.internal.pageSize.height - 10,
//           });
//         },
//       },
//     };

//     const pdf = html2pdf().from(htmlTemplate).set(options).outputPdf();

//     pdf.save();

//     // html2pdf()
//     //   .from(htmlTemplate)
//     //   .set(options)
//     //   .outputPdf()
//     //   .then((pdf) => {
//     //     pdf.save();
//     //   });
//   };

//   return (
//     <section className="min-h-screen">
//       <div>
//         <Button onClick={generatePdf}>Generate PDF Buffer</Button>
//       </div>
//     </section>
//   );
// };

// export default ExplorePdf;

// "use client";

// import React from "react";
// import { Button } from "antd";
// import * as html2pdf from "html2pdf.js";
// import willTemp from "@/template/will";

// const ExplorePdf = () => {
//   const generatePdf = () => {
//     const htmlTemplate = willTemp();
//     const options = {
//       filename: `${"filename"}.pdf`,
//       margin: 0,
//       image: { type: "jpeg", quality: 1.9 },
//       jsPDF: { unit: "mm", format: "A4" },
//       html2canvas: { scale: 2 },
//       pagebreak: { mode: "avoid-all" },
//       jsPDF: {
//         unit: "mm",
//         format: "a4",
//         orientation: "portrait",
//       },
//       hooks: {
//         afterPageContent: (pageNumber, pageCount, pdf) => {
//           const pageDetailHtml = `
//             <div style="text-align: center; font-size: 10px;">
//               Page -${pageNumber} of ${pageCount}
//             </div>
//           `;

//           // Find the last page's content and append page details
//           const lastPage = pdf.internal.pages[pageNumber - 1];
//           const lastPageContent = lastPage.getContent();
//           lastPage.setContent(lastPageContent + pageDetailHtml);
//         },
//       },
//     };

//     const pdf = html2pdf().from(htmlTemplate).set(options).outputPdf();

//     pdf.save();
//   };

//   return (
//     <section className="min-h-screen">
//       <div>
//         <Button onClick={generatePdf}>Generate PDF Buffer</Button>
//       </div>
//     </section>
//   );
// };

// export default ExplorePdf;
