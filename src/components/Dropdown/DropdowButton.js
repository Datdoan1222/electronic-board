import React, { useState, useEffect } from "react";
import { Dropdown, message, Space, Menu } from "antd";
import { IoIosArrowDown } from "react-icons/io";
import "./DropdowButton.scss";
function DropdowButton({ onButtonKey, activeKey }) {
  const [currentLabel, setCurrentLabel] = useState("");
  const items = [
    {
      label: "Tiêu đề",
      key: "1",
    },
    {
      label: "Khu vực phụ bên trái",
      key: "2",
    },
    {
      label: "Khu vực chính",
      key: "3",
    },
  ];
  const onClick = ({ key }) => {
    const selectedItem = items.find((item) => item.key === key);
    if (selectedItem) {
      setCurrentLabel(selectedItem.label);
      onButtonKey(selectedItem.key);
    }
  };
  useEffect(() => {
    const selectedItem = items.find((item) => item.key === activeKey);
    if (selectedItem) {
      setCurrentLabel(selectedItem.label);
    }
  }, [activeKey]);

  return (
    <Dropdown
      overlay={
        <Menu onClick={onClick}>
          {items.map((item) => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu>
      }
    >
      <div className="dropdownss" onClick={(e) => e.preventDefault()}>
        <div className="dropdown_label" style={{ cursor: "pointer" }}>
          {currentLabel}
        </div>
        <div className="dropdown_icon">
          <IoIosArrowDown />
        </div>
      </div>
    </Dropdown>
  );
}

export default DropdowButton;
