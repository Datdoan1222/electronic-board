import React, { useState, useEffect } from "react";
import { Button, Dropdown, Image } from "antd";
import "./PhongBan.scss";
import Flag from "../../../assets/vietnam.png";
import { CgScreen } from "react-icons/cg";
import { IoMdAddCircleOutline } from "react-icons/io";
import DropdowButton from "../../../components/Dropdown/DropdowButton";
import Tabs from "../../../components/Tabs/Tabs";
import Layout from "../../../components/ItemLeft/Layout";
import Layout1 from "../../../components/Layout/Layout1";
import Layout2 from "../../../components/Layout/Layout2";
import Layout3 from "../../../components/Layout/Layout3";
import Layout4 from "../../../components/Layout/Layout4";
import Layout5 from "../../../components/Layout/Layout5";
import Setting from "../../../components/ItemLeft/Setting";
import Marquee from "../../../components/Marquee/Marquee";
import HeaderPBan from "../../../components/Header/HeaderPBan";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import AxiosClient from "../../../services/axiosClient";
const arrayBufferToBase64 = (buffer) => {
  let binary = "";
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};
function PhongBanAd() {
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
  const handleSubmitLayout1 = async (slogan) => {
    // Thực hiện các xử lý trước khi gọi handleSubmit
    console.log("Submitting Layout1 with slogan:", slogan);

    // Gọi handleSubmit từ Layout1
    try {
      await Layout1.handleSubmit(slogan);
    } catch (error) {
      console.error("Failed to submit Layout1:", error);
    }
  };
  const [activeKey, setActiveKey] = useState("1");
  const [items, setItems] = useState([
    {
      key: "1",
      label: "Layout",
    },
    {
      key: "2",
      label: "Cài đặt",
    },
    {
      label: "Khu vực chính",
      key: "3",
    },
  ]);
  const handleChangeTab = (key) => {
    if (key === "1") {
      setActiveKey("1");
    }
    if (key === "2") {
      setActiveKey("2");
    }
    if (key === "3") {
      setActiveKey("3");
    }
  };
  const Body_leftBottom = ({ activeKey }) => {
    if (activeKey === "1") {
      return <Layout1 handleSubmit={handleSubmitLayout1} admin />;
    }
    if (activeKey === "2") {
      return <Layout2 images={images} imageList={imageList} admin />;
    }
    if (activeKey === "3") {
      return <Layout3 admin />;
    }
  };
  const Body_conten = () => {
    return (
      <div className="body">
        <div className="item_body_left">
          <div className="body_leftTop">
            {/* <Image src={`data:image/jpeg;base64,${images[imageList[0]]}`} /> */}
            <div className="left_title">
              <DropdowButton
                activeKey={activeKey}
                onButtonKey={handleChangeTab}
              />
            </div>
            <Button className="left_add" disabled>
              <IoMdAddCircleOutline size={25} />
              <span>Thêm nội dung</span>
            </Button>
          </div>
          <div className="body_leftBottom">
            <Body_leftBottom activeKey={activeKey} />
          </div>
        </div>
        <div className="item_body_right">
          <div className="body_right_tabs">
            <Tabs>
              <div label="Layout">
                <Layout
                  items={items}
                  resolution="4K"
                  onButtonClick={handleChangeTab}
                  activeKey={activeKey}
                  admin
                />
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="containpb">
      <Marquee img={Flag}>
        Trung thành, Dũng cảm - Mưu trí, Sáng tạo - Vì hạnh phúc nhân dân - Vì
        bình yên Thành phố
      </Marquee>
      <HeaderAdmin name="Phòng Ban" addName="Phòng ban" />
      <Tabs>
        <div label="Gán cứng nội dung">
          <Body_conten />
        </div>
        <div label="Danh sách phòng ban"></div>
      </Tabs>
    </div>
  );
}

export default PhongBanAd;
