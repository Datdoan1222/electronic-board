import React, { useState } from "react";
import { Dropdown, Image } from "antd";
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

function PhongBanUser() {
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
    {
      label: "Khu vực phụ bên phải",
      key: "4",
    },
    {
      label: "Lịch",
      key: "5",
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
    if (key === "4") {
      setActiveKey("4");
    }
    if (key === "5") {
      setActiveKey("5");
    }
  };
  const Body_leftBottom = ({ activeKey }) => {
    if (activeKey === "1") {
      return <Layout1 />;
    }
    if (activeKey === "2") {
      return <Layout2 />;
    }
    if (activeKey === "3") {
      return <Layout3 />;
    }
    if (activeKey === "4") {
      return <Layout4 />;
    }
    if (activeKey === "5") {
      return <Layout5 />;
    }
  };
  return (
    <div className="containpb">
      <Marquee img={Flag}>
        Trung thành, Dũng cảm - Mưu trí, Sáng tạo - Vì hạnh phúc nhân dân - Vì
        bình yên Thành phố
      </Marquee>
      <HeaderPBan
        pbName="Công an quận 1"
        timeEnd="18-03-2024, 04:56 PM"
        userName="Triệu"
        onBtnPreview={() => console.log("Preview button clicked")}
        onBtnPost={() => console.log("Post button clicked")}
      />

      <div className="body">
        <div className="item_body_left">
          <div className="body_leftTop">
            <div className="left_title">
              <DropdowButton
                activeKey={activeKey}
                onButtonKey={handleChangeTab}
              />
            </div>
            <div className="left_add">
              <IoMdAddCircleOutline size={25} />
              <span>Thêm nội dung</span>
            </div>
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
                />
              </div>
              <div label="Cài đặt">
                <Setting namePB="Công an quận 1" />
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhongBanUser;
