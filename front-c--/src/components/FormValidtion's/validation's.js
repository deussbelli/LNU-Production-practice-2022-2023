import { emailRegex } from "../constants"

export const validateEmail = (email)=>{
    return (
        emailRegex.test(email) ? true : false ||
        email && email.includes('@')
    );
}

export function validatePassword(password) {
    return (
      password &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#\$%^&*()_+]/.test(password) &&
      password.length >= 12
    );
  }

  export function validateName(name) {
    const regex = /^[A-Z][a-z]*$/;
    return regex.test(name);
}

export const validatePhoneNumber = (number) =>{
    const regex =/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
    return regex.test(number) ? true : false;
}

export function validateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    const age = today.getFullYear() - birthDate.getFullYear();
    return age >= 18;
  }