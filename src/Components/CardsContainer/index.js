import { useEffect, useState } from "react";
import { CardsContext } from "../../Contexts/CardsContext";
import { useContext } from "react";
import Card from "./card/index";
function CardDisplayContainer() {
  const cards = useContext(CardsContext);
  const cardsRender = cards.map((card) => {
    return (
      <li>
        <Card card={card} />
      </li>
    );
  });
  return <div className="cards-display-conainer">{cardsRender}</div>;
}

export default CardDisplayContainer;
