import React from "react";
import { Container } from "./styled";
import StarIcon from "@mui/icons-material/Star";

interface RatingProps {
  ratingNumber: number;
}

const Rating = ({ ratingNumber }: RatingProps) => {
  return (
    <Container>
      {Array(ratingNumber)
        .fill(<StarIcon className="product__star" />)
        .map((item) => (
          <p>{item}</p>
        ))}
    </Container>
  );
};

export default Rating;
