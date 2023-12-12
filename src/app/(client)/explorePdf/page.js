"use client";
import React, { useEffect, useState } from "react";
import { Button, Grid, Spin, Typography, message } from "antd";
import dynamic from "next/dynamic";
import WillPdfDocument from "@/components/PDFGenerator/WillPdfDocument";
import { useCreatePdfMutation } from "@/redux/features/explorePdf/explorePdfApi";
import openPDF from "@/utils/openPdf";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  { ssr: false }
);

const { useBreakpoint } = Grid;

const ExplorePdf = () => {
  const [createPdf, { isLoading: pdfLoading, isError: pdfError }] =
    useCreatePdfMutation();

  const [isLoading, setIsLoading] = useState(false);
  const screen = useBreakpoint();

  useEffect(() => {
    message.success("Thank you for your booking!");
    setIsLoading(false); // Simulating data loading completion
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  const data = {
    personalName: "Shohag Roy",
  };

  console.log(pdfLoading, pdfError);

  const createPdfHandelar = async () => {
    const result = await createPdf(data).unwrap();
    console.log(result?.data?.data?.data);
    openPDF(result?.data?.data?.data);
  };

  return (
    <section className="min-h-screen">
      <div className="container">
        <div
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
        ></div>

        <PDFDownloadLink document={<WillPdfDocument />} fileName="receipt.pdf">
          {({ blob, url, loading, error }) =>
            loading ? (
              "Loading document..."
            ) : (
              <Button loading={isLoading} type="primary">
                Download Receipt
              </Button>
            )
          }
        </PDFDownloadLink>
      </div>

      <div>
        <Button onClick={createPdfHandelar}>Generate PDF Buffer</Button>
      </div>
    </section>
  );
};

export default ExplorePdf;
