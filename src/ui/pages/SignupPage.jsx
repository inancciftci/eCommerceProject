import { useSelector } from "react-redux";
import SignUpForm from "../../features/authentication/SignupForm";
import { selectAllRoles } from "../../app/globalSlice";
import Loader from "../Loader";

const SignupPage = () => {
  const roles = useSelector(selectAllRoles);
  console.log(roles);
  if (!roles.length) {
    return <Loader />;
  } else {
    return <SignUpForm />;
  }
};

export default SignupPage;
