const TagBtn = ({ tag }) => {
  return (
    <button className="btn btn-outline text-gray-200 hover:text-gray-200 border border-[#C4F000] hover:border-[#C4F000] border-opacity-50 hover:border-opacity-50  mt-3 ml-2 cursor-default hover:bg-transparent">
      {tag}
    </button>
  );
};

export default TagBtn;
