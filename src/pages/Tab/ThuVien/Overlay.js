import React from "react";
import "./Overlay.scss";
import { Button, Input } from "antd";
import { IoClose } from "react-icons/io5";
import ImageUpload from "./ImageUpload";

const Overlay = ({ isVisible, onClose, title }) => {
  const handleOverlayClick = (event) => {
    if (event.target.className === "overlay") {
      onClose();
    }
  };

  if (!isVisible) {
    return null;
  }
  const handleImageUpload = (imageData) => {
    console.log("Image uploaded:", imageData);
  };
  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="overlay-container">
        <div className="overlay-title">
          <span>Thêm {title}</span>
          <Button size={40} className="close-button" onClick={onClose}>
            <IoClose />
          </Button>
        </div>
        <div className="overlay-body">
          <div className="overlay-content">
            <div className="overlay-label">Tiêu đề {title}</div>
            <div className="overlay-cont">
              <span></span>
              <Input className="overlay-input" />
            </div>
          </div>
          <div className="overlay-content">
            <div className="overlay-label">Mô tả {title}</div>
            <div className="overlay-cont">
              <span></span>
              <Input className="overlay-input" />
            </div>
          </div>
          <div className="overlay-content add_img">
            <div className="overlay-label">Thêm ảnh {title}</div>
            <div className="overlay-cont">
              <span></span>
              {/* <Input type="file" className="overlay-input" /> */}
              <ImageUpload onImageUpload={handleImageUpload} />
            </div>
          </div>
        </div>
        <div className="btn_save">
          <Button>Lưu</Button>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
