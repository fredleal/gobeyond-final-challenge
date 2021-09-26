import { GlobalStyle } from "./styles/global";
import Header from './components/Header';
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContent/>
      <Footer />   
    </>
  );
}
