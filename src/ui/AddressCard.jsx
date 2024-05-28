import React, { useState } from "react";

const AddressCard = ({ address, setSelectedAddress }) => {
  const [checked, setChecked] = useState(false);
  const radioButtonHandler = (address) => {
    setChecked(!checked);
    setSelectedAddress(address);
  };
  return (
    <li>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[0.5rem]">
          <input
            onChange={() => radioButtonHandler(address)}
            type="radio"
            name="addressChoice"
            id={address?.title}
          />
          <label
            className={`text-[1.4rem] font-[500] `}
            htmlFor={address?.title}
          >
            {address.title}
          </label>
        </div>
        <div className="flex items-center gap-[0.5rem]">
          <i className="fa-solid fa-pencil text-[1.2rem]"></i>
          <span className="text-[1.2rem] underline cursor-pointer">Edit</span>
        </div>
      </div>
      <div className="mt-[0.5rem] bg-slate-100 bg-opacity-[0.4] border-[1px] border-slate-300 p-[1rem] rounded-[3px] text-[1.2rem]">
        <div className="flex justify-between">
          <div className="flex gap-[1rem] items-center">
            <i className="fa-solid fa-user"></i>
            <p className="font-[400]">{`${address.name} ${address.surname} `}</p>
          </div>
          <p>{address.phone}</p>
        </div>
        <p className="my-[1rem]">{`${address.neighborhood}, ${address.address}, ${address.district}/${address.city}`}</p>
      </div>
    </li>
  );
};

export default AddressCard;
