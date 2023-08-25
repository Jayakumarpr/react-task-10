
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";


const Slider = () => {
    return (


        //   <Container fluid >
        //     <Row className="justify-content-center align-items-center">
        //       <Col lg={8}>
        //         <Carousel>
        //           <Carousel.Item interval={2000}>
        //             <img
        //               className="d-block w-100"
        //               src={require("../Images/homePage/banner1.jpg")}
        //               alt="First slide"
        //             />
        //             <Carousel.Caption>
        //               <h3>Margherita</h3>
        //               <p className="d-none d-sm-block">
        //                 Nulla vitae elit libero, a pharetra augue mollis interdum.
        //               </p>
        //             </Carousel.Caption>
        //           </Carousel.Item>
        //           <Carousel.Item interval={2000}>
        //             <img
        //               className="d-block w-100"
        //               src={require("../Images/homePage/pic1.jpeg")}
        //               alt="Second slide"
        //             />

        //             <Carousel.Caption>
        //               <h3>Cheese Pizza</h3>
        //               <p className="d-none d-sm-block">
        //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //               </p>
        //             </Carousel.Caption>
        //           </Carousel.Item>
        //           <Carousel.Item interval={2000}>
        //             <img
        //               className="d-block w-100"
        //               src={require("../Images/homePage/pic2.jpeg")}
        //               alt="Third slide"
        //             />

        //             <Carousel.Caption>
        //               <h3>Pepporoni</h3>
        //               <p className="d-none d-sm-block">
        //                 Praesent commodo cursus magna, vel scelerisque nisl
        //                 consectetur.
        //               </p>
        //             </Carousel.Caption>
        //           </Carousel.Item>
        //         </Carousel>
        //       </Col>
        //     </Row>
        //     <div className="text-center">
        //       <h2 className="display-5 mt-3">Pizzas for Every Occasion!</h2>
        //       <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        //     </div>
        //   </Container>

        <div >

       

        <Carousel fade >
            <Carousel.Item  >
                <img
                    className="d-block w-100  caro1"
                    src={require("../Images/homePage/pic4.jpeg")}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>

            
            <Carousel.Item  >
                <img
                    className="d-block w-100  caro1"
                    src={require("../Images/homePage/pic3.jpeg")}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item  >
                <img
                    className="d-block w-100 active caro1"
                    src={require("../Images/homePage/banner1.jpg")}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
                <img
                    className="d-block w-100 caro1"
                    src={require("../Images/homePage/jay1.jpg")}
                    alt="Third slide"
                />
                <Carousel.Caption>
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 caro1"
                    src={require("../Images/homePage/jay2.jpg")}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>


    );
}

export default Slider




