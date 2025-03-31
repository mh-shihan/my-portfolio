import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import { FiMapPin } from "react-icons/fi";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Contact = () => {
  const axiosPublic = useAxiosPublic();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSendEmail = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Sending Message...");
    const userMessage = {
      user_name: formData.name,
      user_email: formData.email,
      user_message: formData.message,
    };
    const sendEmail = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Mahmudul Hasan Shihan",
      reply_to: formData.email,
    };
    try {
      await axiosPublic.post("/messages", userMessage);
      await emailjs
        .send(
          import.meta.env.VITE_MAILJS_SERVICE_ID,
          import.meta.env.VITE_MAILJS_TEMPLATE_ID,
          sendEmail,

          import.meta.env.VITE_MAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            // console.log("SUCCESS!");
            toast.success("Message Send Successfully.👍", { id: toastId });
            setFormData({ name: "", email: "", message: "" });
          },
          (error) => {
            console.log("FAILED...", error);
            toast.error(error.message, { id: toastId });
          }
        );
    } catch (err) {
      toast.error(err.message, { id: toastId });
    }
  };
  return (
    <div className="mt-8 lg:mt-20">
      <Container>
        <div className="flex flex-col md:flex-row justify-center bg-zinc-900 p-6 rounded-md">
          <div className="w-full md:w-1/2 px-6">
            <div>
              <SectionTitle sectionName={"Get in Touch"}></SectionTitle>
              <p className="text-zinc-50 mt-2">
                Feel free to reach out to me for any project or collaboration.
              </p>
            </div>
            {/* Contact Information */}
            <div className="mt-6 space-y-2">
              {/* Email */}
              <div className="flex items-center text-zinc-50">
                <AiOutlineMail className="text-xl text-zinc-500 mr-2" />
                <a
                  href="mahmudulhasanshihan@gmail.com"
                  className="hover:underline"
                >
                  mahmudulhasanshihan@gmail.com
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center text-zinc-50">
                <AiOutlineWhatsApp className="text-xl text-zinc-500 mr-2" />
                <a
                  href="https://wa.me/+8801629122133"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  +880 1521 755633
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center text-zinc-50">
                <FiMapPin className="text-xl text-zinc-500 mr-2" />
                <span>Narayanganj, Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-zinc-800 p-6 rounded-md shadow-none">
            <form onSubmit={handleSendEmail} className="space-y-4">
              <div>
                {/* <label className="block text-zinc-100">Name</label> */}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="name"
                  className="w-full px-4 py-2 border-none rounded-none focus:outline-none focus:ring-2 bg-zinc-900"
                  required
                />
              </div>
              <div>
                {/* <label className="block text-gray-700">Email</label> */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="email"
                  className="w-full px-4 py-2 border-none rounded-none focus:outline-none focus:ring-2 bg-zinc-900"
                  required
                />
              </div>
              <div>
                {/* <label className="block text-gray-700">Message</label> */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows="4"
                  placeholder="message"
                  style={{ resize: "none" }}
                  className="w-full px-4 py-2 border-none rounded-none focus:outline-none focus:ring-2 bg-zinc-900"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#afd138] text-zinc-800 font-semibold py-2 px-4 rounded-none hover:bg-[#9fbe31] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
