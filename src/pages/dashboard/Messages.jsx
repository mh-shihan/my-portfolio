import { MdDeleteForever } from "react-icons/md";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../shared/Loader";

const Messages = () => {
  const [messages, isLoading] = useFetchData("/messages", "messages");

  const handleModernDelete = (id) => {
    console.log(id);
  };
  return (
    <div>
      <div className="text-center my-10"></div>
      <div className="overflow-x-auto bg-white p-6">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Total Messages: {messages?.length}
        </h2>
        <table className="table-auto w-full border-collapse">
          {/* Table Head */}
          <thead>
            <tr className="bg-lime-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-center">#</th>
              <th className="py-3 px-6 text-center">Name</th>
              <th className="py-3 px-6 text-center">Email</th>
              <th className="py-3 px-6 text-center">Message</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody className="text-gray-700 text-sm text-center">
            {isLoading ? (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  <Loader />
                </td>
              </tr>
            ) : (
              messages?.map((message, index) => (
                <tr
                  key={message._id}
                  className={`border-b border-gray-200 hover:bg-gray-100 ${
                    index % 2 === 0 ? "bg-gray-50" : ""
                  }`}
                >
                  <td className="py-3 px-6">{index + 1}</td>
                  <td className="py-3 px-6">{message?.user_name}</td>
                  <td className="py-3 px-6">{message?.user_email}</td>
                  <td className="py-3 px-6">{message?.user_message}</td>
                  <td className="py-3 px-6">
                    <button
                      onClick={() => handleModernDelete(message._id)}
                      className=""
                    >
                      <MdDeleteForever className="text-3xl text-orange-600"></MdDeleteForever>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;
