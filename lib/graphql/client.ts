import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api-eu-west-2.hygraph.com/v2/clc6ceqgb1a5u01ul8wai61np/master",
    useGETForQueries: true,
  }),
  cache: new InMemoryCache(),
});

export default client;
