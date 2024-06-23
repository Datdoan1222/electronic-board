import React, { useState, useEffect } from "react";
import AxiosClient from "../../services/axiosClient";
import styled from "styled-components";
import { Image } from "antd";

function Layout2() {
  return (
    <LayoutContainer>
      <div className="title">
        <div className="image-container">
          <Image
            className="image"
            // src={`data:image/jpeg;base64,${images["DT0.jpg"]}`}
          />
        </div>
        <div className="name">
          <span>Tiêu đề khung</span>
        </div>
      </div>
      <div className="status">
        <div className="perDay">Mỗi ngày</div>
        <div className="fixed">Cố định</div>
      </div>
    </LayoutContainer>
  );
}
export default Layout2;
const LayoutContainer = styled.div`
  padding: 20px;
  fontsize: 16px;
  .title {
    border-bottom: 0.5px solid #a1a2a2;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: #000;
  }
  .image {
    margin: 10px 10px 10px 0;
    border: 0.5px solid #a1a2a2;
    border-radius: 15px;
    width: 100px;
    height: 100px;
  }
  .status {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
    border: 0.5px solid #a1a2a2;
    border-radius: 10px;
    margin: 10px 0;
    padding: 8px;
    color: #fff;
  }
  .perDay {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 7px;
    background-color: #1d3980;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }
  .fixed {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 7px;
    background-color: #e61d23;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
  }
  input {
    height: 36px;
    border-radius: 10px;
    border: 0.5px solid #a1a2a2;
    padding: 10px;
    margin: 10px 0;
  }
`;
