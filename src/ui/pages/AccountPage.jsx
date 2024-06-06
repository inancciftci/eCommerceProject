import { useDispatch, useSelector } from "react-redux";
import {
  getAddress,
  selectAddress,
  selectCards,
} from "../../features/authentication/addressSlice";
import { useEffect } from "react";
import {
  getOrders,
  selectOrders,
  selectUser,
} from "../../features/authentication/userSlice";
import Orders from "../Orders";
import md5 from "md5";

const AccountPage = () => {
  const getUserAvatarURL = (email) => {
    if (!email) return "";
    const emailHash = md5(email);
    return `https://www.gravatar.com/avatar/${emailHash}`;
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAddress());
    dispatch(getOrders());
  }, [dispatch]);
  const address = useSelector(selectAddress);
  const orders = useSelector(selectOrders);
  const user = useSelector(selectUser);
  const cards = useSelector(selectCards);

  return (
    <div className="container">
      <div className="flex flex-1 gap-[2rem]">
        <div className="w-[25%] border-[1px] border-slate-300 rounded-[0.3rem] bg-blue-100">
          <div className="flex flex-col items-center gap-[1rem] p-[1rem]">
            <p className="font-[200] uppercase font-[1.6rem]">Profile</p>
            <img
              className="w-[6rem] rounded-[50%] cursor-pointer"
              src={getUserAvatarURL("ciftcinanc@gmail.com")}
              //   src={getUserAvatarURL(userInfo?.email)}
            />
            <h6 className="font-[500] text-[2rem]">{user?.name}</h6>
          </div>
          <div className="bg-blue-200">
            <ul className="flex flex-col gap-[1rem]">
              <li className="text-[1.6rem] ml-[1rem] mt-[1rem]">
                <p>Cards</p>
              </li>
              <li className="text-[1.6rem] ml-[1rem]">
                {" "}
                <p>Addresses</p>{" "}
              </li>
              <li className="text-[1.6rem] ml-[1rem] mb-[1rem]">
                <p>
                  <i className="fa-solid fa-arrow-right"></i> Orders
                </p>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[75%] border-[1px] border-slate-300 rounded-[0.3rem]">
          <Orders />
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
