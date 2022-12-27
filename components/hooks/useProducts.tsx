import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../lib/graphql/query";

const useProducts = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  return { loading, error, data };
};

export default useProducts;
