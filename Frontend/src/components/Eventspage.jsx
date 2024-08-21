// import './App.css'
import "./eventstyle.css";
import React from 'react'
import { Col, Container ,Image, Row,Button,Form,InputGroup} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import carddata from '../../public/list.json';
import axios from "axios";
// import './Styles.css';
import Navbarscroll from './Navbarscroll';
import Footer from './Footer';
const Eventspage=()=>{
  
  // const { eventId } = useParams();
  // console.log(eventId);
  // // For demonstration, hardcoded event data
  // const events = {
  //   1: {
  //     name: "Marathon Event",
  //     description: "Detailed description for the Marathon Event.",
  //     organiser: "Zer Wellness",
  //     date: "20 August 2024, Tuesday, 4pm",
  //     location: "Mumbai, India",
  //   },
  //   2: {
  //     name: "Concert",
  //     description: "Detailed description for the Concert.",
  //     organiser: "Music Mania",
  //     date: "15 September 2024, Sunday, 7pm",
  //     location: "Delhi, India",
  //   },
  // };

  // const event = events[eventId];
  const {eventid} = useParams(); // Get the event ID from the URL params
  console.log(eventid);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/event/${eventid}`);
        setEvent(response.data);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEvent();
  }, [eventid]);
  if (!event) {
    return <h1>Event not found</h1>;
  }

  return (
    <>
    <Navbarscroll/>
    {/* <Container> */}
     
      <Row sm={2}>
        <Col sm={3}>
        <div className="event-name inline-container" style={{ borderColor: 'black' }}>
    <Image src={event.image} height={"80"} width={"80"} roundedCircle />
    <div>
        <h1 className="head-name"  style={{ fontFamily: 'Georgia, sans-serif',fontWeight:'bold' }}>{event.title}</h1>
        <h4 className="event-subtitle">{event.organisedBy}</h4> {/* New line of text */}
    </div>
    <p className="box box-text inline-box">FREE</p>
    <Button variant="primary" className="ticket-button inline box">Get Tickets</Button>
</div>

        <div class="image-box " style={{width:'90vw'}}>
        <Image class="event-image" src={event.image} height={"400px"} width={"100%"}  />
        <br/>
        <p></p>
        <h1></h1>
        <h3 className='name' style={{ fontFamily: 'Georgia, sans-serif',fontWeight:'bold' }}>EVENT NAME : {event.title}</h3>
        
        <h3 className='venue-name' style={{ fontFamily: 'Georgia, sans-serif',fontWeight:'bold' }}>EVENT VENUE :</h3>
  <h4 className='date mt-4' >DATE: {event.date}</h4>
  <h4 className='location'>LOCATION : {event.location}</h4>
  <div className='mt-3 '></div>
        <h4 className='description' style={{ fontFamily: 'Georgia, sans-serif',fontWeight:'bold' }}>EVENT DESCRIPTION : </h4>
       <h1></h1>
        <h5 className='describe'>{event.description}</h5>
        
</div>
<div className='image-box organiser '>
<h3 >Hosted By</h3>
<div className='inline-container'>
<h4>{event.organisedBy}</h4>
<Button className='organise inline-block follow'>Follow</Button>
<Button className='organise contact'>Contact</Button>
</div>
</div>
<div className='crowd-image'>
  <Image src='https://static.vecteezy.com/ti/vecteur-libre/p1/3095886-dessin-foule-de-personnes-lever-la-main-au-dessus-de-la-tete-vecteur-gratuit-vectoriel.jpg' width={"1334"} height={"300px"}></Image>
</div>
<div style={{width:'100vw'}} ><Footer/></div>

        </Col>
      </Row>
          {/* </Container> */}
      
    </>
  )
  
}
export default Eventspage;