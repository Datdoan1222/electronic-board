import React, { useState, useEffect } from "react";
import "./Layout.scss";
import { Image } from "antd";
import layoutad5 from "../../assets/a0b529f59988359f7a506ff5b9574da5.png";
import layoutad4 from "../../assets/layout4.png";

export default function Layout({
  resolution,
  onButtonClick,
  activeKey,
  items,
  admin,
}) {
  const [keyid, setKeyid] = useState(activeKey);
  useEffect(() => {
    setKeyid(activeKey);
  }, [activeKey]);

  const handleClick = (key) => {
    setKeyid(key);
    onButtonClick(key);
  };
  const Layoutadmin = ({ id }) => {
    return (
      <div className={`layout layout${id} layout_admin`}>
        {id === 4 ? (
          <Image preview={false} src={layoutad4} width={20} height="100%" />
        ) : (
          <Image preview={false} src={layoutad5} />
        )}
      </div>
    );
  };
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "0 20px ",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="resolution">
        <div className="resolution_right">
          <span style={{ fontSize: 10, color: "#a1a2a2" }}>Độ phân giải</span>
          <span>{resolution}</span>
        </div>
        <div className="resolution_left">
          <button className="btn_resolution">Thay đổi</button>
        </div>
      </div>
      <div className="layout_contain">
        <div className="layout_item">
          <div className="item1">
            <div
              className={`layout layout1 ${keyid === "1" ? "selected" : ""}`}
              onClick={() => handleClick("1")}
            >
              1
            </div>
          </div>
          <div className="item2">
            <div
              className={`layout layoutit2 layout2 ${
                keyid === "2" ? "selected" : ""
              }`}
              onClick={() => handleClick("2")}
            >
              2
            </div>
            <div
              className={`layout layoutit2 layout3 ${
                keyid === "3" ? "selected" : ""
              }`}
              onClick={() => handleClick("3")}
            >
              3
            </div>
            {!admin ? (
              <div
                className={`layout layoutit2  layout4 ${
                  keyid === "4" ? "selected" : ""
                }`}
                onClick={() => handleClick("4")}
              >
                4
              </div>
            ) : (
              <Layoutadmin id={4} />
            )}
          </div>
          <div className="item3">
            {!admin ? (
              <div
                className={`layout layout5 ${keyid === "5" ? "selected" : ""}`}
                onClick={() => handleClick("5")}
              >
                5
              </div>
            ) : (
              <Layoutadmin id={5} />
            )}
          </div>
        </div>
      </div>
      <div className="area">
        <div className="area_title">Khu vực</div>
        <div className="contain">
          <div className="items item1">
            {items.map((item) => (
              <div
                key={item.key}
                className={`area_item ${keyid === item.key ? "selected" : ""}`}
                onClick={() => handleClick(item.key)}
              >
                <div
                  className={`area_number ${
                    keyid === item.key ? "selected" : ""
                  }`}
                >
                  <span> {item.key}</span>
                </div>
                <div className="area_label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
