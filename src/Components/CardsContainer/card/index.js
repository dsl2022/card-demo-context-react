import { useEffect, useState } from "react";

function Card({ card }) {
  //   const card = card.cards["0"];
  let cardUsed = card.cards[0].images;
  return (
    <div className="card">
      <img src={cardUsed.svg} />
      card
    </div>
  );
}

export default Card;
