import React, { useState, useEffect } from 'react';
import cardData from '../../public/list.json';
import { Link } from 'react-router-dom';
import axios from "axios";
const Cards = () => {
  const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get("http://localhost:8080/cards");
                console.log(response.data);
                setCards(response.data);
            } catch (error) {
                console.error("Error fetching cards:", error);
            }
        };

        fetchCards();
    }, []);
  const c=cards.slice(0,6);
  console.log(c);
  {c.map((card)=>(
    console.log(card._id)
  ))};
  return (
    <div>
      <div className="card">    
        <div className="row">
          {c.map((card) => (
            
            <div className="col-sm-4 " key={card.id}>
              <Link to={`/events/${card._id}`}>
              
              <div className={`panel panel-${card.id % 3 === 1 ? 'primary' : card.id % 3 === 2 ? 'danger' : 'success'} `}>
                <div className="panel-heading">{card.heading}</div>
                <div className="panel-body">
                  <img src={card.imgSrc} className="img-responsive" style={{ width: '100%' }} alt="Image" />
                </div>
                <div className="panel-footer">
                  <h6>Name: {card.name}</h6>
                  <h6>Date: {card.date}</h6>
                  <h6>Description: {card.description}</h6>
                </div>
              </div>
              </Link>
            </div>
            
          ))}
        </div>
      </div>
      <br />
    </div>
  );
};

export default Cards;

