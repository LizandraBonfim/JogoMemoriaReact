import React, { useEffect } from 'react';
import main from '../assets/main.png';

import './style.css';

function Card({ src, dataCard, funcao, condition, id }) {
    // const { condition, setCondition } = useContext(UserContext);
    //const [condition, setCondition] = React.useState(false);

    useEffect(() => {

        const cards = document.querySelectorAll('.memory-card');

        cards.forEach((card) => {
            let random = Math.floor(Math.random() * 12);
            card.style.order = random
        })

    }, [])

    function handleClick() {
        //setCondition(true);

        funcao(dataCard, id)
    }




    return <div data-card={dataCard} className={`card memory-card ${condition ? "flip" : ''}`}
        onClick={handleClick} >
        <img src={src} alt="face da carta" className="card-front" />
        <img src={main} alt="verso da carta" className="card-back" />
    </div>
}

export default Card;