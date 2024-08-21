import React, { useState, useEffect } from 'react';
import cardData from '../../public/list.json';
import { Link } from 'react-router-dom';
import axios from "axios";
// import './Styles.css';
import './cardsstyle.css';
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
       <div class="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 mt-3 p-5">
                {c.map((card) => (
                    <a href={`/events/${card._id}`} class="listing-link">
                        <div class="card col listing-card mb-5" style={{borderRadius:'8px',border:'none'
                        }}>
                            <img
                                src={card.image}
                                className="card-img-top img"
                                alt={card.title}
                            />
                            <div class="card-img-overlay"></div>
                            <div class="card-body">
                                <h6 className="card-title">{card.title}</h6>
                                <p className="card-text">
                                    {card.description.length > 100
                                        ? card.description.slice(0, 80) + "..."
                                        : card.description}
                                </p>
                                <p>
                                    <strong>Date:</strong>{" "}
                                    {new Date(card.date).toLocaleDateString()}
                                    <br />
                                    <strong>Location:</strong> {card.location}
                                    <br />
                                    <strong>Category:</strong> {card.category}
                                    <br />
                                    <strong>Organised By:</strong>{" "}
                                    {card.organisedBy}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
    </div>
  );
};

export default Cards;

