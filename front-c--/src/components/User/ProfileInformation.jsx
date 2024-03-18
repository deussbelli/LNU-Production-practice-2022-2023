import React from "react";
import profilesettingStyles from "../../styles/Profile.module.css";

function ProfileInformation({ data, handleEditClick, formErrors }) {
  return (
    <div className={profilesettingStyles.formContainerBackrgound_fifth}>
      <div className={profilesettingStyles.profileItemFirstname}>
        <strong className={profilesettingStyles.labelItemFirstname}>First name</strong>
        <input 
          type = "text"
          placeholder = "Enter First Name"
          className={profilesettingStyles.valuefirstName}
          value = {data.firstName}
        />
      </div>

      <div className={profilesettingStyles.profileItemLastname}>
        <strong className={profilesettingStyles.labelItemLastname}>Last name</strong>
        <input
         type = "text"
         placeholder = "Enter Last Name"
         className={profilesettingStyles.valuelastName}
         value = {data.lastName}
         />
      </div>

      <div className={profilesettingStyles.profileItemEmail}>
        <strong className={profilesettingStyles.labelItemEmail}>E-mail</strong>
        <input
          type = "text"
          placeholder = "Enter new e-mail"
          className={profilesettingStyles.valueemail}
          value = {data.email}
          />
      </div>

      <div className={profilesettingStyles.profileItemnewPassword}>
        <strong className={profilesettingStyles.labelItemNewPassword}>New Password</strong>
        <input
          type="password"
          placeholder = "Enter new password"
          className={profilesettingStyles.valuenewPassword}
          value={data.password}
        />
      </div>

      <div className={profilesettingStyles.profileItemPhoneNumber}>
        <strong className={profilesettingStyles.labelItemPhoneNumber}>Phone Number</strong>
        <input
          type="text"
          placeholder = "Enter new phone number" 
          className={profilesettingStyles.valuephoneNumber}
          value = {data.phoneNumber}
        />
      </div>

      <div className={profilesettingStyles.profileItemAddress}>
        <strong className={profilesettingStyles.labelItemAddress}>Address</strong>
        <input
          type="text"
          placeholder = "Enter new address" 
          className={profilesettingStyles.valueaddress}
          value = {data.address}
        />
      </div>

      <div className={profilesettingStyles.profileItemDateOfBirth}>
        <strong className={profilesettingStyles.labelItemDateOfBirth}>Date Of Birth</strong>
        <input
          type="text"
          placeholder = "Enter new date of birthday" 
          className={profilesettingStyles.valuedateOfBirth}
          value = {data.dateOfBirth}
        />
      </div>

      <button onClick={handleEditClick} className={profilesettingStyles.editButton}>
        Edit
      </button>
    </div>
  );
}

export default ProfileInformation;
