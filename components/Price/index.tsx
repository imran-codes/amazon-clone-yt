import React from "react";
import { Pence, PriceContainer } from "./styled";

interface IProps {
  itemPrice: number;
}

const Price = ({ itemPrice }: IProps) => {
  const handlePrice = () => {
    const convertToString = itemPrice.toString();
    const convertToArray = convertToString.split("");

    // Remove last two items in array and convert to string
    const getPoundsAmount = convertToArray.slice(0, -2).join("");
    // Get last two items in array and convert to string
    const getPenceAmount = convertToArray
      .splice(convertToArray.length - 2)
      .join("");

    return (
      <>
        <small>£</small>
        <span>
          {getPoundsAmount}
          <Pence>.{getPenceAmount}</Pence>
        </span>
      </>
    );
  };
  return <PriceContainer>{handlePrice()}</PriceContainer>;
};

export default Price;
