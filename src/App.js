
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/Blog" element={<Blog />} />
 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

