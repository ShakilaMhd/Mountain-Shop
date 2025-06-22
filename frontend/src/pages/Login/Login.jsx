import React, { useState } from "react";
import './Login.css'

const Login = () => {
  const [currentState, setCurrentState] = useState("ورود");

  return (
    <div>
      <form className="auth-form">
        <div className="form-header">
          <p className="form-title">{currentState}</p>
        </div>
        {currentState === "ورود" ? null : (
          <input
            type="text"
            className="form-input"
            placeholder="اسم"
            required
          />
        )}
        <input
          type="email"
          className="form-input"
          placeholder="ایمیل"
          required
        />
        <input
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
          {currentState === "ورود" ? "Sign In" : "ثبت نام"}
        </button>
      </form>
    </div>
  );
};

export default Login;
