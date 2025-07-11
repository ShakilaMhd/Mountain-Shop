import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { ShopContext } from "../../context/ShopContext";
import { toast } from "react-toastify";
import { backendUrl } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [currentState, setCurrentState] = useState("ورود");

  const { token, setToken } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (currentState === "ثبت نام") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });

        if (response.data.success) {
          setToken(response.data.token);
          toast.success(response.data.message);
          localStorage.setItem('token', response.data.token)
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          toast.success(response.data.message);
          localStorage.setItem('token', response.data.token)
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  console.log(token)
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="form-div">
      <form onSubmit={onSubmitHandler} className="auth-form">
        <div className="form-header">
          <p className="form-title">{currentState}</p>
        </div>
        {currentState === "ورود" ? null : (
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="form-input"
            placeholder="اسم"
            required
          />
        )}
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="form-input"
          placeholder="ایمیل"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="form-input"
          placeholder="پسورد"
          required
        />
        <div className="form-footer">
          <p className="forgot-pswd">فراموشی رمز</p>

          {currentState === "ورود" ? (
            <p
              className="toggle-auth-state"
              onClick={() => setCurrentState("ثبت نام")}
            >
              ثبت نام
            </p>
          ) : (
            <p
              className="toggle-auth-state"
              onClick={() => setCurrentState("ورود")}
            >
              اینجا وارد شوید
            </p>
          )}
        </div>
        <button className="form-btn">
          {currentState === "ورود" ? "وارد شوید" : "ثبت نام"}
        </button>
      </form>
    </div>
  );
};

export default Login;
