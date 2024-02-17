import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { schema } from "../utils/validations";
import axios from "axios";

function Login() {
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // Assign the Yup schema resolver
  });

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://med-lyhk.onrender.com/login",
        data
      );

      reset();
      setError("");
      console.log(response?.data);
      navigate("/home");
    } catch (error) {
      // Handle validation errors
      if (error) {
        setError("Email or password is incorrect");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {error && <h6 className="error-message">{error}</h6>}
          <div className="form-group">
            <label>Username:</label>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <input
                  type="email"
                  {...field}
                  value={field.value || ""} // Spread the field props for React Hook Form
                />
              )}
            />
            {errors.username && (
              <p className="error-message">{errors.username.message}</p>
            )}
          </div>
          <div className="form-group">
            <label>Password:</label>
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <input
                  type="password"
                  {...field}
                  value={field.value || ""} // Spread the field props for React Hook Form
                />
              )}
            />
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
          </div>
          <button disabled={isSubmitting} type="submit">
            Login
          </button>
          <Link to="/register">
            <p className="signup">Don't have an account? Signup!</p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
