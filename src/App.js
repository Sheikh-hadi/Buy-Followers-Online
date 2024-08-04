
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";
import ContactUs from "./Pages/ContactUs";
import InstagramFollowers from "./Pages/InstagramFollowers";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>}/>
          <Route path="/instagramfollowers" element={<InstagramFollowers />}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="contactUs" element={<ContactUs/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

