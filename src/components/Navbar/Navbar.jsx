import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { CgScreen } from "react-icons/cg";
import { BsPeople } from "react-icons/bs";
import { TiDocument } from "react-icons/ti";
import { IoCalendarOutline } from "react-icons/io5";
import { Image } from "antd";
import logo from "../../assets/logo-header.png";
import { getToken, removeToken } from "../../utils/localStorage";
import "./Navbar.scss"; // CSS file for Navbar styling
import "./TabsColumn.scss";

const Navbar = () => {
  const token = getToken();
  const [activeTab, setActiveTab] = useState("home"); // Default active tab key
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    setActiveTab("home"); // Set active tab to 'home' when logo is clicked
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`/${tab}`);
  };

  const handleLogout = () => {
    removeToken();
    window.location.reload(); // Reload the page after logout
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="overlay"></div>
        <div className="logo-container" onClick={handleLogoClick}>
          <div className="logo">
            <Image width={69.06} src={logo} preview={false} />
            <span className="title title-1">Bộ công an</span>
            <span className="title title-2">Công an thành phố</span>
            <span className="title title-2">Hồ Chí Minh</span>
          </div>
        </div>
        <div className="admin">
          <span>Quyền truy cập</span>
          <span style={{ fontSize: 16, color: "white" }}>Admin</span>
        </div>
        <div className="tabs">
          <a
            className={`tabscolumn ${activeTab === "home" ? "active" : ""}`}
            onClick={() => handleTabClick("home")}
          >
            <CgScreen className="tabscolumn-icon" />
            <span>Home</span>
          </a>
          <a
            className={`tabscolumn ${activeTab === "phongban" ? "active" : ""}`}
            onClick={() => handleTabClick("phongban")}
          >
            <TiDocument className="tabscolumn-icon" />
            <span>PhongBan</span>
          </a>
          <a
            className={`tabscolumn ${activeTab === "thuvien" ? "active" : ""}`}
            onClick={() => handleTabClick("thuvien")}
          >
            <BsPeople className="tabscolumn-icon" />
            <span>ThuVien</span>
          </a>

          {!token && (
            <a
              className={`tabscolumn ${activeTab === "lich" ? "active" : ""}`}
              onClick={() => handleTabClick("lich")}
            >
              <IoCalendarOutline className="tabscolumn-icon" />
              <span>Lich</span>
            </a>
          )}
        </div>

        <div className="user" onClick={handleLogout}>
          <div className="avatar">
            <span style={{ color: "white" }}>T</span>
          </div>
          <div className="user-info">
            <span className="user-name">Triệu</span>
            <span className="user-email">trieu.nguyen@gmail.com</span>
          </div>
        </div>
      </div>
      {/* <Outlet /> */}
    </div>
  );
};

export default Navbar;
