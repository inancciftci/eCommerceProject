import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUser } from "./userSlice";
import { toast } from "react-toastify";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const user = useSelector(selectUser);
  const isAuthenticated = user?.token;
  if (!isAuthenticated) {
    toast.error("You cannot access this page without logging in.", {
      theme: "dark",
      className: "toast-message",
    });
    return <Navigate to="/login" />;
  }

  return <Element {...rest} />;
};

export default ProtectedRoute;
