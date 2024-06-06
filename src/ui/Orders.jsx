import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, selectOrders } from "../features/authentication/userSlice";
import OrderCard from "./OrderCard";

const Orders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  const orders = useSelector(selectOrders);
  return (
    <div className="p-[1.5rem]">
      <h5 className="mb-[3rem] text-[2rem]">Your Orders ({orders?.length})</h5>
      <ul className="flex flex-col gap-[1rem]">
        {orders.map((order) => (
          <OrderCard order={order} />
        ))}
      </ul>
    </div>
  );
};

export default Orders;
