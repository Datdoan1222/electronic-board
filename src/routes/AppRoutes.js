import React, { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoutesAdmin from "./ProtectedRoutesAdmin";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";
import { getToken } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";
import { render } from "react-dom";

const AppRoutes = () => {
  console.log("AppRoutes re-render");
  const { render } = useSelector((state) => state.cons);
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const token = getToken();
  let Routes = PublicRoutes;
  if (token) {
    Routes = ProtectedRoutesAdmin;
    // if (user?.role == "ADMIsN") {
    //   Routes = ProtectedRoutesAdmin;
    //   console.log(user);
    // }
  }

  useEffect(() => {
    if (window.performance) {
      if (performance.navigation.type === 1) {
        navigate("/");
      }
    }
  }, [user]);

  return (
    !loading && (
      <React.Fragment>
        <Routes />
      </React.Fragment>
    )
  );
};

export default AppRoutes;
