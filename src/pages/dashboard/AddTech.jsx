import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AddTech = () => {
  const axiosPublic = useAxiosPublic();
  const [formData, setFormData] = useState({
    technology: "",
    description: "",
    photo_url: "",
  });

  const { technology, description, photo_url } = formData;

  const handleAddTech = async (e) => {
    e.preventDefault();
    const form = e.target;
    const toastId = toast.loading("Adding New Technology...");
    const techInfo = {
      technology,
      description,
      img: photo_url,
    };

    try {
      const res = await axiosPublic.post("/technologies", techInfo);
      if (res.data.insertedId) {
        toast.success("New Technology Added Successfully.👍", { id: toastId });
        setFormData({ technology: "", description: "", photo_url: "" });
        form.reset();
      }
    } catch (err) {
      toast.error(err.message, { id: toastId });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-gray-700">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Add New Technology
      </h1>
      <form onSubmit={handleAddTech} className="space-y-6">
        {/* Technology */}
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Technology Name
          </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) =>
              setFormData({ ...formData, technology: e.target.value })
            }
            value={formData.technology}
            placeholder="Enter Tech Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none text-white"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            value={formData.description}
            placeholder="Enter Tech use case, e.g User Interface, Framework, Library etc"
            className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none text-white "
            required
          />
        </div>
        {/* Photo Url */}
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Photo URL
          </label>
          <input
            type="url"
            id="photo_url"
            name="photo_url"
            onChange={(e) =>
              setFormData({ ...formData, photo_url: e.target.value })
            }
            value={formData.photo_url}
            placeholder="Enter Tech use case, e.g User Interface, Framework, Library etc"
            className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none text-white "
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-6 py-3 font-semibold text-zinc-700 hover:text-white bg-[#B9FF00] focus:bg-[#7fa712] rounded-none hover:bg-[#7fa712] focus:outline-none "
          >
            Add Tech
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTech;
