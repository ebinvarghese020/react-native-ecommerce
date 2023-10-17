/* eslint-disable prettier/prettier */
export function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

export function validatePhoneNumber(phoneNumber) {
  return phoneNumber.length >= 8;
}

export function validatePassword(password) {
  return password.length >= 8;
}
