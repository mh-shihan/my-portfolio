import { useState } from "react";
import Container from "../../../shared/Container";
import SectionTitle from "../../../shared/SectionTitle";
import uploadImage from "../../../utils/uploadImage";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const Feedback = () => {
  const axiosPublic = useAxiosPublic();

  const [formData, setFormData] = useState({
    name: "",
    review: "",
    designation: "",
  });
  const { name, review, designation } = formData;

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("loading...");

    const form = e.target;
    const imageFile = form.image.files[0];
    console.log(imageFile);
    const photoURL = await uploadImage(imageFile);
    const rating = form["rating-2"].value;
    // console.log(photoURL);

    const feedbackInfo = {
      image: photoURL,
      name: name.charAt(0).toUpperCase() + name.slice(1),
      designation,
      review,
      rating,
    };
    // console.log(feedbackInfo);

    try {
      const res = await axiosPublic.post("/feedbacks", feedbackInfo);
      if (res.data.insertedId) {
        setFormData({ name: "", review: "", designation: "" });
        form.reset();
        toast.success("Successfully Submit.👍", { id: toastId });
      }
    } catch (err) {
      toast.error(err.message, { id: toastId });
    }
  };
  return (
    <div>
      <Container>
        <div className="mt-12 mb-5">
          <SectionTitle sectionName={"Give valuable feedback"}></SectionTitle>
        </div>
        <form
          onSubmit={handleFeedbackSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Left Column */}
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-zinc-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                value={formData.name}
                placeholder="Enter client name"
                className="w-full px-4 py-2 border text-zinc-300 border-gray-300 rounded-none focus:outline-none"
                required
              />
            </div>

            {/* Title */}
            <div>
              <label
                htmlFor="designation"
                className="block text-lg font-medium text-zinc-300"
              >
                Designation with Organization
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                onChange={(e) =>
                  setFormData({ ...formData, designation: e.target.value })
                }
                value={formData.designation}
                placeholder="Student, DU / CEO, MindSprint"
                className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none "
                required
              />
            </div>

            {/* Review */}
            <div>
              <label
                htmlFor="review"
                className="block text-lg font-medium text-zinc-300"
              >
                Review
              </label>
              <textarea
                id="review"
                name="review"
                placeholder="Enter client review"
                onChange={(e) =>
                  setFormData({ ...formData, review: e.target.value })
                }
                value={formData.review}
                className="w-full px-4 py-2 border border-gray-300 rounded-none text-zinc-300 focus:outline-none"
                rows="4"
                required
              ></textarea>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Image */}
            <div>
              <label
                className="block font-medium mb-2 text-zinc-300"
                htmlFor="image"
              >
                Image
              </label>
              <input
                type="file"
                id="profileImage"
                name="image"
                accept="image/*"
                className="file-input text-zinc-700 file-input-bordered w-full rounded-none"
              />
            </div>

            {/* Rating */}
            <div>
              <label className="block text-lg font-medium text-zinc-300">
                Rating
              </label>
              <div className="flex items-center space-x-2">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    value="1"
                    className="mask mask-star-2 bg-orange-300"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    value="2"
                    className="mask mask-star-2 bg-orange-300"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    value="3"
                    className="mask mask-star-2 bg-orange-300"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    value="4"
                    className="mask mask-star-2 bg-orange-300"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    value="5"
                    className="mask mask-star-2 bg-orange-300"
                    defaultChecked
                    aria-current="true"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 font-semibold text-zinc-800 bg-[#B9FF00] focus:bg-[#7fa712] rounded-none hover:bg-[#7fa712] focus:outline-none"
              >
                Submit Review
              </button>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Feedback;
