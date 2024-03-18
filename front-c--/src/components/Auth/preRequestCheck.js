export function preRequestFormChecker(userData, formErrors) {
    const requiredFields = ["firstName", "lastName", "email", "password", "newPassword", "confirmPassword", "birthday"];
    const newFormErrors = { ...formErrors };

    for (const field of requiredFields) {
        if (!userData[field]) {
            newFormErrors[field] = `Missing ${field}ㅤ`;
        }
    }

    return newFormErrors;
}

