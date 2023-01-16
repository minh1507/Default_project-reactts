import React, { useRef } from 'react'
import { CKEditor } from 'ckeditor4-react';

interface Props {
    key?: any,
    value: any,
    type?: string,
    size?: any,
    placeholder?: string,
    readOnly?: boolean,
    disabled?: boolean,
    autoFocus?: boolean,
    onChange: Function,
    rows?: any
}

const CCkEditor2 = (props: Props) => { 
  const editorRef = useRef(null);
  const handelChange = (e:any, editor:any) => {

  }
  const handelBlur = (e:any) => {
    let content = editorRef.current.getContent();
    props.onChange(content)
  } 
    return (
      <>
        <CKEditor initData="<p>This is an example CKEditor 4 WYSIWYG editor instance.</p>" />
      </>
    )
}

export default CCkEditor2;