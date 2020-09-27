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



    // const itens = [
    //     {
    //         id: 1,
    //         name: 'anna',
    //         image: anna,
    //         isFlip: false,
    //         revert: function () {
    //             this.isFlip = !this.isFlip;
    //         }
    //     },
    //     {
    //         id: 2,
    //         name: 'elsa',
    //         image: elsa,
    //         isFlip: false,
    //         revert: function () {
    //             this.isFlip = !this.isFlip;
    //         }
    //     },
    //     {
    //         id: 3,
    //         name: 'anna',
    //         image: anna,
    //         isFlip: false,
    //         revert: function () {
    //             this.isFlip = !this.isFlip;
    //         }
    //     },
    //     {
    //         id: 4,
    //         name: 'elsa',
    //         image: elsa,
    //         isFlip: false,
    //         revert: function () {
    //             this.isFlip = !this.isFlip;
    //         }
    //     },
    // ];

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
    const [liz, setLiz] = useState(itens);
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

            liz.find(x => x.name === firstCard).isFlip = true;
            liz.find(x => x.name === secondCard).isFlip = true;
            setBlock(true);

            setTimeout((x) => {

                console.log('verdadeiro');

                disableCards();

            }, 1500)

            return;
        }

        console.log('liz.find(x => x.name === firstCard).isFlip', liz.find(x => x.name === firstCard).isFlip)

        console.log('liz.find(x => x.name === secondCard).isFlip', liz.find(x => x.name === secondCard).isFlip)

        console.log('liz.find(x => x.name === firstCard || secondCard).isFlip', liz.find(x => x.name === firstCard || secondCard).isFlip)

        liz.find(x => x.name === firstCard).isFlip = false;
        liz.find(x => x.name === secondCard).isFlip = false;
        // liz.find(x => x.name === firstCard && secondCard).isFlip = false;

        setTimeout(() => {

            setFirstCard(null);
            setSecondCard(null);
            setBlock(false);

            return

            // liz.find(item => item.name === secondCard).revert()
        }, 1500);

    }, [firstCard, secondCard])

    function handleClick(dataCard, id) {
        console.log('id', id);
        if (block) return;

        liz.find(x => x.id === id).isFlip = true;

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



    function disableCards() {
        setFirstCard(null);
        setBlock(false);
        setSecondCard(null);

    }





    return (
        <div className="memory-game">
            {
                liz.map(item => (
                    <Card key={item.id} id={item.id} src={item.image} condition={item.isFlip} dataCard={item.name} funcao={handleClick} />
                ))

            }

            {/* <Card src={anna} dataCard="anna" funcao={handleClick} />
            <Card src={elsa} dataCard="elsa" funcao={handleClick} />
            <Card src={frozen} dataCard="frozen" funcao={handleClick} />
            <Card src={olaf} dataCard="olaf" funcao={handleClick} />
            <Card src={irmas} dataCard="irmas" funcao={handleClick} />
            <Card src={todos} dataCard="todos" funcao={handleClick} />

            <Card src={anna} dataCard="anna" funcao={handleClick} />
            <Card src={elsa} dataCard="elsa" funcao={handleClick} />
            <Card src={frozen} dataCard="frozen" funcao={handleClick} />
            <Card src={olaf} dataCard="olaf" funcao={handleClick} />
            <Card src={irmas} dataCard="irmas" funcao={handleClick} />
            <Card src={todos} dataCard="todos" funcao={handleClick} /> */}

        </div>
    )
}

export default Jogo
