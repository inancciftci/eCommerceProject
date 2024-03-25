import md5 from "md5";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, selectUser } from "./userSlice";

const UserAvatar = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);
  const getUserAvatarURL = (email) => {
    if (!email) return "";
    const emailHash = md5(email);
    return `https://www.gravatar.com/avatar/${emailHash}`;
  };
  return (
    <div className="flex items-center gap-[0.5rem]">
      <img
        className="w-[3rem] rounded-[50%] cursor-pointer"
        src={getUserAvatarURL("ciftcinanc@gmail.com")}
        //   src={getUserAvatarURL(userInfo?.email)}
      />
      <p className="text-[1.6rem] max-md:hidden">{userInfo?.name}</p>
      <button onClick={() => dispatch(logoutUser())}>X</button>
    </div>
  );
};

export default UserAvatar;
