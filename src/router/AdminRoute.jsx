import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import Loader from "../shared/Loader";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { isAdmin, adminLoading } = useAdmin();
  const location = useLocation();

  if (loading || adminLoading) return <Loader />;

  if (user && isAdmin?.admin) return children;

  return <Navigate to="/" state={location.pathname} replace></Navigate>;
};

export default AdminRoute;
