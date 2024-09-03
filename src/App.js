import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./CommonComponent/Header/Header";
import Footer from "./CommonComponent/Footer/Footer";

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import InstagramFollowers from "./Pages/Instagram/InstagramFollowers";
import InstagramLikes from "./Pages/Instagram/InstagramLikes";
import BuyInstagramAutoLikes from "./Pages/Instagram/BuyInstagramAutoLikes";
import BuyInstagramAutoReels from "./Pages/Instagram/BuyInstagramAutoReels";

import BuyTiktokFollowers from "./Pages/Tiktok/BuyTiktokFollowers";
import BuyTiktokLikes from "./Pages/Tiktok/BuyTiktokLikes";
import BuyTiktokViews from "./Pages/Tiktok/BuyTiktokViews";

import Blog from "./Pages/Blog";
import ContactUs from "./Pages/ContactUs";
import Login from "./Compoents/LogIn/Login";
import CheckOutPage from "./Compoents/CheckOutPage/CheckOutPage";
import { useState } from "react";

const App = () => {
  const product = [];
  const [item, setItem] = useState();
  // console.log("product", product);
  // console.log("item", item);
  if (item) {
    product.push(item);
  }
  const handleProduct = (newProduct) => {
    setItem(newProduct); 
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Other Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/checkout" element={<CheckOutPage product={product} />} />
        <Route
          path="/instagramfollowers"
          element={<InstagramFollowers handleProduct={handleProduct} />}
        />
        <Route
          path="/instagramlikes"
          element={<InstagramLikes handleProduct={handleProduct} />}
        />
        <Route
          path="/buyinstagramautolikes"
          element={<BuyInstagramAutoLikes handleProduct={handleProduct} />}
        />
        <Route
          path="/buyinstagramautoreels"
          element={<BuyInstagramAutoReels handleProduct={handleProduct} />}
        />
        <Route
          path="/buytiktokfollowers"
          element={<BuyTiktokFollowers handleProduct={handleProduct} />}
        />
        <Route
          path="/buytiktoklikes"
          element={<BuyTiktokLikes handleProduct={handleProduct} />}
        />
        <Route
          path="/buytiktokviews"
          element={<BuyTiktokViews handleProduct={handleProduct} />}
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactus" element={<ContactUs />} />

        {/* Catch-all route for non-matching paths */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
