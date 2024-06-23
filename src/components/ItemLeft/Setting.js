import { Button, Image, Input } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import coverPhoto from "../../assets/cover_photo_Q1.jpg";
import "./Setting.scss";

function Setting({ namePB }) {
  return (
    <div className="setting_contain">
      <div className="cover_photo">
        <div className="cover_photo_label label">
          <span>Ảnh bìa phòng ban</span>
        </div>
        <div className="cover_photo_image">
          <Image
            src={coverPhoto}
            width="100%"
            height="100%"
            style={{ borderRadius: 20 }}
          />
        </div>
        <div className="cover_photo_button">
          <Button className="button_photo" size="large">
            Thay đổi ảnh bìa
          </Button>
        </div>
      </div>
      <div className="name">
        <div className="name_label label">
          <span>Tên phòng ban</span>
        </div>
        <div className="name_content">{namePB}</div>
      </div>
      <div className="time">
        <div className="time_label label">
          <span>Thời gian chờ của nội dung</span>
        </div>
        <div className="time_content">
          <Input className="item_time1" size="large" defaultValue="0.5" />
          <div className="item_time2">giây</div>
        </div>
      </div>
    </div>
  );
}
export default Setting;
