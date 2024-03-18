import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { validatePassword, validateEmail } from "../FormValidtion's/validation's";
import toast, { Toaster } from "react-hot-toast";
import loginStyles from "../../styles/AuthStyles/LogIn.module.css";
import { PORT } from "../constants";


function LogIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      if (validateEmail(value)) {
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: "" });
      } else if (value === "") {
        setFormErrors({ ...formErrors, [name]: "Email cannot be empty" });
      } else {
        setFormErrors({ ...formErrors, [name]: "Invalid email format" });
      }
    }

    if (name === "password") {
      setFormData({ ...formData, [name]: value });
      if (validatePassword(value)) {
        setFormErrors({ ...formErrors, [name]: "" });
      } else if (value === "") {
        setFormErrors({ ...formErrors, [name]: "Password cannot be empty" });
      } else {
        setFormErrors({ ...formErrors, [name]: "Password must be strong" });
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("You have to fill in all fields!");
      return;
    }

    try {
      const response = await axios.post(PORT, formData); 

      if (response.status === 200) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/");
      } else {
        console.log("HTTP Status:", response.status);
        console.log("Status Text:", response.statusText);
        toast.error("Login failed, please check your credentials.");
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Network error occurred.");
    }
  };

  return (
    <>
      <Toaster />
        <div className={loginStyles.formContainer}>
            <div className={loginStyles.formContainerBackrgound}>
                <form className={loginStyles.loginForm} onSubmit={handleSubmit}>
                <label>
                    Login:
                    <input
                    type="email"
                    name="email"
                    className={loginStyles.input}
                    placeholder="my-email@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    />
                    <div className={loginStyles.errorMassage}>{formErrors.email}</div>
                </label>
                <label>
                    Password:
                    <input
                    type="password"
                    name="password"
                    className={loginStyles.input}
                    placeholder="***************"
                    value={formData.password}
                    onChange={handleChange}
                    />
                    <div className={loginStyles.errorMassage}>{formErrors.password}</div>
                </label>
                <button type="submit" className={loginStyles.button}>Log in</button>
                <Link className={loginStyles.linkToSignUp} to="/sign-up">I dont have account</Link>
                </form>
            </div>
        </div>
    </>
  );
}

export default LogIn