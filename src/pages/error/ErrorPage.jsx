import Lottie from "lottie-react";
import errorAnimation from "../../assets/animations/404Animation.json";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col bg-white justify-center items-center h-[100vh] ">
        <Lottie animationData={errorAnimation}></Lottie>
        <Link to={"/"}>
          <button className="btn text-white border-transparent  font-bold bg-lime-400 hover:bg-dark-gray">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
