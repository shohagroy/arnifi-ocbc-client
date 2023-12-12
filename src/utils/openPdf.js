async function openPDF(buffer, fileName = "will.pdf") {
  // try {
  //   const pdfDataArray = new Uint8Array(buffer);
  //   const pdfBlob = new Blob([pdfDataArray], { type: "application/pdf" });
  //   const pdfUrl = URL.createObjectURL(pdfBlob);
  //   const screenWidth = window.screen.width;
  //   const screenHeight = window.screen.height;
  //   const popup = window.open(
  //     pdfUrl,
  //     "_blank",
  //     `width=${screenWidth},height=${screenHeight}`
  //   );
  //   if (popup) {
  //     popup.focus();
  //   } else {
  //     alert("Popup blocked. Please enable popups for this website.");
  //   }
  //   URL.revokeObjectURL(pdfUrl);
  // } catch (error) {
  //   console.error("Error opening PDF:", error);
  // }

  try {
    const pdfDataArray = new Uint8Array(buffer);

    const pdfBlob = new Blob([pdfDataArray], { type: "application/pdf" });

    const downloadLink = document.createElement("a");

    downloadLink.href = URL.createObjectURL(pdfBlob);
    downloadLink.download = fileName;

    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.body.removeChild(downloadLink);

    URL.revokeObjectURL(downloadLink.href);
  } catch (error) {
    console.error("Error opening PDF:", error);
  }
}

export default openPDF;
