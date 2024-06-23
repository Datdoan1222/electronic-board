import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import ThuVien from "../pages/Tab/ThuVien/ThuVien2";
import { useState } from "react";
import PhongBanAd from "../pages/Tab/PhongBan/PhongBanAd";
import PhongBanUser from "../pages/Tab/PhongBan/PhongBanUser";
import Lich from "../pages/Tab/Lich/Lich";

const ProtectedRoutes = () => {
  const [permission, setPermission] = useState("admin");
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/phongban" element={<PhongBanUser />} />
        <Route path="/thuvien" element={<ThuVien />} />
        {/* <Route path="/lich" element={<Lich />} /> */}
      </Route>
    </Routes>
  );
};

export default ProtectedRoutes;
