
import "./App.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Pages/Home";
// import AboutUs from "./Pages/AboutUs";
import InstagramFollowers from "./Pages/InstagramFollowers";

const App = () => {
  return (
    <>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>}/>
 
        </Routes>
      </BrowserRouter> */}
      <InstagramFollowers/>
    </>
  );
}

export default App;

