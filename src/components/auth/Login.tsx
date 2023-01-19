import LoginFigure from "../../assets/LoginFigure";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import GoogleSignUpButton from "./GoogleSignUpButton";

const LoginForm = () => {
  return (
    <div className="grid lg:grid-cols-2 h-full">
      <div className="hidden lg:block w-full">
        <div className="grid place-items-center h-full">
          <LoginFigure />
        </div>
      </div>
      <div className="w-full">
        <div className="grid place-items-center h-full">
          <div className="lg:w-1/2">
            <h2 className="text-2xl text-center">
              Sign in to start organize your life!
            </h2>
            <form className="grid place-items-center">
              <Input
                label="Email"
                placeholder="youremail@domain.com"
                type="email"
                className="w-full"
              />
              <Input
                label="Password"
                placeholder="Your Password"
                type="password"
                className="w-full"
              />
              <Button type="submit" className="btn btn-secondary w-full my-4">
                SIGN IN
              </Button>
            </form>
            <div className="flex justify-center text-gray-500 mt-10 mb-6">
              <span className="text-xl">OR</span>
            </div>
            <GoogleSignUpButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
