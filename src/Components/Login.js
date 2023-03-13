import React, { useState, useEffect } from "react";
import "./LoginStyle.css";
import validation from "./Validation";
import { useNavigate } from "react-router-dom";
import FinanceApi from "./FinanceApi";
const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  console.log(errors);
  function handlChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validation(values));
  }
  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      values.username !== "" &&
      values.password !== ""
    ) {
      navigate("/finance");
    }
  }, [errors]);
  return (
    <>
      <div className="container">
        <div className="Login_form" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="content">
            <label>User Name :</label>

            <input
              type="text"
              placeholder="UserName..."
              name="username"
              value={values.username}
              onChange={handlChange}
            />
            {errors.username && <p className="Errors">{errors.username}</p>}
          </div>

          <div className="content">
            <label>Password :</label>
            <input
              type="text"
              placeholder="password..."
              value={values.password}
              name="password"
              onChange={handlChange}
            />
            {errors.password && <p className="Errors">{errors.password}</p>}
          </div>
          <div className="content">
            <button onClick={handleSubmit}>Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
