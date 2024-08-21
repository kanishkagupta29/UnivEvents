import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import Navbarscroll from "./Navbarscroll";
import Footer from "./Footer";
// import './Styles.css';

export default function SearchResults() {
    const [results, setResults] = useState([]);
    const location = useLocation();
    const { category } = useParams(); // Get the category from the URL params

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (category) {
                    // Fetch specific event by category
                    const response = await axios.get(`http://localhost:8080/events/${category}`);
                    setResults(response.data);
                } else {
                    // Perform search query
                    const query = new URLSearchParams(location.search).get("query");
                    if (query) {
                        const response = await axios.get("http://localhost:8080/search", {
                            params: { query },
                        });
                        setResults(response.data);
                    }
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [category, location.search]);

    if (!results.length) {
        return <h1>No results found</h1>;
    }


    return (
        <>
        <Navbarscroll/>
        <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 p-5">
            {results.length > 0 ? (
                results.map((card) => (
                    // <Link to={`/events/${card._id}`}>
                    <a href={`/events/${card._id}`} class="listing-link">
                        <div class="card col listing-card mb-5">
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
                    
                ))
            ) : (
                <p>No results found</p>
            )}
        </div>
        <Footer/>
        </>
    );
}