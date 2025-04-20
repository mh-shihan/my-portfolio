const PostBlog = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-gray-700">
      <h1 className="text-2xl font-bold mb-6 text-center">Post Blog</h1>
      <form className="space-y-6">
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
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostBlog;
