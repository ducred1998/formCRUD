export const emailValidator = (email) => {
  if (!email) {
    return "Email is required";
  } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
    return "Incorrect email format";
  }
  return "";
};
export const phoneValidator = (phone) => {
  if (!phone) {
    return "Phone is required!";
  } else if (phone.length !== 10) {
    return "Phone must have 10 characters";
  }
  return "";
};
export const textAlphabetValidator = (text) => {
  if (!text) {
    return "This field is require";
  } else if (!new RegExp("^[a-zA-Z ]+$").test(text)) {
    return "Incorrect Text Format: only a-z, A-Z, and white space";
  }
  return "";
};
