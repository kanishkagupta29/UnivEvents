import React from "react";
import Navbarscroll from '../components/Navbarscroll';
import Cards from "../components/Cards";
import Carousel from '../components/Carousel';
import Searchbar from '../components/Searchbar';
import Footer from '../components/Footer';

function Home(){
    return(
        <>
          <Navbarscroll/>
     <Carousel/>
     <Searchbar/>
   

     <Cards/>
     <Footer />

        </>
    )
}
export default Home;