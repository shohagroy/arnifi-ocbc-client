const savePdfFile = async (htmlTemplate) => {
  const html2pdf = (await import("html2pdf.js")).default;

  const options = {
    filename: `${"filename"}.pdf`,
    margin: 0,
    image: { type: "jpeg", quality: 1.9 },
    jsPDF: { unit: "mm", format: "A4" },
    pagebreak: { mode: "avoid-all" },
  };

  html2pdf()
    .from(htmlTemplate)
    .set(options)
    .toPdf()
    .get("pdf")
    .then((pdf) => {
      let totalPage = pdf.internal.getNumberOfPages();

      for (let i = 1; i <= totalPage; i++) {
        pdf.setPage(i);
        pdf.setFontSize(10);
        pdf.setFontSize(10);
        const text = "Page - " + i + " of " + totalPage;
        const textWidth =
          pdf.getStringUnitWidth(text) * pdf.internal.getFontSize();
        const textHeight = pdf.internal.getLineHeight();
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const x = pageWidth - textWidth + 20;
        const y = pageHeight - textHeight - 0;
        pdf.text(text, x, y);
      }
    })
    .save();
};

export default savePdfFile;
