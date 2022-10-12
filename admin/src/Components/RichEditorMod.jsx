import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

const RichEditor = ({ setContent, content }) => {
  console.log(content);
  function handleBlur(event, editorContents) {
    setContent(editorContents);
  }

  return (
    <section
      style={{
        marginBottom: "50px",
      }}
    >
      <SunEditor
        defaultValue={content}
        height="300px"
        onBlur={handleBlur}
        setOptions={{
          buttonList: [
            ["undo", "redo", "fontSize", "formatBlock"],
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript",
              "removeFormat",
            ],

            [
              "fontColor",
              "hiliteColor",
              "outdent",
              "indent",
              "align",
              "horizontalRule",
              "list",
              "table",
            ],
            ["link", "image", "video", "fullScreen", "showBlocks", "codeView"],
          ],
        }}
      />
    </section>
  );
};

export default RichEditor;
