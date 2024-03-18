import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { validatePassword, validateName, validateEmail } from "../FormValidtion's/validation's";
import toast, { Toaster } from "react-hot-toast";
import authStyles from "../../styles/AuthStyles/Auth.module.css";
import { PORT } from "../constants";
import { preRequestFormChecker } from "./preRequestCheck";


function SignUp() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthday: "",
  });

  const [formData, setFormData] = useState({
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userPassword: "",
    userBirthday: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "ㅤ",
    lastName: "ㅤ",
    email: "ㅤ",
    password: "ㅤ",
    confirmPassword: "ㅤ",
    birthday: "ㅤ",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "firstName" || name === "lastName") {
      setFormData({ ...formData, [name]: value });
      if (validateName(value)) {
        setUserData({ ...userData, [name]: value })
        setFormErrors({ ...formErrors, [name]: "ㅤ" })
      }
      else if (value == "") {
        setFormErrors({ ...formErrors, [name]: "Name cannot be emptyㅤ" })
      }
      else setFormErrors({ ...formErrors, [name]: "Name must be longer than 2 lettersㅤ" })
    }

    if (name === "email") {
      if (validateEmail(value)) {
        setUserData({ ...userData, [name]: value })
        setFormErrors({ ...formErrors, [name]: "ㅤ" })
      }
      else if (value == "") {
        setFormErrors({ ...formErrors, [name]: "Email cannot be emptyㅤ" })
      }
      else { setFormErrors({ ...formErrors, [name]: "Wrong type of emailㅤ" }) }
      setFormData({ ...formData, [name]: value })
    }

    if (name === "password") {
      setFormData({ ...formData, [name]: value });
      if (validatePassword(value)) {
        setUserData({ ...userData, [name]: value })
        setFormErrors({ ...formErrors, [name]: "ㅤ" })
      }
      else if (value == "") {
        setFormErrors({ ...formErrors, [name]: "Password cannot be emptyㅤ" })
      }
      else setFormErrors({ ...formErrors, [name]: "Password must be strongㅤ" })
    }

    if (name === "confirmPassword") {
      setFormData({ ...formData, [name]: value });
      console.log(value)
      if (formData.password != value) {
        setFormErrors({ ...formErrors, [name]: "Password mismatchㅤ" })
      }
      else setFormErrors({ ...formErrors, [name]: "ㅤ" })
    }

    if (name === "birthday") {
      setFormData({ ...userData, [name]: value })
      if (value == "") {
        setFormErrors({ ...formErrors, [name]: "Birthday cannot be emptyㅤ" })
      }
      else setUserData({ ...userData, [name]: value })
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newFormErrors = preRequestFormChecker(userData, formErrors);
    setFormErrors(newFormErrors);

    if (!userData.firstName || !userData.lastName || !userData.email || !userData.password || !userData.birthday) {
      toast.error("You have to set all inputs!")
      return
    }

    try {
      const response = await axios.post(PORT, userData);
      localStorage.setItem('isLoggedIn', 'true');
      toast.success("Welcome")
      return navigate('/');
    }
    catch (error) {
      toast.error("Server not response")
    }
  };

  return (
    <>
      <Toaster />
      <div className={authStyles.formContainer}>
        <div className={authStyles.formContainerBackrgound}>
          <form className={authStyles.authForm} onSubmit={handleSubmit}>
            <div></div>
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                className={authStyles.input}
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
              />
              <div className={authStyles.errorMassage}>{formErrors.firstName}</div>
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                className={authStyles.input}
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
              />
              <div className={authStyles.errorMassage}>{formErrors.lastName}</div>
            </label>
            <label>
              Email address:
              <input
                type="email"
                name="email"
                className={authStyles.input}
                placeholder="my-email@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
              <div className={authStyles.errorMassage}>{formErrors.email}</div>
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                className={authStyles.input}
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
              />
              <div className={authStyles.errorMassage}>{formErrors.password}</div>
            </label>
            <label>
              Confirm password:
              <input
                type="password"
                name="confirmPassword"
                className={authStyles.input}
                placeholder="********"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <div className={authStyles.errorMassage}>{formErrors.confirmPassword}</div>
            </label>
            <label>
              Birthday:
              <input
                type="date"
                name="birthday"
                className={authStyles.input}
                value={formData.birthday}
                onChange={handleChange}
              />
              <div className={authStyles.errorMassage}>{formErrors.birthday}</div>
            </label>
            <button type="submit" className={authStyles.button}>Submit</button>
            <Link className={authStyles.linkToLogIn} to="/log-in">Already registered</Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp