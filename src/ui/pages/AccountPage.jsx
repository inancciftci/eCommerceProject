import { useDispatch, useSelector } from "react-redux";
import {
  getAddress,
  selectAddress,
} from "../../features/authentication/addressSlice";
import { useEffect } from "react";

const AccountPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAddress());
  }, [dispatch]);
  const address = useSelector(selectAddress);
  console.log(address);

  return (
    <div>
      AccountPage
      <p>{address[0]?.id}</p>
    </div>
  );
};

export default AccountPage;
