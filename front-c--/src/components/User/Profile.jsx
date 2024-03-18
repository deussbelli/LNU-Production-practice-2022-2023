import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import profilesettingStyles from "../../styles/Profile.module.css";
import toast, { Toaster } from "react-hot-toast";
import Header from "../Global/Header.jsx";
import image from "../../images/Line 132.png";
import avatar from "../../images/avatar.svg";
import wallet from "../../images/wallet.svg";
import history from "../../images/history.svg";
import basket from "../../images/basket.svg";
import discounts from "../../images/sale.svg";
import comments from "../../images/comments.svg";
import support from "../../images/support.svg";
import exit from "../../images/logout.png";
import { validateEmail, validatePassword, validateName, validateAge, } from "../FormValidtion's/validation's.js";
import EditProfileForm from "./EditProfileForm.jsx";
import ProfileInformation from "./ProfileInformation.jsx";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    newPassword: '',
    email: '',
    phoneNumber: '',
    address: '',
    dateOfBirth: '',
    photo: null,
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    password: '',
    newPassword: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    photo: '',
  });

  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    axios.get('http://localhost:8000/api/profile')
      .then((response) => {
        const data = response.data;
        setFormData({
          ...formData,
          firstName: data.name,
          lastName: data.lastname,
          email: data.email,
          newPassword: data.password,
          phoneNumber: data.phoneNumber,
          address: data.address,
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (isDirty) {
      const { email, password, newPassword, firstName, lastName, dateOfBirth } = formData;

      if (!validateEmail(email)) {
        toast.error('Email must contain "@"');
        setFormErrors({ ...formErrors, email: 'Email must contain "@"' });
      }

      if (!validatePassword(newPassword)) {
        toast.error(
          'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, 1 special character, and be at least 12 characters long'
        );

        if (newPassword === password) {
          setFormErrors({ ...formErrors, newPassword: 'New password should not match the old password' });
        }

        if (newPassword === '') {
          setFormErrors({ ...formErrors, newPassword: 'New password dont must be empty' });
        }
      }

      if (!validateName(firstName)) {
        toast.error('First name should start with an uppercase letter and consist of only English letters');
        setFormErrors({
          ...formErrors,
          firstName: 'First name should start with an uppercase letter and consist of only English letters',
        });
      }

      if (!validateName(lastName)) {
        toast.error('Last name should start with an uppercase letter and consist of only English letters');
        setFormErrors({
          ...formErrors,
          lastName: 'Last name should start with an uppercase letter and consist of only English letters',
        });
      }

      if (!validateAge(dateOfBirth)) {
        toast.error('You must be at least 18 years old');
        setFormErrors({ ...formErrors, dateOfBirth: 'You must be at least 18 years old' });
      }

      const data = {
        name: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
        password: formData.newPassword,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
      };

      axios.post('http://localhost:8000/api/profile', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log('Save:', response);
          setIsDirty(false);
          setIsEditing(false);
          fetchUserData();
        })
        .catch((error) => {
          console.error('ERROR:', error);
          toast.error('Failed to save profile information.');
        });
    } else {
      setIsEditing(false);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({ ...formErrors, [name]: '' });
    setIsDirty(true);
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData({
          ...formData,
          photo: event.target.result,
        });
        setIsDirty(true);
      };
      reader.readAsDataURL(file);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();

    event.preventDefault();

    const newFormErrors = preRequestFormChecker(formData, formErrors);
    setFormErrors(newFormErrors);

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.newPassword || !formData.birthday) {
      toast.error("You have to set all inputs!")
      return
    }

    if (formData.newPassword !== '') {
      const updatedUser = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        password: formData.newPassword,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
        dateOfBirth: formData.dateOfBirth,
        photo: formData.photo,
      };

      axios.post('http://localhost:8000/api/profile', updatedUser, {
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => {
          console.log('Success:', response);
          setIsDirty(false);
        })
        .catch((err) => {
          console.error('Error:', err);
          toast.error('Failed to save profile information.');
        });

      setFormData({
        ...formData,
        newPassword: '',
      });
    } else {
      const updatedUser = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        password: formData.password,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
        dateOfBirth: formData.dateOfBirth,
        photo: formData.photo,
      };

      axios.post('http://localhost:8000/api/profile', updatedUser, {
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => {
          console.log('Success:', response);
          setIsDirty(false);
        })
        .catch((err) => {
          console.error('Error:', err);
          toast.error('Failed to save profile information.');
        });

      setFormData({
        ...formData,
        newPassword: '',
      });
    }
  }


  

  return (
    <>
      <Toaster />
      <Header></Header>
      <div className={profilesettingStyles.formContainerBackrgound_first}>
        <label>
          <img src={formData.photo || avatar} className={profilesettingStyles.avatar} alt="Avatar" />
          <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleAvatarChange} />
        </label>
        <span className={profilesettingStyles.valuefirstName_first}>{formData.firstName}</span>
        <span className={profilesettingStyles.valuelastName_first}>{formData.lastName}</span>
        <span className={profilesettingStyles.valueemail_first}>{formData.email}</span>
        <Link to="/verification" className={profilesettingStyles.linkToConfirm}>                    
          confirm
        </Link> 
        <img src={image} alt="line" className={profilesettingStyles.additionalImage_one} />
        <Link to="/my-wallet" className={profilesettingStyles.linkToWallet}>
          <img src={wallet} alt="wallet" className={profilesettingStyles.wallet} />
          My wallet
        </Link>
        <Link to="/my-basket" className={profilesettingStyles.linkToBasket}>
          <img src={basket} alt="basket" className={profilesettingStyles.basket} />
          My basket
        </Link>
        <Link to="/history" className={profilesettingStyles.linkToHistory}>
          <img src={history} alt="history" className={profilesettingStyles.history} />
          Order history
        </Link>
        <Link to="/discounts-and-bonuses" className={profilesettingStyles.linkToDiscounts}>
          <img src={discounts} alt="discounts" className={profilesettingStyles.discounts} />
          Discounts and bonuses
        </Link>
        <img src={image} alt="line" className={profilesettingStyles.additionalImage_one} />
        <Link to="/my-comments" className={profilesettingStyles.linktToComments}>
          <img src={comments} alt="comments" className={profilesettingStyles.comments} />
          My reviews
        </Link>
        <Link to="/support" className={profilesettingStyles.linkToSupport}>
          <img src={support} alt="support" className={profilesettingStyles.support} />
          Support
        </Link>
        <Link to="/log-in" className={profilesettingStyles.linkToExit}>
          <img src={exit} alt="exit" className={profilesettingStyles.exit} />
          Log out
        </Link>
      </div>

      <div className={profilesettingStyles.formContainerBackrgound_second}>
        <div className={profilesettingStyles.mainText}>SETTINGS</div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          {!isEditing ? (
            <ProfileInformation data={formData} handleEditClick={handleEditClick} formErrors={formErrors} />
          ) : (
            <EditProfileForm
              formData={formData}
              handleSaveClick={handleSaveClick}
              handleInputChange={handleInputChange}
              formErrors={formErrors}
            />
          )}
        </form>
      </div>
    </>
  );
}

export default Profile;

