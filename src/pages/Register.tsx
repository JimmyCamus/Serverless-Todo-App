import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/auth/RegisterForm";
import { useRegisterWithEmailAndPassword } from "../hooks/auth.hooks";
import { useUser } from "../lib/contexts/user.context";
import { RegisterFormValuesType } from "../lib/types/auth.types";

const Register = () => {
  const [registerFormValues, setRegisterFormValues] =
    useState<RegisterFormValuesType>({ email: "", username: "", password: "" });
  const handleRegisterWithEmailAndPassword = useRegisterWithEmailAndPassword();
  const userContext = useUser();
  const navigate = useNavigate();

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleRegisterWithEmailAndPassword(
      registerFormValues.email,
      registerFormValues.password,
      registerFormValues.username,
      userContext
    );
    navigate("/");
  };
  return (
    <RegisterForm
      registerFormValues={registerFormValues}
      setRegisterFormValues={setRegisterFormValues}
      handleSubmit={handleSubmitForm}
    />
  );
};

export default Register;
