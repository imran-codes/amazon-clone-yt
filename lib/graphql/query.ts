import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query getProducts {
    products {
      id
      name
      description
      price
      images {
        id
        url
        fileName
        width
        height
      }
    }
  }
`;

const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(where: { id: $id }) {
      id
      name
      description
      price
      categories {
        id
        name
      }
      images {
        width
        height
        fileName
        url
      }
      reviews {
        id
        rating
        email
        name
        headline
        content
      }
    }
  }
`;

export { GET_PRODUCTS, GET_PRODUCT };
