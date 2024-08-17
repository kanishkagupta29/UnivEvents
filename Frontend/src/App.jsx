import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home/Home';
import {Route,Routes} from 'react-router-dom';
import Eventspage from './components/Eventspage';
import Carousel from './components/Carousel';

import Signup from './components/Signup';
import Login from './components/Login';
import CreateEvent from './components/Createevent';
import SearchResults from './components/Searchresults';
function App() {
  
  return (
    <>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/events/:eventid" element={<Eventspage/>} />
       {/* <Route path='./carousel' element={<Carousel/>}/> */}
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/createevent" element={<CreateEvent/>}/>
       <Route path="/searchresults" element={<SearchResults />} />
     </Routes>
    </>
  )
}

export default App
