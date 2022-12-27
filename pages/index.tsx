import Link from "next/link";
import useProducts from "../components/hooks/useProducts";
import Product from "../components/Product";
import {
  BackgroundImg,
  HomeContainer,
  ProductRows,
} from "../styles/homestyles";
import { ProductType } from "../types/product";

export default function Home() {
  const { loading, error, data } = useProducts();

  if (loading) return <p>Loading</p>;
  if (error) return <p>error</p>;
  return (
    <HomeContainer>
      <BackgroundImg
        src="https://m.media-amazon.com/images/I/61xnEcip5RL._SX3000_.jpg"
        alt="Amazon Background"
      />
      <ProductRows>
        {!!data &&
          data?.products.map((product: ProductType) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <Product
                id={product.id}
                title={product.name}
                price={product.price}
                rating={4}
                image={product?.images[0]?.url}
              />
            </Link>
          ))}
      </ProductRows>
    </HomeContainer>
  );
}
