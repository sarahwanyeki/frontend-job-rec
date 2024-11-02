const isEmail = (email) =>
  String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

const signupValidator = ({
  name,
  email,
  phone,
  password,
  confirmPassword,
  role,
}) => {
  const errors = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "",
  };

  if (!name) {
    errors.name = "Name is required";
  }

  if (!email) {
    errors.email = "Email is required";
  } else if (!isEmail(email)) {
    errors.email = "Invalid email";
  }
  if (!phone) {
    errors.name = "Phone is required";
  }

  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 6) {
    errors.password = "Password is 6 char long";
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = "Password doesn't match";
  }
  if (!role) {
    errors.role = "Role is required";
  }

  return errors;
};

export default signupValidator;
