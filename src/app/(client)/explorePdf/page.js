"use client";

import React from "react";
import { Button } from "antd";
import { useCreatePdfMutation } from "@/redux/features/explorePdf/explorePdfApi";
import openPDF from "@/utils/openPdf";
import { jsPDF } from "jspdf";
import * as html2pdf from "html2pdf.js";

const ExplorePdf = () => {
  const [createPdf, { isLoading: pdfLoading, isError: pdfError }] =
    useCreatePdfMutation();

  console.log(pdfLoading, pdfError);

  const htmlTemp = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      this is demo will page
    </body>
  </html>
  `;

  const createPdfHandelar = async () => {
    // const content = document.createElement("div");
    // content.innerHTML = htmlTemp;
    // const options = {
    //   margin: 10,
    //   filename: "document.pdf",
    //   image: { type: "jpeg", quality: 0.98 },
    //   html2canvas: { scale: 2 },
    //   jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    // };
    // try {
    //   const pdfBlob = await html2pdf().from(content).set(options).outputPdf();
    //   console.log(pdfBlob);
    //   console.log("click");
    // } catch (error) {
    //   console.error("PDF generation error:", error);
    //   throw error;
    // }
    const data = { name: "shohag roy" };
    const result = await createPdf(data).unwrap();
    console.log(result?.data?.data?.data);
    openPDF(result?.data?.data?.data);
    openPDF(pdfBlob);
  };

  const generatePdf = () => {
    const htmlTemplate = ` <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <script>
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  clifford: "#da373d",
                },
              },
            },
          };
        </script>
      </head>
      <body>
        <section className="min-h-screen p-[100px]">
          <div className="h-[11.7in] w-[8.3in] mx-auto bg-white p-[30px]">
            <div>
              <div
                className="font-primary text-center h-[600px] flex flex-col justify-center items-center"
              >
                <h2 className="text-2xl">LAST WILL AND TESTAMENT OF</h2>
                <h1 className="text-3xl py-4">Personal full name</h1>
              </div>
            </div>
    
            <div className="mt-28 text-lg">
              <div className="p-10 m-10 bg-gray-100">
                <p className="py-1">
                  <strong>Please note the following:</strong>
                </p>
                <ol className="ml-4">
                  <li>Please Print</li>
                  <li>
                    Sign it before tow (2) witnesses (These 2 witnesses must be of
                    sound ming, be above the age of 21 years old, and must not be
                    beneficiaries under the Will)
                  </li>
                  <li>
                    Store it in a safe location. We recommend a safe deposit box.
                  </li>
                  <li>
                    Consider notifying the Will Registry that your Will han been
                    made.
                  </li>
                  <li>
                    Inform Your executors of their role and the location of the
                    Will.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
    `;

    // const element = document.createElement("div");
    // element.innerHTML = htmlTemplate;

    // if (html2pdf) {
    //   html2pdf().from(htmlTemplate).save();
    // } else {
    //   console.error("html2pdf is not available");
    // }
    html2pdf().from(htmlTemplate).save();

    // if (typeof window !== "undefined") {
    //   // Ensure that the html2pdf function is available
    //   if (html2pdf) {
    //   } else {
    //     console.error("html2pdf is not available");
    //   }
    // } else {
    //   console.error("This code should run in a browser environment.");
    // }

    // html2pdf(htmlTemplate);
  };

  return (
    <section className="min-h-screen">
      <div>
        <Button onClick={generatePdf}>Generate PDF Buffer</Button>
      </div>
    </section>
  );
};

export default ExplorePdf;
