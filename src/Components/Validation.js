const validation = (values) => {
  let errors = {};

  if (!values.username) {
    errors.username = "UserName Required...";
  } else if (values.username.length < 5) {
    errors.username = "userName must be more than 5 charcters...";
  }
  if (!values.password) {
    errors.password = "Password Required...";
  } else if (values.password.length < 8) {
    errors.password = "Password must be more than 8 charcters...";
  }
  return errors;
};
export default validation;
