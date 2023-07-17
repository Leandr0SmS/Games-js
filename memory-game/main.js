const { useState, useEffect } = React;
const { createRoot } = ReactDOM;

const Card = ({ src }) => {
    return (
        <div className="card">
            <img
                className="card--img"
                src={`./images/${src}`}
                alt={`images of a dog - code: ${src}`}
                aria-hidden="false"
                role="img"
            />
        </div>
    )
};

const App = () => {

    return (
        <React.Fragment>
            <h1>Memory Game</h1>
            <div id="game--grid">

            </div>
        </React.Fragment>
    )
};

//Render
const app = document.getElementById('root');
const root = createRoot(app);
root.render(<App/>)