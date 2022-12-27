import React from "react";
import { Title } from "../../styles/sharedstyles";
import AddToBasketButton from "../AddToBasketButton";
import Price from "../Price";
import Rating from "../Rating";
import { Info, ProductContainer } from "./styled";

interface ProductProps {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
}

const Product = ({ id, title, image, price, rating }: ProductProps) => {
  return (
    <ProductContainer>
      <picture>
        <source srcSet={image} type="image/webp" />
        <img
          src="https://media.graphassets.com/E5jUCkdvRH2qYjf3xU9l"
          alt={title}
        />
      </picture>
      <Info>
        <Title>{title}</Title>
        <Price itemPrice={price} />
        <Rating ratingNumber={rating} />
      </Info>

      <AddToBasketButton
        id={id}
        title={title}
        price={price}
        rating={rating}
        image={image}
      />
    </ProductContainer>
  );
};

export default Product;
