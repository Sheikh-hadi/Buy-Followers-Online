import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Compoents/Header/Header";
import Footer from "./Compoents/Footer/Footer";

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";

import InstagramFollowers from "./Pages/Instagram/InstagramFollowers";
import InstagramLikes from "./Pages/Instagram/InstagramLikes";
import BuyInstagramAutoLikes from "./Pages/Instagram/BuyInstagramAutoLikes";
import BuyInstagramAutoReels from "./Pages/Instagram/BuyInstagramAutoReels"

import BuyTiktokFollowers from "./Pages/Tiktok/BuyTiktokFollowers";
import BuyTiktokLikes from "./Pages/Tiktok/BuyTiktokLikes";
import BuyTiktokViews from "./Pages/Tiktok/BuyTiktokViews";

import Blog from "./Pages/Blog";
import ContactUs from "./Pages/ContactUs";
import Login from "./Compoents/LogIn/Login";
import CheckOutPage from "./Compoents/CheckOutPage/CheckOutPage";




const App = () => {
  return (
    <>

    <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/CheckOut" element={<CheckOutPage/>} />
          <Route path="/instagramfollowers" element={<InstagramFollowers />} />
          <Route path="/instagramlikes" element={<InstagramLikes />} />
          <Route path="/buyinstagramautolikes" element={<BuyInstagramAutoLikes />} />
          <Route path="/buyinstagramautoreels" element={<BuyInstagramAutoReels />} />

          <Route path="/buytiktokfollowers" element={<BuyTiktokFollowers/>}/>
          <Route path="/buytiktoklikes" element={<BuyTiktokLikes/>}/>
          <Route path="/buytiktokviews" element={<BuyTiktokViews/>}/>

          <Route path="/blog" element={<Blog />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;

