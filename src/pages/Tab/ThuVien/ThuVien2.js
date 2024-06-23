import React, { useState, useEffect } from "react";
import AxiosClient from "../../../services/axiosClient";
import Marquee from "../../../components/Marquee/Marquee";
import HeaderSearch from "../../../components/Header/HeaderAdmin";
import Flag from "../../../assets/vietnam.png";
import Tabs from "../../../components/Tabs/Tabs";
import "./ThuVien.scss";
import DSBanner from "./DSBanner";
import DSBaiViet from "./DSBaiViet";
import DSVideo from "./DSVideo";
import DSHinhAnh from "./DSHinhAnh";
import Overlay from "./Overlay";

const arrayBufferToBase64 = (buffer) => {
  let binary = "";
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

function ThuVien2() {
  const [images, setImages] = useState({});
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const baseURL = "http://localhost:3030";
  const imagesEndpoint = "/files/images";
  const downloadEndpoint = "/files/download/";

  useEffect(() => {
    const fetchImageList = async () => {
      try {
        const response = await AxiosClient.get(baseURL + imagesEndpoint);
        setImageList(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching image list:", error);
        setLoading(false);
      }
    };

    fetchImageList();
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const promises = imageList.map(async (imageName) => {
          const response = await AxiosClient.get(
            baseURL + downloadEndpoint + imageName,
            { responseType: "arraybuffer" }
          );
          const base64Data = arrayBufferToBase64(response.data);
          setImages((prevState) => ({
            ...prevState,
            [imageName]: base64Data,
          }));
        });

        await Promise.all(promises);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    if (imageList.length > 0) {
      fetchImages();
    }
  }, [imageList]);

  const handleAddButtonClick = () => {
    setIsOverlayVisible(true);
  };

  const handleOverlayClose = () => {
    setIsOverlayVisible(false);
  };

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const getAddName = () => {
    switch (activeTab) {
      case 0:
        return "Banner";
      case 1:
        return "Bài viết";
      case 2:
        return "Video";
      case 3:
        return "Hình ảnh";
      default:
        return "Thư Viện";
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="thuvien_contain">
      <Marquee img={Flag}>
        Trung thành, Dũng cảm - Mưu trí, Sáng tạo - Vì hạnh phúc nhân dân - Vì
        bình yên Thành phố
      </Marquee>
      <HeaderSearch
        name="Thư Viện"
        addName={getAddName()}
        onBtnAdd={handleAddButtonClick}
      />
      <Tabs onChange={handleTabChange}>
        <div label="Banner">
          <DSBanner imageList={imageList} images={images} />
        </div>
        <div className="tabs_item" label="Bài viết">
          <DSBaiViet imageList={imageList} images={images} />
        </div>
        <div className="tabs_item" label="Video">
          <DSVideo imageList={imageList} images={images} />
        </div>
        <div className="tabs_item" label="Hình ảnh">
          <DSHinhAnh imageList={imageList} images={images} />
        </div>
      </Tabs>
      <Overlay
        isVisible={isOverlayVisible}
        onClose={handleOverlayClose}
        title={getAddName()}
      />
    </div>
  );
}

export default ThuVien2;
