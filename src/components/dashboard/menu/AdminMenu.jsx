import { GrCertificate } from "react-icons/gr";
import MenuItem from "./MenuItem";
import { MdAssignmentAdd, MdMessage } from "react-icons/md";
import { TbDeviceIpadHorizontalCog } from "react-icons/tb";

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={MdAssignmentAdd}
        label="Add Project"
        address="/dashboard"
      />
      {/* <MenuItem icon={GrArticle} label="Add Feedback" address="addFeedback" /> */}
      <MenuItem
        icon={GrCertificate}
        label="Add Certificate"
        address="add-certificate"
      />
      <MenuItem
        icon={TbDeviceIpadHorizontalCog}
        label="Add Tech"
        address="add-tech"
      />
      <MenuItem icon={MdMessage} label="All Messages" address="all-messages" />
    </>
  );
};

export default AdminMenu;
