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


    const [hasFlipedCard, setHasFlipedCard] = useState(false);
    const [firstCard, setFirstCard] = useState(null);
    const [secondCard, setSecondCard] = useState(null);
    // const [liz, setLiz] = useState(itens);
    const [isFlip, setIsFlip] = useState(false);
    const [block, setBlock] = useState(false);


    useEffect(() => {

        console.log('firrrst', firstCard);
        console.log('secooond', secondCard);

        if (!firstCard || !secondCard) {
            console.log('!firstCard || !secondCard)', !firstCard || !secondCard)

            return;
        }

        if (firstCard === secondCard) {
            console.log('firstCard === secondCard', firstCard === secondCard)

            setFirstCard(setIsFlip(true));
            setSecondCard(setIsFlip(true));
            setBlock(true);

            setTimeout((x) => {

                console.log('verdadeiro');

                disableCards();

            }, 1500)

            return;
        }

        setFirstCard(setIsFlip(false));
        setSecondCard(setIsFlip(false));

        setTimeout(() => {

            setFirstCard(null);
            setSecondCard(null);
            setBlock(false);

            return

            // liz.find(item => item.name === secondCard).revert()
        }, 1500);

    }, [firstCard, secondCard])

    function handleClick(dataCard) {
        console.log('id', isFlip);

        if (block) return;

        setIsFlip(true)
        if (!hasFlipedCard) {
            setHasFlipedCard(true);
            console.log('card', dataCard);



            setFirstCard(dataCard);
            console.log('first', firstCard)
            return;
        }
        console.log(dataCard)
        setSecondCard(dataCard);
        setHasFlipedCard(false);




    }

    (function shuffle() {
        const cards = document.querySelectorAll('.memory-card');

        cards.forEach((card) => {
            let random = Math.floor(Math.random() * 12);
            card.style.order = random
        })
    })()

    function disableCards() {
        setFirstCard(null);
        setBlock(false);
        setSecondCard(null);

    }





    return (
        <div className="memory-game">


            <Card src={anna} dataCard="anna" funcao={() => handleClick("anna")} condition={isFlip} />
            <Card src={elsa} dataCard="elsa" funcao={handleClick} condition={isFlip} />
            <Card src={frozen} dataCard="frozen" funcao={handleClick} condition={isFlip} />
            <Card src={olaf} dataCard="olaf" funcao={handleClick} condition={isFlip} />
            <Card src={irmas} dataCard="irmas" funcao={handleClick} condition={isFlip} />
            <Card src={todos} dataCard="todos" funcao={handleClick} condition={isFlip} />

            <Card src={anna} dataCard="anna" funcao={handleClick} condition={isFlip} />
            <Card src={elsa} dataCard="elsa" funcao={handleClick} condition={isFlip} />
            <Card src={frozen} dataCard="frozen" funcao={handleClick} condition={isFlip} />
            <Card src={olaf} dataCard="olaf" funcao={handleClick} condition={isFlip} />
            <Card src={irmas} dataCard="irmas" funcao={handleClick} condition={isFlip} />
            <Card src={todos} dataCard="todos" funcao={handleClick} condition={isFlip} />

        </div>
    )
}

export default Jogo
