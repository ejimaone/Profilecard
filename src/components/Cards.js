import React from "react";
import Button from "./Button";
import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      <Button href="https://twitter.com/Ejima_one" title="Twitter Link" />
      <Button href="https://training.zuri.team/" title="Zuri Team" />
      <Button href="https://books.zuri.team/" title="Zuri Books" />
      <Button
        href="https://books.zuri.team/python-for-beginners?ref_id=Ejimaone"
        title="Python Books"
      />
      <Button
        href="https://background.zuri.team"
        title="Background Check for Coders"
      />
      <Button
        href="https://books.zuri.team/design-rules "
        title="Design Books"
      />
    </div>
  );
}

export default Cards;
