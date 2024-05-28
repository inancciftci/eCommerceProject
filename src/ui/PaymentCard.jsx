const PaymentCard = ({ card, setSelectedCard }) => {
  const splitCardNumber = (cardNo) => {
    return (
      cardNo.slice(0, 4) +
      " " +
      cardNo.slice(4, 6) +
      "** **** " +
      cardNo.slice(12, 16)
    );
  };

  const organizedNo = splitCardNumber(card?.card_no);
  return (
    <div className="w-[49%] max-md:w-[100%] min-h-[150px] border-[1px] rounded-[3px] bg-slate-100 p-[1rem] flex flex-col justify-between">
      <div className="flex justify-between items-center text-[3rem] text-blue-500">
        <i className="fa-solid fa-building-columns"></i>
        <i className="fa-brands fa-cc-mastercard"></i>
      </div>
      <div className="flex flex-col text-right">
        <span className="text-[1.4rem] font-[500]">{organizedNo}</span>
        <span className="text-[1.2rem]">
          {card.expire_month}/{card.expire_year}
        </span>
      </div>
    </div>
  );
};

export default PaymentCard;
