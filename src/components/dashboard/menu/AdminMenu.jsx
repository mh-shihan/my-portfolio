import { GrCertificate } from "react-icons/gr";
import MenuItem from "./MenuItem";
import { MdAssignmentAdd, MdMessage } from "react-icons/md";
import { TbDeviceIpadHorizontalCog } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { SiReaddotcv } from "react-icons/si";
import { ImBlog } from "react-icons/im";

const AdminMenu = ({ setIsOpen }) => {
  return (
    <>
      <MenuItem
        setIsOpen={setIsOpen}
        icon={CgProfile}
        label="Admin Profile"
        address="/dashboard"
      />
      <MenuItem
        setIsOpen={setIsOpen}
        icon={MdAssignmentAdd}
        label="Add Project"
        address="/dashboard/add-project"
      />
      {/* <MenuItem icon={GrArticle} label="Add Feedback" address="addFeedback" /> */}
      <MenuItem
        setIsOpen={setIsOpen}
        icon={GrCertificate}
        label="Add Certificate"
        address="/dashboard/add-certificate"
      />
      <MenuItem
        setIsOpen={setIsOpen}
        icon={TbDeviceIpadHorizontalCog}
        label="Add Tech"
        address="add-tech"
      />
      <MenuItem
        setIsOpen={setIsOpen}
        icon={MdMessage}
        label="All Messages"
        address="/dashboard/messages"
      />
      <MenuItem
        setIsOpen={setIsOpen}
        icon={SiReaddotcv}
        label="Update Resume URL"
        address="/dashboard/resume"
      />
      <MenuItem
        setIsOpen={setIsOpen}
        icon={ImBlog}
        label="Post Blog"
        address="/dashboard/post-blog"
      />
    </>
  );
};

export default AdminMenu;
