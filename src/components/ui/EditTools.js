import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

function EditTools({ value, setValue }) {
  var toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ["image", "link"],
    ["clean"],

    // Additional tools you want to add
    [{ indent: "-1" }, { indent: "+1" }], // Indentation
    [{ size: ["small", false, "large", "huge"] }], // Text size
    ["blockquote"], // Blockquote
    ["code-block"], // Code block
  ];

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      className={"min-h-[500px] border "}
      style={{ minHeight: "800px", width: "100%", border: "1px solid #ccc" }}
      modules={{ toolbar: toolbarOptions }}
      placeholder={"Type Attractions Description..."}
    />
  );
}

export default EditTools;
