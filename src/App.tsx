import { Features } from "./components/layout/Features";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Hero } from "./components/layout/Hero";
import { LatestArticles } from "./components/layout/LatestArticles";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <LatestArticles />
      </main>
      <Footer />
    </>
  );
};
