import { useRegisterWithGoogle } from "../../hooks/auth.hooks";
import Button from "../atoms/Button";

const GoogleSignUpButton = () => {
  const registerWithGoogle = useRegisterWithGoogle();
  const handleRegisterWithGoogle = async () => {
    await registerWithGoogle();
  };
  return (
    <Button
      className="btn btn-primary w-full"
      onClick={handleRegisterWithGoogle}
    >
      <span className="flex flex-row items-center justify-between w-full">
        <div className="w-1/4">
          <img
            className="p-2 bg-white"
            width="45"
            height="45"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="google logo"
          />
        </div>
        <span className="w-full text-center">Sign up with Google</span>
      </span>
    </Button>
  );
};

export default GoogleSignUpButton;
