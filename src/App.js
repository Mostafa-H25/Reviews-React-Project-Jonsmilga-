import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import people from './data'

function App() {
  const [index, setIndex] = useState(0)
  const person = people[index];

  const checkNumber = (number) => {
    if ( number > people.length -1) {
      return 0;
    } else if (number < 0) {
      return people.length -1;
    } else {
      return number
    }
  };

  const prevPerson = () =>{
    setIndex((index) => {
      let newIndex = index -1;
      return checkNumber(newIndex);
    });
  };

  const nextPerson = () =>{
    setIndex((index) => {
      let newIndex = index +1;
      return checkNumber(newIndex);
    });
  }; 

  const randomPerson = () =>{
      let randomNumber = Math.floor(Math.random() * people.length);
      if (randomNumber === index) {
        randomNumber = index =+ 1;
      };
      setIndex(checkNumber(randomNumber));
  }; 

  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>Our Reviews</h2>
          <div className='underline'></div>
        </div>
        <article className='review'>
          <div className='img-container'>
            <img src={person.image} alt={ person.name } className='person-img' />
            <span className='quote-icon'>
              <FaQuoteRight />
            </span>
          </div>
          <h4 className='author'>{person.name}</h4>
          <p className='job'>{person.job}</p>
          <p className='info'>{person.text}</p>
          <div className='button-container'>
            <button className='prev-btn'onClick={prevPerson}>
              <FaChevronLeft />
            </button>
            <button className='next-btn'onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>
          <button className='random-btn' onClick={randomPerson}>
            Surprise Me
          </button>
        </article>
      </section>
    </main>
  );
}

export default App;
