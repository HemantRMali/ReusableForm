export const isValidEmail = (email) => {
  const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = expression.test(String(email).toLowerCase());
  return {isValid: isValid, message: isValid ? '' : 'Enter valid email'};
};
export const isValidMobileNumber = (mobile) => {
  const expression = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
  const isValid = expression.test(String(mobile).toLowerCase());
  return {
    isValid: isValid,
    message: isValid ? '' : 'Enter valid mobile number',
  };
};
export const isValidName = ({name, nameType}) => {
  const isValid = name.trim().length > 0;
  return {
    isValid: isValid,
    message: isValid ? '' : `Enter valid ${nameType}`,
  };
};
export const isValidPassword = (password) => {
  const isValid = password.trim().length > 0;
  return {
    isValid: isValid,
    message: isValid ? '' : 'Enter valid password',
  };
};
