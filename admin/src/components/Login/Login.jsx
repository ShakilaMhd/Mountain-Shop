import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { backendUrl } from "../../App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const OnSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      console.log(response);
      // console.log(email,password )

      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="admin-panel-container">
        <div className="admin-panel-box">
          <h1 className="login-title">پنل ادمین</h1>
          <form onSubmit={OnSubmitHandler}>
            <div className="form-group">
              <p className="form-label">آدرس ایمیل</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                className="form-input"
                placeholder="ایمیل خود را وارد کنید"
                required
              />
            </div>
            <div className="form-group">
              <p className="form-label">پسوورد</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                className="form-input"
                placeholder="پسوورد خود را وارد کنید"
                required
              />
            </div>
            <button className="form-button" type="submit">
              ورود
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
