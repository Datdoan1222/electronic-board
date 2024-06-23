import React, { useState } from "react";
import styled from "styled-components";
import { Image } from "antd";
function Layout5(params) {
  const [keyid, setKeyid] = useState("1");
  return (
    <LayoutContainer>
      <div className="title">
        <div className="image">
          <Image />
        </div>
        <div className="name">
          <span>Lịch Trực</span>
        </div>
      </div>
      <div className="status">
        <div
          className={`item_status itemstart ${keyid === "1" ? "selected" : ""}`}
        >
          <span>T2</span>
        </div>
        <div className={`item_status ${keyid === "2" ? "selected" : ""}`}>
          <span>T3</span>
        </div>
        <div className={`item_status ${keyid === "3" ? "selected" : ""}`}>
          <span>T4</span>
        </div>
        <div className={`item_status ${keyid === "4" ? "selected" : ""}`}>
          <span>T5</span>
        </div>
        <div className={`item_status ${keyid === "5" ? "selected" : ""}`}>
          <span>T6</span>
        </div>
        <div className={`item_status ${keyid === "6" ? "selected" : ""}`}>
          <span>T7</span>
        </div>
        <div
          className={`item_status itemend ${keyid === "7" ? "selected" : ""}`}
        >
          <span>CN</span>
        </div>
      </div>
    </LayoutContainer>
  );
}
export default Layout5;
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
    ${"" /* background-color: #a1a2a2; */}
  }
  .item_status {
    background-color: #ececec;
    color: #a1a2a2;
    width: 100%;
    padding: 7px;
    display: flex;
    justify-content: center;
    border: 0.5px solid #a1a2a2;
    &.selected {
      background-color: #1d3980;
      color: #fff;
    }
  }
  .itemstart {
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }
  .itemend {
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
