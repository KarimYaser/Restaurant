import React from "react";
import Header from "./Header";
import './Home.css'
// import 1 from '../../imgs/1.png'
import prideImage from '../../imgs/1.png'
import ingredientsImage from '../../imgs/2.png'
import data from "../../data";
import { Carousel } from "react-bootstrap";
import order1 from "../../imgs/slider_1.jpg"
import order_3 from "../../imgs/slider_2.jpg"

function Home() {
    const blogItem = data.map((item) => {
        return (
            <div className="col-md-4">
                <div className="box">
                    <img src={item.img} />
                    <h5>{item.title}</h5>
                    <span>Time: {item.time}</span>
                    <h6>${item.price}</h6>
                    <h6 className="ds">${item.dsprice}</h6>
                    <button>Learn More</button>
                </div>
            </div>
        )
    })
    return (
        <>
            <Header />
            <section className="numbers">
                <div className="container">
                    <div className="row">

                        <div className="col-md-3">
                            <h2>1268+</h2>
                            <h6>saving</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>5786+</h2>
                            <h6>PHOTOS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>1440++</h2>
                            <h6>ROCKETS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>7110++</h2>
                            <h6>GLOBES</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pride">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <img src={prideImage} />
                        </div>
                        <div className="col-md-5">
                            <h2>We pride ourselves on making real food from the best ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ingredients">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <h2>We make everything by hand with the best possible ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <ul>
                                <li>Etiam sed dolor ac diam volutpat.</li>
                                <li>Etiam sed dolor ac diam volutpat.</li>
                                <li>Etiam sed dolor ac diam volutpat.</li>
                            </ul>
                            <button>Learn More</button>
                        </div>
                        <div className="col-md-7">
                            <img src={ingredientsImage} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="paralex">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>When a man's stomach is full it makes no<br />
                                difference whether he is rich or poor.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br />
                                finibus bibendum in <br />sit amet leo. Mauris feugiat erat tellus.</p>
                            <li>
                                <a href="#">Watch Our Video</a>
                            </li>
                        </div>
                    </div>
                </div>
            </section>
            <section className="plog">
                <div className="container">
                    <div >
                        <h2>Explore Our Foods</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains,
                            far from the countries Vokalia and Consonantia,
                            there live the blind texts. Separated they live
                            in Bookmarksgrove.</p>
                    </div>
                    <div className="row">
                        {blogItem}
                    </div>
                </div>
            </section>
            <section className="slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>Testimonials</h2>
                            <Carousel className="Carousel">
                                <Carousel.Item>
                                    <img src={order1} />
                                    <Carousel.Caption className="Carousel.Caption">
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        <h3>First slide label</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={order_3} />
                                    <Carousel.Caption className="Carousel.Caption">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <h3>Second slide label</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={order1} />
                                    <Carousel.Caption className="Carousel.Caption">
                                        <p>
                                            <h3>Third slide label</h3>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;