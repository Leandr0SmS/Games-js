import { imgSelectorArray } from "./functions/random_img_selector.js";
import { update_card_set, reset_card_set, remove_equals_cards } from "./functions/update_card_set.js";
const { useState } = React;
const { createRoot } = ReactDOM;

const Card = ({ src, id, onCardCLick, toggle}) => {

    return (
        <div 
            className="card"
            onClick={onCardCLick}
        > 
            <img
            className="card--img"
            src={toggle ? `./images/img_${src}.jpg` : `./images/back.jpeg`}
            id={id}
            alt={`images of a dog - code: ${src}`}
            aria-hidden="false"
            role="img"
            />
        </div>
    )
};

const App = () => {

    const [numOfCards, setNumOfCards] = useState(6);
    const [cardsSet, setCardsSet] = useState([]);
    const [moves, setMoves] = useState(0);

    const handleChange = (e) => setNumOfCards(e.target.value);

    const handlePlay = (e) => {
        setCardsSet(imgSelectorArray(numOfCards));
        setMoves(0);
    };

    const handleCardCLick = (e) => {
        console.log(e.target.id)
        const cardId = e.target.id;
        const toggleNum = cardsSet.filter(c => c.toggle == true);
        if (toggleNum.length < 1) {
            setCardsSet(update_card_set(cardsSet, cardId));
        } else if (toggleNum.length == 1) {
            const toggled = update_card_set(cardsSet, cardId).filter(c =>  c.toggle == true);
            if (toggled[0].id[0] == toggled[1].id[0]) {
                setCardsSet(remove_equals_cards(update_card_set(cardsSet, cardId)));
                setMoves(m => m + 1);
            } else {
                setCardsSet(update_card_set(cardsSet, cardId));
            }
        } else if (toggleNum.length == 2) {
                setCardsSet(update_card_set(reset_card_set(cardsSet), cardId));
                setMoves(m => m + 1);
        }
    };

    const gameCards = cardsSet.map(card => {
        return (
            <Card
                key={`cards_${card.id}`} 
                src={card.id[0]}
                id={card.id}
                onCardCLick={handleCardCLick}
                toggle={card.toggle}
            />
        )
    })

    console.log(cardsSet)
    console.log(cardsSet.filter(c => c.toglle == true))

    return (
        <React.Fragment>
        <div id="div--info">
            <form 
                id="form"
                onSubmit={e => e.preventDefault()}
            >
                <label htmlFor="input">Selecione o numero de pares:</label>
                <input 
                    type="number"
                    id="input"
                    value={numOfCards}
                    max="10"
                    min="0"
                    onChange={handleChange}
                />
                <button 
                    type="button"
                    id="btn"
                    onClick={handlePlay}
                >Play</button>
            </form>
            <div id="points--div">Tentativas: {moves}</div>
        </div>
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