import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useFetchResume from "../../hooks/useFetchResume";
import { useState } from "react";

const UpdateResumeURL = () => {
  const axiosPublic = useAxiosPublic();
  const { resume, resume_url, refetch } = useFetchResume();
  const [defaultResume, setDefaultResume] = useState(resume_url);

  const handleUpdateResumeURL = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Updating Resume URL...");
    const updated_resume_url = e.target.resume_url.value;

    const res = await axiosPublic.patch(`/resume/${resume._id}`, {
      updated_resume_url,
    });

    if (res.data.modifiedCount > 0) {
      toast.success("Resume URL Updated Successfully!", { id: toastId });
      setDefaultResume(updated_resume_url);
      refetch();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-gray-700">
      <h1 className="text-2xl font-bold mb-6 text-center">Update Resume URL</h1>
      <form onSubmit={handleUpdateResumeURL} className="space-y-6">
        {/* Technology */}
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Resume URL
          </label>
          <input
            type="text"
            id="resume_url"
            name="resume_url"
            defaultValue={defaultResume}
            placeholder="Update Resume URL"
            className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none text-gray-400"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-6 py-3 font-semibold text-zinc-700 hover:text-white bg-[#B9FF00] focus:bg-[#7fa712] rounded-none hover:bg-[#7fa712] focus:outline-none "
          >
            Update Resume
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateResumeURL;
