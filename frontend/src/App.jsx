import Navbar from "./homepage/components/Navbar/Navbar";
import Hero from "./homepage/components/Hero/Hero";
import Products from "./homepage/components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./homepage/components/TopProducts/TopProducts";
import Banner from "./homepage/components/Banner/Banner";
import Footer from "./homepage/components/Footer/Footer";
import Popup from "./homepage/components/Popup/Popup";
const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Products />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;

