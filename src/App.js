import React from "react";
import Cards from "./components/Cards";
import "./App.css";
import img from "./images/IMG_20221028_203259.jpg";
import sharebtn from "./images/sharebtn.jpg";
import slack from "./images/slack.png";
import icon from "./images/Icon.png";
import footext from "./images/Footertext.png";
import I4G from "./images/I4G.png";
import vector from "./images/Vector.png";
function App() {
  return (
    <div className="App">
      <div>
        <img src={sharebtn} alt="share" className="sharebtn"></img>
      </div>
      <div className="pic">
        <img src={img} className="profile_pic" alt="Abdulwahab's "></img>
      </div>
      <div className="name">
        <p>Abdulwahab Yusuf</p>
      </div>
      <Cards />
      <div className="footer_image">
        <img src={slack} alt="slack"></img>
        <img src={icon} alt="slack"></img>
      </div>
      <div className="logo">
        <img src={vector} alt="logo" className="logov"></img>
        <img src={footext} alt="logo" className="logof"></img>
        <img src={I4G} alt="logo" className="logoi"></img>
      </div>
    </div>
  );
}

export default App;
