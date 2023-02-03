import React, { useRef } from "react";
import SunEditor from "suneditor-react";
import SunEditorCore from "suneditor/src/lib/core";
import "assets/css/suneditor.min.css";
import QuanLyAnhService from "services/QuanLyAnhService";
import { IResponseMessage } from "common/Models";

interface Props {
  key?: any;
  value: any;
  type?: string;
  size?: any;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  onChange: Function;
  rows?: any;
}

const CCkEditor = (props: Props) => {
  const editor = useRef<SunEditorCore>();

  // The sunEditor parameter will be set to the core suneditor instance when this function is called
   const getSunEditorInstance = (sunEditor: SunEditorCore) => {
      editor.current = sunEditor;
  };
  const handelChange = (content: any) => {
    editor.current.setContents(content)
    props.onChange(content);
  };
  const uploadToServer = async (files:any) => {
    let res:IResponseMessage = await QuanLyAnhService.UploadAnhEdtior(files);
    return res.Data;
  }
  const handleImageUploadBefore = async (files: any, info: any, uploadHandler: any) => {
    const src = await uploadToServer(files);
    const response = {
      "result": [
        {
          "url": src,
          "name": files[0].name,
          "size": files[0].size
        },
    ]}
    uploadHandler(response);
  }
  return (
    <>
      <SunEditor
        getSunEditorInstance={getSunEditorInstance}
        defaultValue={props.value}
        onChange={(content: any) => {
          handelChange(content);
        }}
        onImageUploadBefore={handleImageUploadBefore}
        setOptions={{
          imageGalleryUrl: process.env.Image_Gallery_Url,
          buttonList: [
            ["undo", "redo"],
            ["font", "fontSize", "formatBlock"],
            ["paragraphStyle", "blockquote"],
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript",
            ],
            ["fontColor", "hiliteColor", "textStyle"],
            ["removeFormat"],
            "/", // Line break
            ["outdent", "indent"],
            ["align", "horizontalRule", "list", "lineHeight"],
            ["table", "link", "image", "video", "audio"],
            ["imageGallery"],
            ["fullScreen", "showBlocks", "codeView"],
            ["preview", "print"],
            ["save", "template"],
          ],
          defaultTag: "",
          minHeight: "500px",
          showPathLabel: false,
        }}
      />
    </>
  );
};

export default CCkEditor;
