import React from "react";
import { useAppSelector } from "../../lib/store/hooks";
import {
  selectCartItemsCount,
  selectCartTotal,
} from "../../lib/store/reducers/cartReducer";
import { AmazonButton } from "../../styles/sharedstyles";
import Price from "../Price";
import { Container, Delivery, TotalContainer } from "./styled";

const SubTotal = () => {
  const subTotal = useAppSelector(selectCartTotal);
  const quantity = useAppSelector(selectCartItemsCount);
  return (
    <Container>
      <Delivery>
        Your order qualifies for FREE Delivery in the UK. Delivery Details
        Select this option at checkout.
      </Delivery>
      <TotalContainer>
        <p>SubTotal</p>
        <p>({quantity} items):</p>
        <Price itemPrice={subTotal} />
      </TotalContainer>
      <div>
        <input type="checkbox" />
        This order contains a gift
      </div>
      <AmazonButton>Proceed to Checkout</AmazonButton>
    </Container>
  );
};

export default SubTotal;
