import React from "react";
import Button from "./Button";
import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      <Button href="slack.com" id="slack" title="Ejimaone" />
      <Button
        href="https://twitter.com/Ejima_one"
        title="Twitter Link"
        id="twitter"
      />
      <Button
        href="https://training.zuri.team/"
        title="Zuri Team"
        id="btn__zuri"
      />
      <Button href="https://books.zuri.team/" title="Zuri Books" id="books" />
      <Button
        href="https://books.zuri.team/python-for-beginners?ref_id=Ejimaone"
        title="Python Books"
        id="book__python "
      />
      <Button
        href="https://background.zuri.team"
        title="Background Check for Coders"
        id="pitch "
      />
      <Button
        href="https://books.zuri.team/design-rules "
        title="Design Books"
        id="book__design"
      />
    </div>
  );
}

export default Cards;
