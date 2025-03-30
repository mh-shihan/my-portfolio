import { useState } from "react";
import ButtonLoader from "../../shared/ButtonLoader";
import toast from "react-hot-toast";
import uploadImage from "../../utils/uploadImage";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AddProject = () => {
  const axiosPublic = useAxiosPublic();
  const [pending, setPending] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    client: "",
    duration: "",
    developer: "",
    liveLink: "",
    repoLink: "",
    tags: "",
    details: "",
    features: "",
  });

  const {
    title,
    liveLink,
    repoLink,
    tags,
    client,
    duration,
    subTitle,
    details,
    features,
    developer,
  } = formData;

  // console.log(title, liveLink, repoLink, tags, details);
  const tag = tags.split(",").map((tag) => tag.trim());
  //   console.log(tag);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);

    const form = e.target;
    const image = form.image.files[0];
    const photoURL = await uploadImage(image);
    console.log(photoURL);
    const tags = form.tags.value.split(",").map((tag) => tag.trim());
    // const details = form.details.value;
    const projectInfo = {
      imgSrc: photoURL,
      title,
      client,
      duration,
      subTitle,
      liveLink,
      repoLink,
      tags,
      details,
      features,
      developer,
    };
    console.log(projectInfo);

    try {
      await axiosPublic.post("/projects", projectInfo);
      setFormData({
        title: "",
        subTitle: "",
        client: "",
        duration: "",
        developer: "",
        liveLink: "",
        repoLink: "",
        tags: "",
        details: "",
        features: "",
      });
      form.reset();
      toast.success("Successfuly Add.👍");
      setPending(false);
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Add New Project</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* project Name */}
        <div>
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-700"
          >
            Project Name
          </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            value={formData.title}
            placeholder="Enter project name"
            className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none "
            required
          />
        </div>

        {/* project Sub Title */}
        <div>
          <label
            htmlFor="subTitle"
            className="block text-lg font-medium text-gray-700"
          >
            Sub Title
          </label>
          <input
            type="text"
            id="subTitle"
            name="subTitle"
            onChange={(e) =>
              setFormData({ ...formData, subTitle: e.target.value })
            }
            value={formData.subTitle}
            placeholder="Sub title"
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
            Project Image
          </label>
          <input
            type="file"
            id="profileImage"
            name="image"
            accept="image/*"
            className="file-input file-input-bordered w-full rounded-none"
            required
          />
        </div>

        {/* client & duration */}
        <div className="flex justify-between gap-3">
          {/* Client */}
          <div className="w-full">
            <label
              htmlFor="client"
              className="block text-lg font-medium text-gray-700"
            >
              Client Name
            </label>
            <input
              type="text"
              id="client"
              name="client"
              placeholder="Enter client name"
              onChange={(e) =>
                setFormData({ ...formData, client: e.target.value })
              }
              value={formData.client}
              className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none"
              required
            />
          </div>

          {/* Duration */}
          <div className="w-full">
            <label
              htmlFor="duration"
              className="block text-lg font-medium text-gray-700"
            >
              Duration
            </label>
            <input
              type="text"
              id="duration"
              name="duration"
              placeholder="Enter duration name"
              onChange={(e) =>
                setFormData({ ...formData, duration: e.target.value })
              }
              value={formData.duration}
              className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Developer */}
        <div>
          <label
            htmlFor="developer"
            className="block text-lg font-medium text-gray-700"
          >
            Developer
          </label>
          <input
            type="text"
            id="developer"
            name="developer"
            onChange={(e) =>
              setFormData({ ...formData, developer: e.target.value })
            }
            value={formData.developer}
            placeholder="Developer or Developers"
            className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none "
            required
          />
        </div>

        {/* links */}
        <div className="flex justify-between gap-3">
          {/* Live Link */}
          <div className="w-full">
            <label
              htmlFor="live"
              className="block text-lg font-medium text-gray-700"
            >
              Live Link
            </label>
            <input
              type="url"
              id="live"
              name="live"
              placeholder="Enter live link"
              onChange={(e) =>
                setFormData({ ...formData, liveLink: e.target.value })
              }
              value={formData.liveLink}
              className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none"
              required
            />
          </div>

          {/* Repo Link */}
          <div className="w-full">
            <label
              htmlFor="repo"
              className="block text-lg font-medium text-gray-700"
            >
              Github Repository Link
            </label>
            <input
              type="url"
              id="repo"
              name="repo"
              placeholder="Enter live link"
              onChange={(e) =>
                setFormData({ ...formData, repoLink: e.target.value })
              }
              value={formData.repoLink}
              className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none"
              required
            />
          </div>
        </div>

        {/* project Tags */}
        <div>
          <label
            htmlFor="tags"
            className="block font-medium mb-2 text-gray-700"
          >
            Tags (Comma-separated)
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            // value={formData.tags.join(", ")}
            // onChange={handleTagsChange}
            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            value={formData.tags}
            className="input input-bordered w-full rounded-none"
            placeholder="e.g., React, JavaScript, Web Development"
          />
        </div>

        {/* Details */}
        <div>
          <label
            htmlFor="details"
            className="block text-lg font-medium text-gray-700"
          >
            Details
          </label>
          <textarea
            id="details"
            name="details"
            placeholder="Enter project details"
            onChange={(e) =>
              setFormData({ ...formData, details: e.target.value })
            }
            value={formData.details}
            className="w-full px-4 pt-2 border border-gray-300 rounded-none focus:outline-none"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Features */}
        <div>
          <label
            htmlFor="features"
            className="block text-lg font-medium text-gray-700"
          >
            Key Features
          </label>
          <textarea
            id="features"
            name="features"
            placeholder="Enter project features"
            onChange={(e) =>
              setFormData({ ...formData, features: e.target.value })
            }
            value={formData.features}
            className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className={`w-full px-6 py-3 font-semibold text-zinc-800 bg-[#B9FF00] focus:bg-[#7fa712] rounded-none hover:bg-[#7fa712] focus:outline-none ${
              pending ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {pending ? <ButtonLoader></ButtonLoader> : "Add Project"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
