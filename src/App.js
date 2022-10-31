import React from "react";
import Cards from "./components/Cards";
import "./App.css";
import img from "./IMG_20221028_203259.jpg";
import sharebtn from "./sharebtn.jpg";
function App() {
  return (
    <div className="App">
      <img src={sharebtn} alt="share" className="sharebtn"></img>
      <img src={img} className="profile_pic" alt="Abdulwahab's "></img>
      <div className="name">Abdulwahab Yusuf</div>
      <Cards />
    </div>
  );
}

export default App;
