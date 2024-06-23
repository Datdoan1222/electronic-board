import React, { useState } from "react";
import "./ImageUpload.scss";
import { Input } from "antd";

const ImageUpload = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);
  const [dragging, setDragging] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        if (onImageUpload) {
          onImageUpload(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        if (onImageUpload) {
          onImageUpload(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="upload-container">
      <div
        className={`upload-box ${dragging ? "dragging" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <span className="icon">+</span>
        <Input type="file" accept="image/*" onChange={handleImageChange} />
        <div className="text">Kéo thả vào đây</div>
      </div>
      {image && (
        <img id="preview" src={image} alt="Xem trước hình ảnh của bạn" />
      )}
    </div>
  );
};

export default ImageUpload;
