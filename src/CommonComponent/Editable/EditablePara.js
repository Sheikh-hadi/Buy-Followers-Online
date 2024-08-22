import React from "react";
import { Typography } from "antd";
import handlePUTData from "./../../Hooks/usePutHandleHook";

const EditablePara = ({ text }) => {
  const { content, path, title } = text;
  console.log("intro in editable heading: ", content, path);

  const handleTitleChange = (value, title, path) => {
    console.log("path: ", path);
    console.log("value: ", value);
    console.log("type: ", title);
    // Directly call handlePUTData to update data on change
    handlePUTData(text?.path, { [title]: value });
  };

  return (
    <Typography.Paragraph
      editable={{
        onChange: (value) => handleTitleChange(value, title, path),
      }}
      level={1}
      style={{ margin: 0 }}
    >
      {content}
    </Typography.Paragraph>
  );
};

export default EditablePara;
