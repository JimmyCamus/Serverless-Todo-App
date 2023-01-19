import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/auth/Login";
import { useLoginWithEmailAndPassword } from "../hooks/auth.hooks";
import { useUser } from "../lib/contexts/user.context";
import { LoginFormValuesType } from "../lib/types/auth.types";

const Login = () => {
  const [loginFormValues, setLoginFormValues] = useState<LoginFormValuesType>({
    email: "",
    password: "",
  });
  const handleLoginWithEmailAndPassword = useLoginWithEmailAndPassword();
  const userContext = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleLoginWithEmailAndPassword(
      loginFormValues.email,
      loginFormValues.password,
      userContext
    );
    navigate("/");
  };

  return (
    <LoginForm
      loginFormValues={loginFormValues}
      setLoginFormValues={setLoginFormValues}
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;
