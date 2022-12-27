import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../../lib/graphql/query";

const useProduct = (id: string) => {
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { id },
  });
  return { loading, error, data };
};

export default useProduct;
