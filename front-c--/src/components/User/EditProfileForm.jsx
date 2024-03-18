
import React from "react";
import profilesettingStyles from "../../styles/Profile.module.css";

function EditProfileForm({ formData, handleSaveClick, handleInputChange, formErrors }) {
  return (
    <div className={profilesettingStyles.formContainerBackrgound_fifth}>
      <form className={profilesettingStyles.form} onSubmit={handleSaveClick}>
        <label className={profilesettingStyles.labelFirstname}>First name</label>
        <input
          className={profilesettingStyles.inputFirstname}
          type="text"
          name="firstName"
          placeholder="Enter First Name"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <div className={profilesettingStyles.errorMassage}>{formErrors.firstName}</div>
        <br></br>
        <label className={profilesettingStyles.labelLastname}>Last name</label>
        <input
          className={profilesettingStyles.inputLastname}
          type="text"
          name="lastName"
          placeholder="Enter Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <div className={profilesettingStyles.errorMassage}>{formErrors.lastName}</div>
        <br></br>
        <label className={profilesettingStyles.labelEmail}>E-mail</label>
        <input
          className={profilesettingStyles.inputEmail}
          type="text"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <br></br>
        <label className={profilesettingStyles.labelNewPassword}>New Password</label>
        <input
          className={profilesettingStyles.inputNewPassword}
          type="password"
          name="newPassword"
          placeholder="********"
          value={formData.newPassword}
          onChange={handleInputChange}
        />
        <div className={profilesettingStyles.errorMassage}>{formErrors.newPassword}</div>
        <br></br>
        <label className={profilesettingStyles.labelPhoneNumber}>Phone Number</label>
        <input
          className={profilesettingStyles.inputPhoneNumber}
          type="number"
          name="phoneNumber"
          placeholder="Enter Phone Number"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
        <div className={profilesettingStyles.errorMassage}>{formErrors.phoneNumber}</div>
        <br></br>
        <label className={profilesettingStyles.labelAddress}>Address</label>
        <input
          className={profilesettingStyles.inputAddress}
          type="text"
          name="address"
          placeholder="Enter Address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <br></br>
        <label className={profilesettingStyles.labelDateOfBirth}>Date Of Birth</label>
        <input
          className={profilesettingStyles.inputDateOfBirth}
          type="date"
          name="dateOfBirth"
          placeholder="Enter date of birth"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
        />
        <div className={profilesettingStyles.errorMassage}>{formErrors.birthday}</div>
        <br></br>
        <button type="save" onClick={handleSaveClick}>
          Save
        </button>
      </form>
    </div>
  );
}

export default EditProfileForm;