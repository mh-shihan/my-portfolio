import { useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview"; //Very Important

const PostBlog = () => {
  const [blogContent, setBlogContent] = useState(``);
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    category: "",
    tags: [],
    short_description: "",
  });
  const { title, type, category, tags, short_description } = formData;
  return (
    <div className="w-full mx-auto p-6 bg-white text-gray-700">
      <h1 className="text-2xl font-bold mb-6 text-center">Post Blog</h1>
      <div className="flex flex-col xl:grid grid-cols-2 gap-6">
        <form className="space-y-6 col-span-1">
          {/* Title */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm md:text-lg font-medium text-gray-700"
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
              value={title}
              placeholder="Title of the Blog"
              className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none text-gray-400 text-sm md:text-lg"
              required
            />
          </div>
          {/* Image */}
          <div>
            <label
              className="block text-sm md:text-lg font-medium mb-2 text-gray-700"
              htmlFor="image"
            >
              Project Image
            </label>
            <input
              type="file"
              id="profileImage"
              name="image"
              accept="image/*"
              className="file-input file-input-bordered w-full rounded-md"
              required
            />
          </div>
          {/* Type */}
          <div>
            <label
              htmlFor="name"
              className="block  text-sm md:text-lg font-medium text-gray-700"
            >
              Type e.g Tutorial
            </label>
            <input
              type="text"
              id="type"
              name="type"
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
              value={type}
              placeholder="Wirte the Type of the Blog"
              className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none text-gray-400 text-sm md:text-lg"
              required
            />
          </div>
          {/* Category */}
          <div>
            <label
              htmlFor="name"
              className="block  text-sm md:text-lg font-medium text-gray-700"
            >
              Category e.g Programming
            </label>
            <input
              type="text"
              id="category"
              name="category"
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              value={category}
              placeholder="Wirte the Type of the Blog"
              className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none text-gray-400 text-sm md:text-lg"
              required
            />
          </div>
          {/* short_description */}
          <div>
            <label
              htmlFor="name"
              className="block  text-sm md:text-lg font-medium text-gray-700"
            >
              Short Description
            </label>
            <input
              type="text"
              id="short_description"
              name="short_description"
              onChange={(e) =>
                setFormData({ ...formData, short_description: e.target.value })
              }
              value={short_description}
              placeholder="Short Description of the Blog"
              className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none text-gray-400 text-sm md:text-lg"
              required
            />
          </div>
          {/* tags */}
          <div>
            <label
              htmlFor="name"
              className="block  text-sm md:text-lg font-medium text-gray-700"
            >
              Tags e.g React, JavaScript, etc.
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              onChange={(e) =>
                setFormData({ ...formData, tags: e.target.value })
              }
              value={tags}
              placeholder="Wirte the Tags of the Blog"
              className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none text-gray-400 text-sm md:text-lg"
              required
            />
          </div>
          {/* Blog Content */}
          <div>
            <label
              htmlFor="name"
              className="block  text-sm md:text-lg font-medium text-gray-700"
            >
              Markdown Content
            </label>
            <textarea
              type="text"
              id="blogContent"
              name="blogContent"
              rows="10"
              onChange={(e) => setBlogContent(e.target.value)}
              value={blogContent}
              placeholder="Wirte the markdown content of the Blog"
              style={{ resize: "none" }}
              className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none text-gray-400 text-sm md:text-lg"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 font-semibold text-zinc-700 hover:text-white bg-[#B9FF00] focus:bg-[#7fa712] rounded-none hover:bg-[#7fa712] focus:outline-none "
            >
              Post
            </button>
          </div>
        </form>
        <div className="col-span-1">
          <h1 className="text-center text-sm md:text-xl font-medium text-gray-800 ">
            Markdown Previewer
          </h1>
          <div className=" max-w-full px-4 xl:px-0 overflow-x-hidden ">
            <MarkdownPreview
              source={blogContent}
              style={{
                padding: 16,
                overflow: "scroll",
              }}
              rehypeRewrite={(node, index, parent) => {
                if (
                  node.tagName === "a" &&
                  parent &&
                  /^h(1|2|3|4|5|6)/.test(parent.tagName)
                ) {
                  parent.children = parent.children.slice(1);
                }
              }}
            />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default PostBlog;
