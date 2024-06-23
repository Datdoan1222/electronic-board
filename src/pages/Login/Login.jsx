import React from "react";
import "./Login.scss";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../../services/authServices";
import { removeToken, setToken } from "../../utils/localStorage";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { getUserInfor } from "../../store/auth/authThunk";
import Notiflix from "notiflix";

function Login() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: async (data) => {
      Notiflix.Notify.success("Đăng nhập thành công !!!", {
        timeout: 1000,
        fontFamily: "Montserrat",
        fontSize: "16px",
      });
      console.log(data);
      await setToken(data.data.access_token);
      dispatch(getUserInfor());
      setTimeout(() => removeToken(), 36 * 100 * 1000);
    },
    onError: (error) => {
      Notiflix.Notify.failure(
        "Đăng nhập thất bại!!!\t Không có quyền truy cập",
        {
          timeout: 1000,
          fontFamily: "Montserrat",
          fontSize: "16px",
        }
      );
    },
  });

  const onSubmit = (data) => {
    const loginData = {
      username: "username",
      password: "password",
    };

    mutation.mutate(data);
    console.log(loginData);
  };
  return (
    <div className="container-login">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="header">Đăng Nhập</div>
        <div className="input-group">
          <div className="input-field">
            <span>Tên đăng nhập</span>
            <input
              type="text"
              placeholder="Nhập tên đăng nhập"
              {...register("username", { required: true })}
            />
            {errors.username?.type === "required" && (
              <p className="error-message">
                Tên đăng nhập không được để trống !!!
              </p>
            )}
          </div>
          <div className="input-field">
            <span>Mật khẩu</span>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password?.type === "required" && (
              <p className="error-message">Mật khẩu không được để trống !!!</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="error-message">Mật khẩu quá ngắn !!!</p>
            )}
          </div>
        </div>
        <div className="button-login">
          <Button>Đăng nhập</Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
