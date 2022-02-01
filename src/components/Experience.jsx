// import { useState } from "react";
import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import gotg from "../media/chat.png";
import rfp from "../media/crud.png";
import tcd from "../media/pok.png";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
// import Modal from "react-bootstrap/Modal";

const Experience = ({ darkMode }) => {
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <br></br>
      <Fade>
        <Container>
          <br></br>
          <h2 className="lead" align="center">
            <b>- Projects -</b>
          </h2>
          <br></br>
          <div className="main_con">
            <Zoom>
              <Row>
                <div className="last">
                  <Col lg={4} sm={12}>
                    <Card
                      align="center"
                      className="Fi"
                      data-theme={darkMode ? "dark" : "light"}
                    >
                      <br></br>
                      <center>
                        <div class="flip-card">
                          {/* <div class="flip-card-inner"> */}
                          <div className="flip-card-front">
                            <Card.Img
                              className="image"
                              variant="top"
                              src={tcd}
                            />
                            <Card.Body>
                              <Card.Title align="center">
                                Simple Pokemon Api
                              </Card.Title>
                              <Card.Text>
                                <p align="center">
                              Implement the Pokemon API using async/await with fetch.
                                </p>
                              </Card.Text>
                            </Card.Body>
                          </div>
                          {/* </div> */}
                        </div>
                      </center>
                      <br></br>
                      <div>
                        <a
                          href="https://pokemon-sandeep.netlify.app/"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Button
                            variant={
                              darkMode ? "outline-light" : "outline-dark"
                            }
                            className="sbtn view"
                          >
                            Deployed Site
                          </Button>
                        </a>
                          <a
                            href="https://github.com/Sandeep228/Pokemon"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn"
                            >
                               Github Repo
                            </Button>
                          </a>
                        
                      </div>
                      <br></br>
                    </Card>
                  </Col>

                  <Col lg={4} sm={12}>
                    <Card
                      align="center"
                      className="exp Fi"
                      data-theme={darkMode ? "dark" : "light"}
                    >
                      <br></br>
                      <center>
                        <div class="flip-card">
                          {/* <div class="flip-card-inner"> */}
                          <div className="flip-card-front">
                            <Card.Img
                              className="image"
                              variant="top"
                              src={gotg}
                            />
                            <Card.Body>
                              <Card.Title align="center">
                                 Chat App
                              </Card.Title>
                              <Card.Text>
                                <p align="center">
                                Developed a basic chat app. Used HTML,
                                 CSS for front-end design. Used Socket.IO which is a
                           JavaScript library for Real me web applica ons.     
                                  </p>
                              </Card.Text>
                            </Card.Body>
                          </div>
                          {/* </div> */}
                        </div>
                      </center>
                      <br></br>
                      <div>
                        <a
                          href="https://sandeepkumar-chat-app.herokuapp.com/"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Button
                            variant={
                              darkMode ? "outline-light" : "outline-dark"
                            }
                            className="sbtn"
                          >
                            Deployed Site
                          </Button>
                        </a>
                          <a
                            href="https://github.com/Sandeep228/Chat-App"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn view"
                            >
                              Github Repo                       
                                 </Button>
                          </a>
                      </div>
                      <br></br>
                    </Card>
                  </Col>

                  <Col lg={4} sm={12}>
                    <Card
                      align="center"
                      className="exp Fi"
                      data-theme={darkMode ? "dark" : "light"}
                    >
                      <br></br>
                      <center>
                        <div class="flip-card">
                          {/* <div class="flip-card-inner"> */}
                          <div className="flip-card-front">
                            <Card.Img
                              className="image"
                              variant="top"
                              src={rfp}
                            />
                            <Card.Body>
                              <Card.Title align="center">
                              CRUD Operation
                              </Card.Title>
                              <Card.Text>
                                <p align="center">
                                A simple Application with CRUD operation using Mock-API
                                  </p>
                              </Card.Text>
                            </Card.Body>
                          </div>
                          {/* </div> */}
                        </div>
                      </center>
                      <br></br>
                      <div>
                        <a
                          href="https://react-crud-context-sandeep.netlify.app/"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Button
                            variant={
                              darkMode ? "outline-light" : "outline-dark"
                            }
                            className="sbtn"
                          >
                            Deployed Site
                          </Button>
                        </a>
                          <a
                            href="https://github.com/Sandeep228/React-CRUD-using-Context"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn view"
                            >
                              Github Repo                       
                                 </Button>
                          </a>
                      </div>
                      <br></br>
                    </Card>
                  </Col>
                
                </div>
              </Row>
            </Zoom>
            <br></br>
            <Zoom>
              <Row>
                <div className="last">
                
                 
                </div>
              </Row>
            </Zoom>
          </div>
        </Container>
      </Fade>
      <br></br>
      <br></br>
    </div>
  );
};

export default Experience;
