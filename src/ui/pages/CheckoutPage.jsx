/* eslint-disable react/no-unescaped-entities */
import { useDispatch, useSelector } from "react-redux";
import {
  getAddress,
  getCards,
  selectAddress,
  selectCards,
} from "../../features/authentication/addressSlice";
import { useEffect, useState } from "react";
import AddressCard from "../AddressCard";
import AddressForm from "../../features/authentication/AddressForm";
import { Link } from "react-router-dom";
import { selectUser } from "../../features/authentication/userSlice";
import { selectCartItems } from "../../features/cart/cartSlice";
import PaymentCard from "../PaymentCard";

const CheckoutPage = () => {
  const user = useSelector(selectUser);
  const cartItems = useSelector(selectCartItems);
  const productsTotal = cartItems.reduce(
    (acc, product) => acc + product.quantity * product.product.price,
    0
  );
  const shippingPrice = 19.99;
  const finalTotal =
    cartItems?.length > 0
      ? productsTotal > 150
        ? productsTotal
        : productsTotal + shippingPrice
      : 0;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAddress());
    dispatch(getCards());
  }, [dispatch]);
  const cards = useSelector(selectCards);
  const address = useSelector(selectAddress);
  const [step, setStep] = useState(1);
  const [billing, setBilling] = useState(true);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const handleSteps = (step) => {
    setStep(step);
  };
  return (
    <section className="container mx-auto flex gap-[0.5rem] justify-between">
      <div className="w-[70%] flex flex-col gap-[0.5rem] max-md:w-[100%]">
        <div className="flex max-md:flex-col gap-[0.5rem]">
          <div
            onClick={() => handleSteps(1)}
            className={`w-[50%] max-md:w-[100%] bg-blue-100 p-[1rem] border-b-[0.8rem] cursor-pointer shadow-lg rounded-[3px] ${step == 1 ? "border-blue-400" : "border-slate-300"}`}
          >
            <div className="flex items-center justify-between">
              <span
                className={` font-[500] ${step == 1 ? "text-slate-500" : "text-slate-300"}`}
              >
                Step 1
              </span>
              {selectedAddress ? (
                <span className="font-[400] text-[1.2rem] underline">
                  Selected address: {selectedAddress?.title}
                </span>
              ) : null}
            </div>

            <h3 className="mb-[1rem]">Address Information</h3>
            <p>
              You can enter/select your address information below to{" "}
              <span className="font-[500]">secure and accurate delivery.</span>
            </p>
          </div>
          <div
            onClick={() => handleSteps(2)}
            className={`w-[50%] max-md:w-[100%] bg-blue-100 p-[1rem] border-b-[0.8rem] cursor-pointer shadow-lg rounded-[3px] ${step == 1 ? "border-slate-300" : "border-blue-400"}`}
          >
            <span
              className={` font-[500] ${step == 1 ? "text-slate-300" : "text-slate-500"}`}
            >
              Step 2
            </span>
            <h3 className="mb-[1rem]">Payment Options</h3>
            <p>
              You can safely make your payment with a{" "}
              <span className="font-[500]">bank/credit card</span> or a{" "}
              <span className="font-[500]">shopping loan</span>.
            </p>
          </div>
        </div>
        <div
          className={`flex flex-col gap-[0.5rem] ${step == 2 ? "hidden" : null}`}
        >
          <div className="my-[0.5rem] bg-slate-200 rounded-[3px] p-[1rem] flex">
            <p className="text-[1.2rem]">
              <i className="fa-solid fa-circle-exclamation text-[1.2rem] text-blue-400"></i>{" "}
              To make a corporate invoiced purchase, uncheck the{" "}
              <span className="italic font-[400]">
                "Billing address is the same as shipping"
              </span>{" "}
              box and select your registered corporate invoice address as the
              billing address.
            </p>
          </div>
          <div className=" bg-opacity-[0.3] p-[1rem] rounded-[3px] border-[1px] border-slate-300">
            <div className="flex max-md:flex-col justify-between mt-[1rem] mb-[2rem]">
              <h5>Shipping Address</h5>
              <div className="flex  items-center gap-[0.5rem]">
                <input
                  className="w-[11px] h-[11px]"
                  type="checkbox"
                  name="billing"
                  id="billing"
                  defaultChecked={billing}
                  onClick={() => setBilling(!billing)}
                />
                <label className="text-[1.1rem]" htmlFor="billing">
                  Billing address is the same as shipping
                </label>
              </div>
            </div>
            <div className="flex gap-[1rem] my-[0.5rem]">
              <div className="w-[50%] max-md:w-[100%] flex flex-col gap-[2rem] justify-between">
                <div
                  onClick={() => setShowForm(true)}
                  className="flex flex-col gap-[0.5rem] items-center bg-blue-100 bg-opacity-[0.4] rounded-[3px] border-slate-300 border-[1px] py-[3rem] transition-all cursor-pointer hover:translate-y-[-0.5rem] hover:shadow-xl"
                >
                  <i className="fa-solid fa-plus text-blue-400 text-[3rem]"></i>
                  <p>Add a new address</p>
                </div>
                <ul className="flex flex-col gap-[1rem]">
                  {address.map((addy) => (
                    <AddressCard
                      key={address.indexOf(addy)}
                      address={addy}
                      setSelectedAddress={setSelectedAddress}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`flex-col gap-[0.5rem] border-[1px] rounded-[3px] border-slate-300 ${step == 2 ? "flex" : "hidden"}`}
        >
          <div className="p-[1rem] flex flex-wrap justify-between gap-[1.5rem]">
            <div className=" min-w-[48%] max-md:w-[100%] h-[150px] flex flex-col gap-[0.5rem] justify-center items-center bg-blue-100 bg-opacity-[0.4] rounded-[3px] border-slate-300 border-[1px] py-[3rem] transition-all cursor-pointer hover:translate-y-[-0.5rem] hover:shadow-xl">
              <i className="fa-solid fa-plus text-blue-400 text-[3rem]"></i>
              <p>Add a new card</p>
            </div>
            {cards.map((card) => (
              <PaymentCard
                key={cards.indexOf(card)}
                card={card}
                setSelectedCard={setSelectedCard}
              />
            ))}
          </div>
        </div>
        <AddressForm showForm={showForm} setShowForm={setShowForm} />
      </div>
      <div className="w-[30%] h-[42.5rem] sticky top-[1rem] flex flex-col gap-[1rem] items-center max-md:hidden">
        <Link
          to={"/checkout"}
          className={`bg-blue-500 text-white font-[500] text-[1.6rem] w-[90%] justify-center px-[2rem] py-[1rem] rounded-md flex gap-[1rem] items-center ${cartItems?.length < 1 ? "disabled bg-slate-500 cursor-not-allowed" : null} `}
        >
          <span>Check out</span> <i className="fa-solid fa-chevron-right"></i>
        </Link>
        <div className="w-[90%] border-[1px] border-slate-300 p-[1rem] flex items-center">
          <input type="checkbox" name="terms" id="terms" />
          <label
            className="text-[1.4rem] text-slate-500 ml-[1rem]"
            htmlFor="terms"
          >
            {" "}
            <span className="font-[400] text-black underline">
              Ön Bilgilendirme Koşulları
            </span>
            'nı ve{" "}
            <span className="font-[400] text-black underline">
              Mesafeli Satış Sözleşmesi
            </span>{" "}
            'ni okudum, onaylıyorum.
          </label>
        </div>
        <div
          className={`w-[90%] flex flex-col gap-[1.5rem] border-[1px] rounded-md border-slate-300 p-[1rem] ${cartItems?.length < 1 ? "blur-[5px]" : null}`}
        >
          <h5>Order Summary</h5>

          <div className={`flex justify-between text-[1.4rem] `}>
            <span className="font-[300] text-slate-500">Products Total</span>
            <span className="font-[500]">{productsTotal.toFixed(2)} ₺</span>
          </div>
          <div className="flex justify-between text-[1.4rem]">
            <span className="font-[300] text-slate-500 ">Shipping Total</span>
            {productsTotal > 150 ? (
              <span className="font-[500] line-through text-red-500">
                {shippingPrice} ₺
              </span>
            ) : (
              <span className="font-[500]">{shippingPrice} ₺</span>
            )}
          </div>
          {productsTotal > 150 ? (
            <>
              <hr />
              <div className="flex justify-between items-center text-[1.4rem]">
                <span className="w-[60%] font-[300] text-slate-500">
                  Free shipping for orders above 150 TL
                </span>
                <span className="font-[500]">{shippingPrice} ₺</span>
              </div>
            </>
          ) : null}
          <hr />
          <div className="flex justify-between text-[1.4rem]">
            <span className="font-[300] text-slate-500">Total</span>
            <span className="font-[500]">{finalTotal.toFixed(2)} ₺</span>
          </div>
        </div>

        <Link
          to={"/checkout"}
          className={`bg-blue-500 text-white font-[500] text-[1.6rem] w-[90%] justify-center px-[2rem] py-[1rem] rounded-md flex gap-[1rem] items-center ${cartItems?.length < 1 ? "disabled bg-slate-500 cursor-not-allowed" : null} `}
        >
          <span>Check out</span> <i className="fa-solid fa-chevron-right"></i>
        </Link>
        <p
          className={`${cartItems?.length < 1 ? "visible text-red-400" : "hidden"}`}
        >
          * You don't have any products in your cart.
        </p>
      </div>
    </section>
  );
};

export default CheckoutPage;
