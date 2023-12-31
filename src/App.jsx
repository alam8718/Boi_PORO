import Banner from "./components/Banner/Banner";
import BestBooks from "./components/BestBooks/BestBooks";
import Fotter from "./components/Fotter/Fotter";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Testimonials from "./components/Terstmonials/Testimonials";
import TopBooks from "./components/Top-books/TopBooks";

function App() {
  return (
    <>
      <div className="dark:bg-[#212121]">
        <Navbar />
        <Hero />
        <BestBooks />
        <Banner />
        <TopBooks />
        <Testimonials />
        <Fotter />
      </div>
    </>
  );
}

export default App;
