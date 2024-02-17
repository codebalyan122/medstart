import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "../styles/Login.css";
import { registrationSchema } from "../utils/validations";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationSchema), // Assign the Yup schema resolver
  });

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const response = await axios.post(
        "https://med-lyhk.onrender.com/register",
        data
      );
      console.log(response?.data);

      navigate("/");
    } catch (error) {
      // Handle validation errors
      if (error) {
        setError("User Already Exists");
      }
    } finally {
      setIsSubmitting(false); // Reset submission status to false
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {error && <h6 className="error-message">{error}</h6>}
          <div className="form-group">
            <label>Company name:</label>
            <Controller
              control={control}
              name="companyName"
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  value={field.value || ""}
                  placeholder="company name" // Spread the field props for React Hook Form
                />
              )}
            />
            {errors.companyName && (
              <p className="error-message">{errors.companyName.message}</p>
            )}
          </div>

          <div className="form-group">
            <label>Email:</label>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <input
                  type="email"
                  {...field}
                  value={field.value || ""}
                  placeholder="email" // Spread the field props for React Hook Form
                />
              )}
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>

          <div className="form-group">
            <label>Phone number:</label>
            <Controller
              control={control}
              name="number"
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  value={field.value || ""}
                  placeholder="Phone number" // Spread the field props for React Hook Form
                />
              )}
            />
            {errors.number && (
              <p className="error-message">{errors.number.message}</p>
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

          <div className="form-group">
            <label>confirm Password:</label>
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field }) => (
                <input
                  type="password"
                  {...field}
                  value={field.value || ""} // Spread the field props for React Hook Form
                />
              )}
            />
            {errors.confirmPassword && (
              <p className="error-message">{errors.confirmPassword.message}</p>
            )}
          </div>
          <button disabled={isSubmitting} type="submit">
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
          <Link to="/">
            <p className="signup">Already have an account? Sign in</p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
