import Advert from "../components/Advert";
import CheckoutProduct from "../components/CheckoutProduct";
import SubTotal from "../components/SubTotal";
import { useAppSelector } from "../lib/store/hooks";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../lib/store/reducers/cartReducer";
import {
  CheckoutBody,
  CheckoutContainer,
  CheckoutTitle,
} from "../styles/checkoutstyles";
import { Container, Main } from "../styles/sharedstyles";
import { CartType } from "../types/cart";

export default function Checkout() {
  const basket = useAppSelector(selectCartItems);
  const basketCount = useAppSelector(selectCartItemsCount);

  return (
    <Container>
      <Main>
        <Advert />
        <CheckoutBody>
          <CheckoutContainer>
            {basket.length === 0 ? (
              <div>
                <h2>Your Shopping Basket is empty</h2>
              </div>
            ) : (
              <div>
                <CheckoutTitle>
                  Your Shopping Basket - {basketCount}{" "}
                  {basketCount > 1 ? "items" : "item"} in basket
                </CheckoutTitle>
                {basket.map((item: CartType, index: number) => (
                  <CheckoutProduct
                    key={index}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                  />
                ))}
              </div>
            )}
          </CheckoutContainer>
          {basket?.length > 0 && <SubTotal />}
        </CheckoutBody>
      </Main>
    </Container>
  );
}
