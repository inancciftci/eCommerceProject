import { Link } from "react-router-dom";

const LoginRegister = () => {
  return (
    <div className="text-[1.4rem] cursor-pointer flex gap-[1rem] items-center">
      <i className="fa-solid fa-user"></i>
      <Link to="/login">Login</Link>
      <span> / </span>
      <Link to="/signup">Register</Link>
    </div>
  );
};

export default LoginRegister;
