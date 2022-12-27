import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider, DefaultTheme } from "styled-components";
import Header from "../components/Header";
import client from "../lib/graphql/client";
import { store } from "../lib/store";
import GlobalStyle from "../styles/globalstyles";

const theme: DefaultTheme = {
  colors: {
    black: "#111",
    white: "#fff",
    background: "#EAEDED",
    orange: "orange",
    navBg: "#131921",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
      </Provider>
    </>
  );
}
