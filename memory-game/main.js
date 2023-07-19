import { imgSelectorArray } from "./functions/random_img_selector.js";
const { useState, useEffect } = React;
const { createRoot } = ReactDOM;

const Card = ({ src, id, onCardCLick, toggle}) => {

    return (
        <div 
            className="card"
            onClick={onCardCLick}
            id={id}
        >
            {
                toggle ?   
                <img
                className="card--img"
                src={`./images/img_${src}.jpg`}
                alt={`images of a dog - code: ${src}`}
                aria-hidden="false"
                role="img"
                />
                : undefined
            }
        </div>
    )
};

const App = () => {

    const [numOfCards, setNumOfCards] = useState(0);
    const [cardsSet, setCardsSet] = useState([]);

    const handleChange = (e) => setNumOfCards(e.target.value);

    const handlePlay = (e) => setCardsSet(imgSelectorArray(numOfCards));

    const handleCardCLick = (e) => {
        console.log(e.target)
    };

    const gameCards = cardsSet.map(card => {
        return (
            <Card
                key={`cards_${card.cardNum + card.cardLetter}`} 
                src={card.cardNum}
                id={card.cardNum + card.cardLetter}
                onCardCLick={handleCardCLick}
            />
        )
    })

    console.log(cardsSet)

    return (
        <React.Fragment>
            <h1>Memory Game</h1>
            <form 
                id="form"
                onSubmit={e => e.preventDefault()}
            >
                <label htmlFor="input">Selecione o numero de cartas:</label>
                <input 
                    type="number"
                    id="input"
                    max="20"
                    min="0"
                    onChange={handleChange}
                />
                <button 
                    type="button"
                    id="btn"
                    onClick={handlePlay}
                >Play</button>
            </form>
            <div id="cards-selected"></div>
            <div id="game--grid">
                {gameCards}
            </div>
        </React.Fragment>
    )
};

//Render
const app = document.getElementById('root');
const root = createRoot(app);
root.render(<App/>)