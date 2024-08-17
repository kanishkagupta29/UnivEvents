import React from "react";
import { Image} from "react-bootstrap";

function Carousel(){
    return(
        <>
        
            <section id="carousel">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
     
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
 
      {/* <!-- Wrapper for slides --> */}
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <Image src="https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="New York" />
          <div class="carousel-caption">
            <h3>Workshops</h3>
            <p>The atmosphere full of knowledge</p>
          </div>
        </div>
 
        <div class="item">
          <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZSUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D" alt="Chicago"/>
          <div class="carousel-caption">
            <h3>Skills</h3>
            <p>Increase your skillset</p>
          </div>
        </div>
 
        <div class="item">
          <Image src="https://whataftercollege.com/wp-content/uploads/2019/03/cover-image-1-1024x535.jpg" alt="Los Angeles" />
          <div class="carousel-caption">
            <h3>College Fests</h3>
            <p>A night we won't forget.</p>
          </div>
        </div>
      </div>
 
      {/* <!-- Left and right controls --> */}
      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </section>


        </>
    );
};
export default Carousel;