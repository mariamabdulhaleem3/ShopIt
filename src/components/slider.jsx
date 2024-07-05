import { Component } from "react";
import { Link } from "react-router-dom";

class Slider extends Component{
   
    render(){
        return(

<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active ">
      <img src='imag/11.jpg' class="d-block w-100"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Shop it</h5>
        <b>All you need in one place</b>
        <br/>
        <Link to="/register" id="reg" class="btn my-2">register</Link>
      </div>
    </div>
    <div class="carousel-item ">
      <img src="imag/22.jpg" class="d-block w-100 " alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Shop it</h5>
        <b>Here you can find your favourite styles easily</b>
        <br/>
        <Link to="/register" id="reg" class="btn my-2">register</Link>
      </div>
    </div>
    <div class="carousel-item ">
      <img src="imag/33.jpg" class="d-block w-100 " alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Shop it</h5>
        <b>register and add to your cart</b>
        <br/>
        <Link to="/register" id="reg" class="btn my-2">register</Link>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        );
    }
}
export default Slider;