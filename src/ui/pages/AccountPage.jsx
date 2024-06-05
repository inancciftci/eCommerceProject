import { useDispatch, useSelector } from "react-redux";
import {
  getAddress,
  selectAddress,
} from "../../features/authentication/addressSlice";
import { useEffect } from "react";
import {
  getOrders,
  selectOrders,
} from "../../features/authentication/userSlice";

const AccountPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAddress());
    dispatch(getOrders());
  }, [dispatch]);
  const address = useSelector(selectAddress);
  const orders = useSelector(selectOrders);
  // console.log("Orders:", orders);

  return (
    <div>
      AccountPage
      <p>{address[0]?.id}</p>
      {orders.map((e) => `${e.id}, `)}
    </div>
  );
};

export default AccountPage;
