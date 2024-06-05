const PaymentCard = ({ card, setSelectedCard, selectedCard }) => {
  const splitCardNumber = (cardNo) => {
    return (
      cardNo.slice(0, 4) +
      " " +
      cardNo.slice(4, 6) +
      "** **** " +
      cardNo.slice(12, 16)
    );
  };

  const onChangeHandler = () => {
    setSelectedCard(card);
  };

  const organizedNo = splitCardNumber(card?.card_no);
  return (
    <li
      className={`${card?.id === selectedCard?.id ? "border-blue-500" : "border-slate-300"} w-[32%] max-md:w-[100%] min-h-[150px] border-[1px] rounded-[3px] bg-slate-100 p-[1rem] flex flex-col justify-between relative`}
    >
      <div className="flex items-center gap-[0.5rem] absolute top-[1rem] left-[1rem]">
        <input
          onChange={() => onChangeHandler()}
          type="radio"
          name="cardChoice"
          id={card?.name}
        />
        <label className={`text-[1.4rem] font-[500] `} htmlFor={card?.name}>
          {card.name_on_card}
        </label>
      </div>
      <div className="flex flex-row-reverse items-center text-[3rem] text-blue-500">
        <i className="fa-brands fa-cc-mastercard"></i>
      </div>
      <div className="flex flex-col text-right">
        <span className="text-[1.4rem] font-[500]">{organizedNo}</span>
        <span className="text-[1.2rem]">
          {card.expire_month}/{card.expire_year}
        </span>
      </div>
    </li>
  );
};

export default PaymentCard;
