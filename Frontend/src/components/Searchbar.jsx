import React,{useState} from "react";
import { InputGroup,Image,Form,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import Button from "react-bootstrap";
function Searchbar(){
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(e);
        if (query.trim()) {
            navigate(`/searchresults?query=${encodeURIComponent(query)}`);
        }
    };
    return(
        <>
          

{/* <!-- SEARCH BAR  --> */}
     {/* SEARCH BAR */}
     <div className="jumbotron">
                <div className="mainHeading text-center">
                    <h1 style={{fontWeight:"bold"}}>UnivEvents</h1>
                    <p>Where Campus Life Comes Alive!</p>
                    <p className="mainPara">
                    UnivEvents is your go-to platform for all things happening on campus. Discover and stay updated on the latest events, from thrilling concerts to insightful workshops. Whether you're looking to join a club, attend a festival, or just find something fun to do, UnivEvents brings the vibrant college experience right to your fingertips. Connect, celebrate, and make the most of your campus life with us!
                    </p>
                </div>
                <Form onSubmit={handleSearch} className="d-flex my-3 justify-content-center align-items-center" style={{marginRight:'80px'}}  role="search">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 "
              aria-label="Search"
              style={{backgroundColor:'white',color: 'black', // Set text color to black
                borderRadius: '1rem', // Rounded border (Bootstrap default radius for rounded classes)
                borderColor: 'black',width:"80%",paddingRight:'5px'}}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button type="submit" variant="dark" style={{borderRadius:'1rem',backgroundColor:"black",marginTop:'4px'}}>Search</Button>
          </Form>
               
            </div>








    <div class="categoryjumbotron">
      <div class="heading">
          CATEGORIES
      </div>
      <div class="scrollmenu">
          <div class="circle-item">
              <div class="circle">
                  <Image src="https://whataftercollege.com/wp-content/uploads/2019/03/cover-image-1-1024x535.jpg" alt="College" />
              </div>
              <div class="category-name">Fests</div>
          </div>
          <div class="circle-item">
              <div class="circle">
                  <Image src="https://i.pinimg.com/736x/48/19/32/48193259796dfd02550c08b385cd5e80.jpg" alt="School" />
              </div>
              <div class="category-name">Sports</div>
          </div>
          <div class="circle-item">
              <div class="circle">
              <Link to={`/eventsbycategory/Workshops`}>
                  <Image src="https://aucenter.edu/wp-content/uploads/2023/04/IDEA-WORKSHOP-PIC-1024x576.png" alt="Central" />
              </Link>
              </div>
              <div class="category-name">Workshops</div>
          </div>
          <div class="circle-item">
          {/* <Link to={`/eventsbycategory/${card.category}`}> */}
              <div class="circle">
              <Link to={`/eventsbycategory/Orientation`}>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnTpvwAHOIeP5Hv5-oOMCkP-4iOukNS7WvmjFwBxx2dbK0HE1tPoUdZ4_OdO7PrZFssQ&usqp=CAU" alt="orientation"/>
              </Link>
              </div>
              
              <div class="category-name">Orientation</div>
              {/* </Link> */}
          </div>
          {/* <!-- Add more items as needed --> */}
          <div class="circle-item">
            <div class="circle">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4RXbtSbxVSNsxBATv_igJXJG1YK0QPGs0Mw&s" alt="forum"/>
            </div>
            <div class="category-name">Forums</div>
        </div>
        <div class="circle-item">
            <div class="circle">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRmxTD6LZxmR6ucXHmkS3f2HSZj5qhKci5sg&s" alt="conference"/>
            </div>
            <div class="category-name">Conference</div>
        </div>
        <div class="circle-item">
            <div class="circle">
                <Image src="https://img.freepik.com/premium-vector/art-festival-poster-template_131199-1.jpg"/>
            </div>
            <div class="category-name">Art</div>
        </div>
        <div class="circle-item">
            <div class="circle">
                <Image src="https://i.pinimg.com/564x/29/4c/e0/294ce071f8296c4d4ca39af8267cc2b0.jpg"/>
            </div>
            <div class="category-name">Cultural events</div>
        </div>
        <div class="circle-item">
          <div class="circle">
              <Image src="https://www.dunnpelliermedia.com/wp-content/uploads/2022/05/CS_WellnessYourWay.jpg" alt="College" />
          </div>
          <div class="category-name">Health-wellness</div>
      </div>
      <div class="circle-item">
          <div class="circle">
              <img src="https://www.askiitians.com/blog/wp-content/uploads/2014/08/50.png" height="40px" width="10px" alt="School" />
          </div>
          <div class="category-name">Tech-innovation</div>
      </div>
      <div class="circle-item">
          <div class="circle">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLyWSTODpUqa3uvWoC5uui5nS7y3TCXAXew&s" alt="Central" />
          </div>
          <div class="category-name">Community services</div>
      </div>
      <div class="circle-item">
          <div class="circle">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuf1h93T2MEvVdvZnh-KI6pADzxnVxMSaAsg&s" alt="IIT"/>
          </div>
          <div class="category-name">Organization</div>
      </div>
      </div>
  </div>
 


        </>
    )
}
export default Searchbar;