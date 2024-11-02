const isEmail = (email) =>
  String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

const loginValidator = ({ email, password, role }) => {
  const errors = {
    email: "",
    password: "",
    role: "",
  };

  if (!email) {
    errors.email = "Email is required";
  } else if (!isEmail(email)) {
    errors.email = "Invalid email";
  }

  if (!password) {
    errors.password = "Password is required";
  }

  if (!role) {
    errors.role = "Role is required";
  }

  return errors;
};

export default loginValidator;
