import { GrLogout } from "react-icons/gr";
import AdminMenu from "../menu/AdminMenu";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import logo from "../../../assets/shihan-logo.png";
import { useContext, useState } from "react";
import { MdHome } from "react-icons/md";
import useFetchData from "../../../hooks/useFetchData";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { user, signout } = useContext(AuthContext);
  const [isAdmin] = useFetchData(`/admin/${user?.email}`, `${user?.email}`);
  const navigate = useNavigate();
  // console.log(isOpen);

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do You Want to Logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        signout()
          .then(() => {
            Swal.fire({
              title: "Logout!",
              text: "User Logout  Successfully",
              icon: "success",
            });
            navigate("/");
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: `${error.message}`,
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div>
      {/* Small Screen Navbar */}
      <div className="bg-zinc-800 text-zinc flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <img
                // className='hidden md:block'
                src={logo}
                alt="logo"
                width="100"
                height="100"
              />
            </Link>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`mobile-menu-button p-4 }`}
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-zinc-700 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isOpen && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 rounded-none justify-center items-center mx-auto">
              <Link to="/">
                <img
                  // className='hidden md:block'
                  src={logo}
                  alt="logo"
                  width="100"
                  height="100"
                />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {/*  Menu Items */}
              {isAdmin && <AdminMenu setIsOpen={setIsOpen} />}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <Link to="/">
            <button className="flex w-full items-center px-3 py-2 mt-2 text-zinc-300 hover:bg-[#B9FF00]   hover:text-gray-700 transition-colors duration-300 transform">
              <MdHome className="w-6 h-6" />

              <span className="mx-4 font-medium">Home</span>
            </button>
          </Link>
          <button
            onClick={handleLogOut}
            className="flex w-full items-center px-4 py-2  text-zinc-300 hover:bg-[#B9FF00]   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
