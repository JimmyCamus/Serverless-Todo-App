import { Link } from "react-router-dom";
import LandingFigure from "../assets/landing-figure.svg";

const Landing = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col w-full justify-between xl:flex-row-reverse">
        <img
          src={LandingFigure}
          className=" lg:max-w-lg "
          alt="landing page of todo app"
        />
        <div className="flex justify-center flex-col">
          <h1 className="text-2xl lg:text-5xl font-bold text-center">WELCOME TO TODO APP!</h1>
          <p className="lg:text-3xl py-3 lg:py-6 text-center">
            You are ready to start organizing your life?
          </p>
          <Link to="/register" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
