import React, { useState } from "react";
import axios from "axios";
import Message from "../components/Message";
import { StyledFileUpload, StyledImage } from "../style/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

export const FileUpload = () => {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("Choose file");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });
      setMessage("File Uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  return (
    <StyledFileUpload>
      <FontAwesomeIcon icon={faCloudUploadAlt} size="4x" />
      <h1>File storage service</h1>
      <form onSubmit={onSubmit}>
        {message ? <Message msg={message} /> : null}
        <div>
          <input type="file" onChange={onChange} />
          <label htmlFor="">{fileName}</label>
        </div>

        <button onSubmit={onSubmit}>Upload</button>
      </form>
      {uploadedFile ? (
        <StyledImage>
          <h3>{uploadedFile.fileName}</h3>
          <img src={uploadedFile.filePath} alt="" />
        </StyledImage>
      ) : null}
    </StyledFileUpload>
  );
};

export default FileUpload;
