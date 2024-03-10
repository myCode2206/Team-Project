import React from "react";
import Mynav from "../Components/Navbar/Mynav";
import Herotitle from "../Components/HeroTitle/Herotitle";
// import MyCarousels from "../Components/Carousel/MyCarousels";
import Newsletter from "../Components/Newsletter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Mynav />
      {/* <Header /> */}
      <Herotitle />
      {/* <MyCarousels /> */}
      <Newsletter />
    </>
  );
}

export default App;
