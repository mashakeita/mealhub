import React from "react";
import validate from "../Modal/validateInfo";
import useForm from "../Modal/useForm";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormInput from "./CustomInput";
import { signin, signup } from "../../actions/auth/auth";
import "../Modal/Modal.scss";

const SignupForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const formInitialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(formInitialState);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    setShowPassword(false);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-content-right">
      <p className="text-center mb-4">
        <faLock />
      </p>
      <h2 className="text-center mb-5">{isSignUp ? "Sign Up" : "Sign In"}</h2>
      <div className="form" onSubmit={submitForm}>
        {isSignUp && (
          <CustomInput
            type="text"
            name="name"
            id="name"
            label="Name"
            handleChange={handleChange}
          />
        )}
        <CustomInput
          type="email"
          name="email"
          id="email"
          label="Email"
          handleChange={handleChange}
        />
        <CustomInput
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          label="Password"
          handleChange={handleChange}
          handleShowPassword={handleShowPassword}
        />
        {isSignUp && (
          <CustomInput
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            label="Repeat Password"
            handleChange={handleChange}
          />
        )}
        <div className="text-center mt-3">
          <Button
            buttonLabel={isSignUp ? "Sign Up" : "Sign In"}
            type="submit"
            tooltip={false}
            tooltipText=""
          />
        </div>
        <div className="my-3 d-flex justify-content-end">
          <button onClick={switchMode} className="btn btn-lg sign-in-up-btn">
            {isSignUp
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
