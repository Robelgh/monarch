import CTA from '../images/cta-bg.jpg'
import HERO from '../images/hero-bg.jpg'
import features from '../images/features.jpg'

function Home() {
  return (
    <>
      <div id="hero">
      <div id="sel-demo" class="carousel slide" data-ride="carousel" data-interval="2000">

        <ol class="carousel-indicators">
          <li data-target="#carousel-demo" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-demo" data-slide-to="1"></li>
          <li data-target="#carousel-demo" data-slide-to="2"></li>
          <li data-target="#carousel-demo" data-slide-to="3"></li>
        </ol>

        <div class="carousel-inner"> 
          <div class="item active"> 
            <img src={CTA} alt="banana"/> 
            {/* <div class="carousel-caption slide-text">
            <h3>The Banana slide</h3>
            <p>Banana is useful for health</p>
            </div> */}
          </div> 
          <div class="item"> 
            <img src={HERO} alt="currant"/> 
            {/* <div class="carousel-caption slide-text">
            <h3>The currant slide</h3>
            <p>Text here</p>
            </div>       */}
        </div> 
          <div class="item"> 
            {/* <img src={features} alt="mango"/> 
            <div class="carousel-caption slide-text">
            <h3>The Mangos</h3>
            <p>Text here</p>
            </div>           */}
          </div>
          <div class="item"> 
            <img src={HERO} alt="strawberries"/>
            {/* <div class="carousel-caption slide-text">
            <h3>The strawberries</h3>
            <p>Text here</p>
            </div>            */}
          </div>   
        </div> 

        <a class="left carousel-control" href="#carousel-demo" data-slide="prev">
          <span class="icon-prev"></span>
        </a>
        <a class="right carousel-control" href="#carousel-demo" data-slide="next">
          <span class="icon-next"></span>
        </a>
 

 </div> 
  </div>
 


  
  </> 
  );
}

export default Home;