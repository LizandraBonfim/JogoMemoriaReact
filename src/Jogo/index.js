import React, { useState, useEffect } from 'react'
import Card from '../Card';
import anna from '../assets/anna.jpg';
import elsa from '../assets/elsa.jpg';
import frozen from '../assets/frozen.jpg';
import olaf from '../assets/frozen-olaf.jpg';
import irmas from '../assets/irmas.jpg';
import todos from '../assets/todos.jpg';


import './style.css';

function Jogo() {


    const itens = [
        {
            id: 1,
            name: 'anna',
            image: anna,
            isFlip: false,

        },
        {
            id: 2,
            name: 'elsa',
            image: elsa,
            isFlip: false,

        },
        {
            id: 3,
            name: 'anna',
            image: anna,
            isFlip: false,

        },
        {
            id: 4,
            name: 'elsa',
            image: elsa,
            isFlip: false,

        },

        {
            id: 5,
            name: 'frozen',
            image: frozen,
            isFlip: false,

        },
        {
            id: 6,
            name: 'olaf',
            image: olaf,
            isFlip: false,

        },

        {
            id: 7,
            name: 'todos',
            image: todos,
            isFlip: false,

        },

        {
            id: 8,
            name: 'irmas',
            image: irmas,
            isFlip: false,

        },

        {
            id: 9,
            name: 'olaf',
            image: olaf,
            isFlip: false,

        },

        {
            id: 10,
            name: 'frozen',
            image: frozen,
            isFlip: false,

        },

        {
            id: 11,
            name: 'irmas',
            image: irmas,
            isFlip: false,

        },

        {
            id: 12,
            name: 'todos',
            image: todos,
            isFlip: false,

        },
    ];

    const [hasFlipedCard, setHasFlipedCard] = useState(false);
    const [firstCard, setFirstCard] = useState(null);
    const [secondCard, setSecondCard] = useState(null);
    const [firstCardID, setFirstCardID] = useState(null);
    const [secondCardID, setSecondCardID] = useState(null);
    const [liz,] = useState(itens);
    const [block, setBlock] = useState(false);


    useEffect(() => {



        if (!firstCard || !secondCard) return;

        if (firstCard === secondCard) {

            liz.find(x => x.name === firstCard).isFlip = true;
            liz.find(x => x.name === secondCard).isFlip = true;
            setBlock(true);

            setTimeout((x) => {


                disableCards();

            }, 1000)

            return;
        }


        setTimeout(() => {
            liz.find(x => x.id === firstCardID).isFlip = false;
            liz.find(x => x.id === secondCardID).isFlip = false;

            setFirstCard(null);
            setSecondCard(null);
            setFirstCardID(null);
            setSecondCardID(null);
            setBlock(false);

            return

        }, 500);

    }, [firstCard, secondCard])

    function handleClick(dataCard, id) {
        if (block) return;

        liz.find(x => x.id === id).isFlip = true;

        if (!hasFlipedCard) {
            setHasFlipedCard(true);
            setFirstCard(dataCard);
            setFirstCardID(id);
            return;
        }
        setSecondCard(dataCard);
        setSecondCardID(id);
        setHasFlipedCard(false);



    }


    function disableCards() {
        setFirstCard(null);
        setSecondCard(null);
        setFirstCardID(null);
        setSecondCardID(null);
        setBlock(false);

    }


    return (
        <div className="memory-game">
            {
                liz.map(item => (
                    <Card key={item.id} id={item.id} src={item.image} condition={item.isFlip} dataCard={item.name} funcao={handleClick} />
                ))

            }

        </div>
    )
}

export default Jogo
