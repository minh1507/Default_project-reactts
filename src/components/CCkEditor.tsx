import React, { useRef } from "react";
import SunEditor from "suneditor-react";
import "assets/css/suneditor.min.css";

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
  const handelChange = (content: any) => {
    props.onChange(content);
  };
  const handleImageUploadBefore = (files: any, info: any, uploadHandler: any) => {
    // uploadHandler is a function
    console.log(files, info)
  }
  const handleImageUpload = (targetImgElement: any, index: any, state: any, imageInfo: any, remainingFilesCount: any) => {
    console.log(targetImgElement, index, state, imageInfo, remainingFilesCount)
  }
  return (
    <>
      <SunEditor
        setContents={props.value}
        onChange={(content: any) => {
          handelChange(content);
        }}
        onImageUploadBefore={handleImageUploadBefore}
        onImageUpload={handleImageUpload}
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
          defaultTag: "div",
          minHeight: "300px",
          showPathLabel: false,
        }}
      />
    </>
  );
};

export default CCkEditor;
