import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("email is required"),
  password: yup.string().required("Password is required"),
});

const registrationSchema = yup.object().shape({
  companyName: yup.string().required("Company name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  number: yup.string().required("Phone number is required").min(10),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export { schema, registrationSchema };
