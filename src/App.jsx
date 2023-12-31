import Banner from "./components/Banner/Banner";
import BestBooks from "./components/BestBooks/BestBooks";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import TopBooks from "./components/Top-books/TopBooks";

function App() {
  return (
    <>
      <div className="dark:bg-black">
        <Navbar />
        <Hero />
        <BestBooks />
        <Banner />
        <TopBooks />
      </div>
    </>
  );
}

export default App;
