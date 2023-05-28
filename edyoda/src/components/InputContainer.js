import React, { useContext, useState } from "react";
import "./InputContainer.css";
import TextField from "./TextField";
import { PlanContext } from "../context/PlanContext";

const InputContainer = () => {
  const { setMonth, setPerMonth } = useContext(PlanContext);
  const [activeIndex, setActiveIndex] = useState(1);

  const handleTextFieldClick = (index, month, perMonth) => {
    setActiveIndex(index);
    setMonth(month);
    setPerMonth(perMonth);
  };

  return (
    <div className="container">
      <TextField
        months={12}
        total={99}
        perMonth={8}
        disabled={true}
        active={activeIndex === 0}
        tag={"Offer expired"}
      />
      <TextField
        months={12}
        total={179}
        perMonth={15}
        disabled={false}
        active={activeIndex === 1}
        tag={"Recommended"}
        onClick={() => handleTextFieldClick(1, 12, 15)}
      />
      <TextField
        months={6}
        total={149}
        perMonth={25}
        disabled={false}
        active={activeIndex === 2}
        onClick={() => handleTextFieldClick(2, 6, 25)}
      />
      <TextField
        months={3}
        total={99}
        perMonth={33}
        disabled={false}
        active={activeIndex === 3}
        onClick={() => handleTextFieldClick(3, 3, 33)}
      />
    </div>
  );
};

export default InputContainer;
