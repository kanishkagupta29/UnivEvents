// import './App.css'
import React from 'react'
import { Col, Container ,Image, Row,Button,Form,InputGroup} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import carddata from '../../public/list.json';
import axios from "axios";
// import 'Styles.css';
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
        <div class="event-name inline-container" style={{borderColor:'black'}}>
        <Image src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg" height={"80"} width={"80"} roundedCircle />
          <h1 className='head-name' >{event.name}</h1>
          <p className="box box-text inline-box">FREE</p>
          <Button variant="primary" className='ticket-button inline box'>Get Tickets</Button>
        </div>
        <div class="image-box" style={{width:'100vw'}}>
        <Image class="event-image " src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg" height={"400px"} width={"100%"}  />
        <h3 className='name'>EVENT NAME : {event.name}</h3>
        <h3 className='venue'>
  <span className='date'>{event.date}</span>
  <span className='location'>{event.location}</span>
</h3>
        <h4 className='description'>Event Description</h4>
        <p className='describe'>{event.description}</p>
        
</div>
<div className='image-box organiser '>
<h3 >Hosted By</h3>
<div className='inline-container'>
<h4>{event.organiser}</h4>
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