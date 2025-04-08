import { useContext } from "react";
import bgImage from "../../assets/shihan-logo-bg.jpg";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("From Login Page---->", location);

  const handleLogin = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Login...");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const res = await signIn(email, password);
      if (res.user) {
        toast.success("Login Successfully", { id: toastId });
        form.reset();
        navigate(location?.state?.from ? location?.state?.from : "/", {
          replace: true,
        });
      }
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };

  return (
    <div className="bg-zinc-950 max-h-full">
      <div className="flex flex-col md:flex-row items-center justify-center py-14">
        {/* Left side with image */}
        <div
          className="relative bg-cover bg-center w-full md:w-1/2 h-[65vh] lg:h-[600px]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${bgImage})`,
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-6xl font-bold">
              {/* <span className="text-orange-500">Login</span> Here! */}
            </h2>
          </div>
        </div>

        {/* Right side with form */}
        <div className="w-full md:w-1/2 h-[65vh] lg:h-[600px] bg-zinc-800 p-10 flex flex-col items-center justify-center">
          <div className="w-full">
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-zinc-200">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input w-full rounded-none bg-zinc-700"
                  required
                />
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-zinc-200">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="********"
                  className="input bg-zinc-700 rounded-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-[#b9ff00] hover:bg-[#d9ff00] w-full rounded-none py-3 text-zinc-800 font-semibold"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="text-right text-sm mt-2 hover:underline hover:text-blue-400 text-blue-300">
              <a className="" href="">
                Forget Password
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
