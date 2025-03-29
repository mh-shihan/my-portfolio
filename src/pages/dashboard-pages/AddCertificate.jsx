import { useState } from "react";
import uploadImage from "../../utils/uploadImage";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const AddCertificate = () => {
  const axiosPublic = useAxiosPublic();
  const [formData, setFormData] = useState({
    title: "",
    platform: "",
    credential: "",
  });
  const { title, platform, credential } = formData;

  const handleAddCertificate = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Adding Certificate...");
    const form = e.target;
    const image = form.image.files[0];
    const photoURL = await uploadImage(image);

    if (photoURL) {
      const certificateInfo = {
        image: photoURL,
        title,
        platform,
        credential,
      };
      //   console.log(certificateInfo);

      try {
        const res = await axiosPublic.post("/certificates", certificateInfo);
        if (res.data.insertedId) {
          setFormData({ title: "", platform: "", credential: "" });
          form.reset();
          toast.success("Certificate Added Successfully.👍", { id: toastId });
        }
      } catch (err) {
        toast.error(err.message, { id: toastId });
      }
    } else {
      toast.error("Ops! Something Went Wrong, Try again", { id: toastId });
    }
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-gray-700">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Add New Certificate
      </h1>
      <form onSubmit={handleAddCertificate} className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            value={formData.name}
            placeholder="Enter course name"
            className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none text-white"
            required
          />
        </div>

        {/* Platform */}
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Platform
          </label>
          <input
            type="text"
            id="platform"
            name="platform"
            onChange={(e) =>
              setFormData({ ...formData, platform: e.target.value })
            }
            value={formData.platform}
            placeholder="Enter platform name"
            className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none text-white "
            required
          />
        </div>

        {/* Image */}
        <div>
          <label className="block font-medium mb-2 text-white" htmlFor="image">
            Certificate Image
          </label>
          <input
            type="file"
            id="profileImage"
            name="image"
            accept="image/*"
            className="file-input file-input-bordered w-full rounded-none"
          />
        </div>

        {/* Credentials */}
        <div>
          <label
            htmlFor="credential"
            className="block text-lg font-medium text-gray-700"
          >
            Credentials
          </label>
          <input
            type="url"
            id="credential"
            name="credential"
            onChange={(e) =>
              setFormData({ ...formData, credential: e.target.value })
            }
            value={formData.credential}
            placeholder="Enter credential link"
            className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none text-white"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-6 py-3 font-semibold text-zinc-700 hover:text-white bg-[#B9FF00] focus:bg-[#7fa712] rounded-none hover:bg-[#7fa712] focus:outline-none "
          >
            Add Certificate
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCertificate;
