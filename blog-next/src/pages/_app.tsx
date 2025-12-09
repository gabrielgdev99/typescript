import { AppProps } from "next/app";
import { GlobalStyes } from "../styles/global-styles";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyes />
    </ThemeProvider>
  );
}

export default MyApp;
