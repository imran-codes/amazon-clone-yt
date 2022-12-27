import Image from "next/image";
import React from "react";
import { AmazonButton, Title } from "../../styles/sharedstyles";
import { Container, Info, TitleContainer } from "./styled";
import { removeFromCart } from "../../lib/store/reducers/cartReducer";
import { useAppDispatch } from "../../lib/store/hooks";
import Price from "../Price";

interface IProps {
  id: string;
  title: string;
  image: string;
  price: number;
}

const CheckoutProduct = ({ id, title, image, price }: IProps) => {
  const dispatch = useAppDispatch();

  const removeFromBasket = () => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <Container>
      <Image src={image} alt={title} width={180} height={180} />

      <Info>
        <TitleContainer>
          <Title>{title}</Title>
          <Price itemPrice={price} />
        </TitleContainer>

        <AmazonButton onClick={() => removeFromBasket()}>
          Remove from basket
        </AmazonButton>
      </Info>
    </Container>
  );
};

export default CheckoutProduct;
