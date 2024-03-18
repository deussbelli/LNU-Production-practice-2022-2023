import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profilesettingStyles from "../../styles/Profile.module.css";
import toast, { Toaster } from "react-hot-toast";
import Header from "../Global/Header";
import image from "../../images/Line 132.png";
import avatar from "../../images/avatar.svg";
import wallet from "../../images/wallet.svg";
import history from "../../images/history.svg";
import basket from "../../images/basket.svg";
import discounts from "../../images/sale.svg";
import comments from "../../images/comments.svg";
import support from "../../images/support.svg";
import exit from "../../images/logout.png";

function Profile(){
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Doe');
    const [newPassword, setNewPassword] = useState('');
    const [email, setEmail] = useState('my-email@example.com');
    const [phoneNumber, setPhoneNumber] = useState('+380 909 435 678');
    const [address, setAddress] = useState('123 Main Street');
    const [dateOfBirth, setDateOfBirth] = useState('1990-01-01');
    const [photo, setAvatar] = useState(null);


    const handleAvatarChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setAvatar(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    };
    

    
    function fetchUserData() {
        fetch('http://localhost:5000/api/profile', {
            method: 'GET',
            headers: {

            },
        })
            .then((res) => res.json())
            .then((data) => {
                setFirstName(data.name);
                setLastName(data.lastname);
                setEmail(data.email);
                setNewPassword(data.newPassword);
                setPhoneNumber(data.phoneNumber);
                setAddress(data.address);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const handleEditClick = () => {
        setIsEditing(true);
    };

   
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    newPassword: '',
    phoneNumber: '',
    birthday: '',
    photo: '',
  });

  const handleSaveClick = () => {
    const data = {
      name: firstName,
      lastname: lastName,
      email: email,
      password: newPassword,
      phoneNumber: phoneNumber,
      address: address,
    };

    if (email && !email.includes('@')) {
      toast.error('Email must contain "@"');
      return;
    }

    if (
      !newPassword ||
      !/[A-Z]/.test(newPassword) ||
      !/[a-z]/.test(newPassword) ||
      !/\d/.test(newPassword) ||
      !/[!@#\$%^&*()_+]/.test(newPassword) ||
      newPassword.length < 12
    ) {
      toast.error(
        'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, 1 special character, and be at least 12 characters long'
      );
      return;
    }

    if (!/^[A-Z][a-z]*$/.test(firstName)) {
      toast.error('First name should start with an uppercase letter and consist of only English letters');
      return;
    }

    if (!/^[A-Z][a-z]*$/.test(lastName)) {
      toast.error('Last name should start with an uppercase letter and consist of only English letters');
      return;
    }

    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    const age = today.getFullYear() - birthDate.getFullYear();
    if (age < 18) {
      toast.error('You must be at least 18 years old');
      return;
    }

    fetch('http://localhost:5000/api/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log('Save:', response);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error('ERROR:', error);
        toast.error('Failed to save profile information.');
      });
  };



    function handleSubmit(e){
        e.preventDefault();
        let data={ name:firstName, 
                  lastname:lastName,
                  email:email, 
                  phoneNumber:phoneNumber,
                  adress: address };

        fetch('http://localhost:5000/api/profile', { method:'POST', headers:{'Content-Type':'application/json' }, body:JSON.stringify(data) })
            .then(res=> res.json())
            .catch((err)=>{console.log(err)})
            .finally(() => console.log('done'))
    };


    return (
        <>
          <Toaster/>
            <Header></Header>
            <div className={profilesettingStyles.formContainerBackrgound_first}>
                    <label>
                    <img src={photo || avatar} className={profilesettingStyles.avatar} alt="Avatar" />
                    <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleAvatarChange} />
                    </label>
                    <span className={profilesettingStyles.valuefirstName_first}>{firstName}</span>
                    <span className={profilesettingStyles.valuelastName_first}>{lastName}</span>
                    <span className={profilesettingStyles.valueemail_first}>{email}</span>
                    <Link to="/confirm" className={profilesettingStyles.linkToConfirm}>confirm</Link> 
                    <img src={image} alt="line" className={profilesettingStyles.additionalImage_one} />
                    <Link to="/my-wallet" className={profilesettingStyles.linkToWallet}> 
                            <img src={wallet} alt="wallet" className={profilesettingStyles.wallet} /> 
                            My wallet</Link>
                    <Link to="/my-basket" className={profilesettingStyles.linkToBasket}>
                            <img src={basket} alt="basket" className={profilesettingStyles.basket} />
                            My basket</Link>
                    <Link to="/history" className={profilesettingStyles.linkToHistory}>
                            <img src={history} alt="history" className={profilesettingStyles.history} />
                            Order history</Link>
                    <Link to="/discounts-and-bonuded" className={profilesettingStyles.linkToDiscounts}>
                            <img src={discounts} alt="discounts" className={profilesettingStyles.discounts} />
                            Discounts and bonuses</Link>
                            <img src={image} alt="line" className={profilesettingStyles.additionalImage_one} />
                    <Link to="/my-comments" className={profilesettingStyles.linktToComments}>
                            <img src={comments} alt="comments" className={profilesettingStyles.comments} />
                            My reviews</Link>
                    <Link to="/support" className={profilesettingStyles.linkToSupport}>
                            <img src={support} alt="support" className={profilesettingStyles.support} />
                            Support</Link>
                    <Link to="/log-in" className={profilesettingStyles.linkToExit}>
                            <img src={exit} alt="exit" className={profilesettingStyles.exit} /> 
                            Log out</Link> 
            </div>

                <div className={profilesettingStyles.formContainerBackrgound_second}>
                <div className={profilesettingStyles.mainText}>SETTINGS</div>
            </div>
            <div>
                {!isEditing ? (
                    <div className={profilesettingStyles.formContainerBackrgound_fifth}>
                        <div className={profilesettingStyles.profileItemFirstname}>
                        <strong className={profilesettingStyles.labelItemFirstname}>First name</strong>
                        <span className={profilesettingStyles.valuefirstName}>{firstName}</span>
                        </div>

                        <div className={profilesettingStyles.profileItemLastname}>
                        <strong className={profilesettingStyles.labelItemLastname}>Last name</strong>    
                        <span className={profilesettingStyles.valuelastName}>{email}</span>                     
                        </div>

                        <div className={profilesettingStyles.profileItemEmail}>
                        <strong className={profilesettingStyles.labelItemEmail}>E-mail</strong>
                        <span className={profilesettingStyles.valueemail}>{email}</span>                        
                        </div>

                        <div className={profilesettingStyles.profileItemnewPassword}>
                        <strong className={profilesettingStyles.labelItemNewPassword}>New Password</strong>
                        <input type="password" className={profilesettingStyles.valuenewPassword} value={newPassword} />
                        </div>

                        <div className={profilesettingStyles.profileItemPhoneNumber}>
                        <strong className={profilesettingStyles.labelItemPhoneNumber}>Phone Number</strong>
                        <span className={profilesettingStyles.valuephoneNumber}>{phoneNumber}</span>                       
                        </div>

                        <div className={profilesettingStyles.profileItemAddress}>
                        <strong className={profilesettingStyles.labelItemAddress}>Address</strong>
                        <span className={profilesettingStyles.valueaddress}>{address}</span>                        
                        </div>

                        <div className={profilesettingStyles.profileItemDateOfBirth}>
                        <strong className={profilesettingStyles.labelItemDateOfBirth}>Date Of Birth</strong>
                        <span className={profilesettingStyles.valuedateOfBirth}>{dateOfBirth}</span>
                        </div>

                        <button onClick={handleEditClick} className={profilesettingStyles.editButton}>Edit</button>
                                 
                    </div>
                ) : (
                    <div className={profilesettingStyles.formContainerBackrgound_fifth}>
                    <form className={profilesettingStyles.form} onSubmit={handleSaveClick}>
                        <label className={profilesettingStyles.labelFirstname}>First name</label>
                        <input
                        className={profilesettingStyles.inputFirstname}
                        type="text"
                        placeholder="Enter First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        />
                        <div className={profilesettingStyles.errorMassage}>{formErrors.firstName}</div>
                        <br></br>
                        <label className={profilesettingStyles.labelLastname}>Last name</label>
                        <input
                        className={profilesettingStyles.inputLastname}
                        type="text"
                        placeholder="Enter Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        />
                       <div className={profilesettingStyles.errorMassage}>{formErrors.lastName}</div>                        
                        <br></br>
                        <label className={profilesettingStyles.labelEmail}>E-mail</label>
                        <input
                        className={profilesettingStyles.inputEmail}
                        type="text"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <br></br>
                        <label className={profilesettingStyles.labelNewPassword}>New Password</label>
                        <input
                        className={profilesettingStyles.inputNewPassword}
                        type="password"
                        placeholder="********"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <div className={profilesettingStyles.errorMassage}>{formErrors.password}</div>
                        <br></br>
                        <label className={profilesettingStyles.labelPhoneNumber}>Phone Number</label>
                        <input
                        className={profilesettingStyles.inputPhoneNumber}
                        type="number"
                        placeholder="Enter Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <div className={profilesettingStyles.errorMassage}>{formErrors.phoneNumber}</div>
                        <br></br>
                        <label className={profilesettingStyles.labelAddress}>Address</label>
                        <input
                        className={profilesettingStyles.inputAddress}
                        type="text"
                        placeholder="Enter Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        />
                        <br></br>
                        <label className={profilesettingStyles.labelDateOfBirth}>Date Of Birth</label>
                        <input
                        className={profilesettingStyles.inputDateOfBirth}
                        type="date"
                        placeholder="Enter date of birth"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        />
                        <div className={profilesettingStyles.errorMassage}>{formErrors.birthday}</div>
                        <br></br>
                        <button type="save" onClick={handleSaveClick}>Save</button>
                    </form>
                    </div>
                )}
                </div>
        </>
    );
}



export default Profile






/*

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';
import Header from "./Header";
import image from "../images/Line 132.png";
import avatar from "../images/avatar.svg";
import wallet from "../images/wallet.svg";
import history from "../images/history.svg";
import basket from "../images/basket.svg";
import discounts from "../images/sale.svg";
import comments from "../images/comments.svg";
import support from "../images/support.svg";
import exit from "../images/logout.png";

const EditUserProfile = ({ user }) => {
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    password: '',
    newPassword: '',
    email: user.email,
    phoneNumber: user.phoneNumber,
    address: user.address,
    dateOfBirth: user.dateOfBirth,
    photo: null,
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validateField = (name, value) => {
    const errors = {};
  
    if (name === "firstName" || name === "lastName") {
      const nameRegex = /^[A-Za-z][A-Za-z\s]*$/;
      if (!nameRegex.test(value) || value.length >= 100) {
        errors[name] = `${name === "firstName" ? "First" : "Last"} name should start with an uppercase letter and consist of only English letters`;
      }
    } else if (name === "dateOfBirth") {
      const currentDate = new Date();
      const birthDate = new Date(value);
      const age = currentDate.getFullYear() - birthDate.getFullYear();
  
      if (age < 18) {
        errors[name] = "You must be at least 18 years old";
      }
    } else if (name === "password" || name === "newPassword") {
      if (value && (value === formData.newPassword || value.length < 12)) {
        errors[name] = "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, 1 special character, and be at least 12 characters long";
      }
    } else if (name === "email" && value.indexOf('@') === -1) {
      errors[name] = "Email must contain '@'";
    }
  
    return errors;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors({});
  
   const errors = {};

   errors.firstName = validateField("firstName", formData.firstName); 
   errors.lastName = validateField("lastName", formData.lastName); 
   errors.dateOfBirth = validateField("dateOfBirth", formData.dateOfBirth); 
   errors.password = validateField("password", formData.password); 
   errors.newPassword = validateField("newPassword", formData.newPassword); 
   errors.email = validateField("email", formData.email); 
   errors.phoneNumber = validateField("phoneNumber", formData.phoneNumber); 
   errors.address = validateField("address", formData.address);
  
    if (Object.values(errors).some(fieldErrors => Object.keys(fieldErrors).length > 0)) {
      setFormErrors(errors);
      return;
    }
  
    // Отправка данных на сервер
    try {
      const response = await axios.put('/api/user/edit', formData);
      if (response.status === 200) {
        toast.success('Information updated');
      }
    } catch (error) {
      toast.error('Failed to save profile information');
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        {formErrors.firstName && <div>{formErrors.firstName}</div>}

        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        {formErrors.lastName && <div>{formErrors.lastName}</div>}

        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          placeholder="Date Of Birth"
        />
        {formErrors.dateOfBirth && <div>{formErrors.dateOfBirth}</div>}

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {formErrors.password && <div>{formErrors.password}</div>}

        <input
          type="password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          placeholder="New password"
        />
        {formErrors.newPassword && <div>{formErrors.newPassword}</div>}

        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {formErrors.email && <div>{formErrors.email}</div>}

        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone number"
        />

        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Addres"
        />

        <input type="file" name="photo" onChange={handleChange} />

        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
};

export default EditUserProfile;
*/