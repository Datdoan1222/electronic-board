import React, { useEffect, useState } from "react";
import { Input, Button, message } from "antd";
import styled from "styled-components";
import AxiosClient from "../../services/axiosClient";

function Layout1({ admin }) {
  const [slogan, setSlogan] = useState("");
  const [loading, setLoading] = useState(true);
  const baseURL = "http://localhost:3030";
  const updateLayout = "/departments/update-layout/";
  const handleSubmit = async () => {
    const postData = {
      layout: 1,
      slogan: slogan,
      file: slogan,
    };

    try {
      const response = await AxiosClient.post(baseURL + updateLayout, postData);
      setLoading(false);
      message.success("Data submitted successfully!");
    } catch (error) {
      setLoading(false);
      message.error("Failed to submit data!");
    }
  };

  return (
    <LayoutContainer admin={admin}>
      <div className={`name ${admin ? "layout1_admin" : ""}`}>
        <span>Tên phòng ban sẽ được hiển thị</span>
        <Input placeholder="Nhập tên phòng ban sẽ được hiển thị" disabled />
      </div>
      <div className={`slogan ${admin ? "" : "layout1_admin"}`}>
        <span>Slogan sẽ được hiển thị</span>
        <StyledInput
          className="input_slogan"
          placeholder={
            admin
              ? "Nhập slogan sẽ hiển thị"
              : "Xây dựng lực lượng Công an Thành Phố Hồ Chí Minh thật sự trong sạch, vững mạnh, chính quy, tinh nhuệ, hiện đại"
          }
          value={slogan}
          onChange={(e) => setSlogan(e.target.value)}
        />
        <span style={{ fontSize: 12, fontStyle: "italic" }}>
          Những thông tin trên sẽ luôn được hiển thị trên màn hình
        </span>
      </div>
      <Button className="btn-slogan" type="primary" onClick={handleSubmit}>
        Lưu thông tin
      </Button>
    </LayoutContainer>
  );
}

export default Layout1;

const LayoutContainer = styled.div`
  padding: 20px;

  .name,
  .slogan {
    flex: 1;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    padding: 10px 0;
    margin-left: 10px;
  }
  .layout1_admin {
    color: #a1a2a2;
  }
  input {
    height: 36px;
    border-radius: 10px;
    border: 0.5px solid #a1a2a2;
    padding: 10px;
    margin: 10px 0;
  }
  .btn-slogan {
    background-color: red !important;
    color: white;
  }
  .btn-slogan:hover {
    opacity: 0.7;
  }
`;

const StyledInput = styled(Input)`
  white-space: pre-wrap;
  overflow-wrap: break-word;
  height: ${(props) => (props.admin ? "auto" : "60px")};
`;
