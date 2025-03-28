import { useState } from "react";

const AddCertificate = () => {
  const [formData, setFormData] = useState({
    title: "",
    platform: "",
    credential: "",
  });

  const handleAddCertificate = async (e) => {
    e.preventDefault();
    alert("Hell9 Certificate");
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
            className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none "
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
            className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none "
            required
          />
        </div>

        {/* Image */}
        <div>
          <label
            className="block font-medium mb-2 text-gray-700"
            htmlFor="image"
          >
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
            Platform
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
            className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none "
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-6 py-3 font-semibold text-zinc-800 bg-[#B9FF00] focus:bg-[#7fa712] rounded-none hover:bg-[#7fa712] focus:outline-none "
          >
            Add Certificate
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCertificate;
