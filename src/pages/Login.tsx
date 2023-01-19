import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DangerAlert from "../components/alerts/DangerAlter";
import LoginForm from "../components/auth/Login";
import { useLoginWithEmailAndPassword } from "../hooks/auth.hooks";
import { useUser } from "../lib/contexts/user.context";
import { LoginFormValuesType } from "../lib/types/auth.types";

const Login = () => {
  const [loginFormValues, setLoginFormValues] = useState<LoginFormValuesType>({
    email: "",
    password: "",
  });
  const [isError, setIsError] = useState<boolean>(false);
  const handleLoginWithEmailAndPassword = useLoginWithEmailAndPassword();
  const userContext = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isSuccess = await handleLoginWithEmailAndPassword(
      loginFormValues.email,
      loginFormValues.password,
      userContext
    );
    if (isSuccess) {
      navigate("/");
      return;
    }
    setIsError(true);
  };

  return (
    <div className="h-full">
      {isError ? (
        <DangerAlert onClick={() => setIsError(false)}>
          An error has occurred! Please check your credentials.
        </DangerAlert>
      ) : null}
      <LoginForm
        loginFormValues={loginFormValues}
        setLoginFormValues={setLoginFormValues}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Login;
