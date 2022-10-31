import React from "react";
import Button from "./Button";
import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      <Button
        href="https://twitter.com/Ejima_one"
        title="Twitter Link"
        id="twitter"
      />
      <Button
        href="https://training.zuri.team/"
        title="Zuri Team"
        id="btn_zuri"
      />
      <Button href="https://books.zuri.team/" title="Zuri Books" id="books" />
      <Button
        href="https://books.zuri.team/python-for-beginners?ref_id=Ejimaone"
        title="Python Books"
        id="book_python "
      />
      <Button
        href="https://background.zuri.team"
        title="Background Check for Coders"
        id="pitch "
      />
      <Button
        href="https://books.zuri.team/design-rules "
        title="Design Books"
        id="book_design"
      />
    </div>
  );
}

export default Cards;
