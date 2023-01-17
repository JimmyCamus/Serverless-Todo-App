import RegisterFigure from "../../assets/RegisterFigure";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import GoogleSignUpButton from "./GoogleSignUpButton";

const RegisterForm = () => {
  return (
    <div className="grid lg:grid-cols-2 h-full">
      <div className="w-full">
        <div className="grid place-items-center h-full">
          <div className="lg:w-1/2">
            <h2 className="text-3xl text-center">Create your free account</h2>
            <p className="font-bold my-4 text-center">
              100% free. No credit card needed.
            </p>
            <GoogleSignUpButton />
            <div className="flex justify-center text-gray-500 mt-10 mb-6">
              <span className="text-xl">OR</span>
            </div>
            <form className="grid place-items-center">
              <Input
                label="Email"
                placeholder="youremail@domain.com"
                type="email"
                className="w-full"
              />
              <Input
                label="Username"
                placeholder="Your Username"
                type="text"
                className="w-full"
              />
              <Input
                label="Password"
                placeholder="Your Password"
                type="password"
                className="w-full"
              />
              <Button type="submit" className="btn btn-secondary w-full my-4">
                SIGN UP
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-full">
        <div className="grid place-items-center h-full">
          <RegisterFigure />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
