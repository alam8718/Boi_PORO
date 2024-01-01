import {useEffect} from "react";
import Banner from "./components/Banner/Banner";
import BestBooks from "./components/BestBooks/BestBooks";
import Fotter from "./components/Fotter/Fotter";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Testimonials from "./components/Terstmonials/Testimonials";
import TopBooks from "./components/Top-books/TopBooks";

// aos import
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="dark:bg-[#212121] bg-white duration-300">
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
