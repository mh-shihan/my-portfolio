import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import adminImg from "../../assets/banner.png";

const DashboardHome = () => {
  const { user, loading } = useContext(AuthContext);

  return (
    <div className="container mx-auto my-5 p-5">
      <div className="md:flex no-wrap md:-mx-2 ">
        <div className="w-full md:w-3/12 md:mx-2 shadow-sm">
          <div className="bg-white p-3 border-t-4 border-green-400">
            <div className="image overflow-hidden rounded-md">
              <img src={adminImg} alt="" />
            </div>
            {/* <form className="mt-3 flex" onSubmit={handleProfilePictureUpdate}>
                                  <input type="file" name="image" className="" required />
                                  <input type="submit" required value="Update" className=" text-white px-2 cursor-pointer rounded-sm bg-sky-600 hover:bg-sky-700" />
                              </form> */}
            {/* <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{data.name}</h1>
                              <h3 className="text-gray-600 font-lg text-semibold leading-6">{data.accType} ID: {data?._id?.slice(0, 9)}</h3> */}
          </div>
        </div>
        <div className="w-full md:w-9/12 mx-2 lg:h-64">
          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span className="text-green-500">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                ></svg>
              </span>
              <span className="tracking-wide text-2xl font-medium mb-4 md:mb-2">
                About
              </span>
            </div>

            {/* info */}
            <div>
              <div className="text-gray-700 ">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="">
                    <div className="lg:px-4 py-1 font-semibold">Name</div>
                    <div className="lg:px-4 py-1">Mahmudul Hasan Shihan</div>
                  </div>
                  <div className="">
                    <div className="lg:px-4 py-1 font-semibold ">Email</div>
                    <div className="lg:px-4 py-1 font-bold">
                      {!loading && user && user.email}
                    </div>
                  </div>
                  <div className="pt-2 md:mt-4">
                    <div className="lg:px-4 py-1 font-semibold">Gender</div>
                    <div className="lg:px-4 py-1">Male</div>
                  </div>
                  <div className="pt-2 md:mt-4">
                    <div className="lg:px-4 py-1 font-semibold">
                      Contact No.
                    </div>
                    <div className="lg:px-4 py-1">+880 1521 755633</div>
                  </div>
                  <div className="pt-2 md:mt-4">
                    <div className="lg:px-4 py-1 font-semibold">
                      Current Address
                    </div>
                    <div className="lg:px-4 py-1">Uttara-8, Dhaka</div>
                  </div>
                  <div className="pt-2 md:mt-4">
                    <div className="lg:px-4 py-1 font-semibold">
                      Permanent Address
                    </div>
                    <div className="lg:px-4 py-1">
                      Dashirdia, Araihazar, Narayanganj
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
