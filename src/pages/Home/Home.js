import React from "react";
import "./Home.scss";
import { Navbar } from "../../components/index";
import { Outlet } from "react-router-dom";
import HeaderAdmin from "../../components/Header/HeaderAdmin";
import Marquee from "../../components/Marquee/Marquee";
import Flag from "../../assets/vietnam.png";

function Home() {
  return (
    <div className="contain">
      <div className="home">
        <Navbar />
        <div className="content">
          <Outlet />
          {/* <Marquee img={Flag}>
            Trung thành, Dũng cảm - Mưu trí, Sáng tạo - Vì hạnh phúc nhân dân -
            Vì bình yên Thành phố
          </Marquee>
          <HeaderAdmin name="Màn hình" /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
