import { useSelector } from "react-redux";
import { selectAddress } from "../features/authentication/addressSlice";

const OrderCard = ({ order }) => {
  const products = order?.products;
  const addresses = useSelector(selectAddress);
  const address = addresses.find((e) => e.id === order.address_id);
  const orderTotal = products
    .map((product) => product.count * product.price)
    .reduce((acc, currentValue) => acc + currentValue, 0);

  return (
    <li className="border-[1px] rounded-[0.5rem shadow-md">
      <div className="flex justify-between p-[1rem]">
        <div className="flex flex-col text-center gap-[0.5rem]">
          <p className="font-[400]">Order ID</p>
          <hr />
          <p className="text-center">{order?.id}</p>
        </div>
        <div className="flex flex-col text-center gap-[0.5rem]">
          <p className="font-[400]">Address</p>
          <hr />
          <p className="text-center">{address.title}</p>
        </div>
        <div className="flex flex-col text-center gap-[0.5rem]">
          <p className="font-[400]">Order Total</p>
          <hr />
          <p className="text-center">{orderTotal}</p>
        </div>
        <div className="flex flex-col text-center gap-[0.5rem]">
          <p className="font-[400]">Product Count</p>
          <hr />
          <p className="text-center">{products?.length}</p>
        </div>
      </div>
    </li>
  );
};

export default OrderCard;
