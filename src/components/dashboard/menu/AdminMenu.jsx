import { GrCertificate } from "react-icons/gr";
import MenuItem from "./MenuItem";
import { MdAssignmentAdd, MdMessage } from "react-icons/md";
import { TbDeviceIpadHorizontalCog } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={CgProfile} label="Admin Profile" address="/dashboard" />
      <MenuItem
        icon={MdAssignmentAdd}
        label="Add Project"
        address="/dashboard/add-project"
      />
      {/* <MenuItem icon={GrArticle} label="Add Feedback" address="addFeedback" /> */}
      <MenuItem
        icon={GrCertificate}
        label="Add Certificate"
        address="/dashboard/add-certificate"
      />
      <MenuItem
        icon={TbDeviceIpadHorizontalCog}
        label="Add Tech"
        address="add-tech"
      />
      <MenuItem
        icon={MdMessage}
        label="All Messages"
        address="/dashboard/messages"
      />
    </>
  );
};

export default AdminMenu;
