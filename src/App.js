import { useEffect, useState } from "react";
import CardDisplayContainer from "./Components/CardsContainer";
import { CardsContext } from "./Contexts/CardsContext";
import "./App.css";

function App() {
  const [deckId, setDeckId] = useState("");
  const [playerCards, setPlayerCards] = useState([]);
  const BASE_URL = "https://www.deckofcardsapi.com/api/deck";
  useEffect(() => {
    const shuffle = async () => {
      const newDeck = await fetch(`${BASE_URL}/new/shuffle/?deck_count=1`);
      const newDeckResult = await newDeck.json();
      console.log(newDeckResult);
      setDeckId(newDeckResult.deck_id);
    };
    shuffle();
  }, []);
  const drawCardHandle = async () => {
    const newCard = await fetch(`${BASE_URL}/${deckId}/draw/?count=1`);
    const newCardResult = await newCard.json();
    setPlayerCards([...playerCards, newCardResult]);
  };
  console.log({ playerCards });
  return (
    <div className="App">
      <CardsContext.Provider value={playerCards}>
        <CardDisplayContainer />
      </CardsContext.Provider>

      <button onClick={drawCardHandle}>Draw a card</button>
    </div>
  );
}

export default App;
