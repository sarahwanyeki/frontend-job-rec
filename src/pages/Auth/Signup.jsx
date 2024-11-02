import "../../assets/css/style.css";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "../../Utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import signupValidator from "../../validators/signupValidator";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  role: "",
};

const initialFormError = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  role: "",
};
const SignUp = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formError, setFormError] = useState(initialFormError);
  const [loading, setLoading] = useState();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = signupValidator({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      role: formData.role,
    });
    if (
      errors.name ||
      errors.name ||
      errors.phone ||
      errors.password ||
      errors.confirmPassword ||
      errors.role
    ) {
      setFormError(errors);
    } else {
      try {
        setLoading(true);

        // api request
        const requestBody = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          role: formData.role,
        };
        const response = await axios.post("users/signup", requestBody);
        const data = response.data;

        toast.success(data.message, {
          position: "top-right",
          autoClose: true,
        });
        setFormData(initialFormData);
        setFormError(initialFormError);
        setLoading(false);
        navigate("/login");
      } catch (error) {
        setLoading(false);
        setFormError(initialFormError);
        const response = error.response;
        const data = response.data;
        toast.error(data.message, {
          position: "top-right",
          autoClose: true,
        });
      }
    }
  };
  return (
    <>
      <section>
        <div className="container-fluid custom-container">
          <div className="row justify-content-center">
            <div className="col-md-11 ">
              <form className="form" onSubmit={handleSubmit}>
                <h2>Sign Up Form</h2>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {formError.name && (
                    <p className="error"> {formError.name} </p>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    aria-describedby="email"
                    value={formData.email}
                    onChange={handleChange}
                  />{" "}
                  {formError.email && (
                    <p className="error"> {formError.email} </p>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {formError.phone && (
                    <p className="error"> {formError.phone} </p>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="••••••••••"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {formError.password && (
                    <p className="error"> {formError.password} </p>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    placeholder="••••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  {formError.confirmPassword && (
                    <p className="error"> {formError.confirmPassword} </p>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="3"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                  />
                  {formError.role && (
                    <p className="error"> {formError.role} </p>
                  )}
                </div>

                <div className="form-group">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value={`${loading ? "Saving..." : "Signup"}`}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SignUp;
