import "../../assets/css/style.css";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../Utils/axiosInstance";
import loginValidator from "../../validators/loginValidator";
import { useNavigate } from "react-router-dom";
const initialFormData = {
  email: "",
  password: "",
  role: "",
};

const initialFormError = {
  email: "",
  password: "",
  role: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formError, setFormError] = useState(initialFormError);
  const [loading, setLoading] = useState();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = loginValidator({
      email: formData.email,
      password: formData.password,
      role: formData.role,
    });

    if (errors.email || errors.password || errors.role) {
      setFormError(errors);
    } else {
      try {
        setLoading(true);

        // API request

        const response = await axios.post("users/signin", formData);
        const data = response.data;

        window.localStorage.setItem("jobData", JSON.stringify(data.data));

        toast.success(data.message, {
          position: "top-right",
          autoClose: true,
        });

        setFormData(initialFormData);
        setFormError(initialFormError);
        setLoading(false);
        navigate("/");
      } catch (error) {
        setLoading(false);
        setFormError(initialFormError);

        const response = error.response;
        const data =
          response && response.data
            ? response.data
            : { message: "An error occurred. Please try again." };

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
                <h2>Login Form</h2>

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
                  />
                  {formError.email && (
                    <p className="error"> {formError.email} </p>
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
                    value={`${loading ? "Loging..." : "Login"}`}
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

export default Login;
