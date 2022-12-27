import { useRouter } from "next/router";
import Advert from "../../components/Advert";
import useProduct from "../../components/hooks/useProduct";
import ProductDetails from "../../components/ProductDetails";
import { Container, Main } from "../../styles/sharedstyles";

export default function ProductInfo() {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useProduct(id as string);

  if (loading) return <p>Loading</p>;
  if (error) return <p>error</p>;

  const { product } = data;

  console.log(product, "product");
  return (
    <Container>
      <Main>
        <Advert />
        <ProductDetails product={product} />
      </Main>
    </Container>
  );
}
