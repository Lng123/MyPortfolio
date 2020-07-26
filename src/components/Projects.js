import React, { Component } from "react";
import { Grid, Cell, Card, CardText } from "react-mdl";
import { Carousel } from "react-bootstrap";
import "./css/Projects.css";
import argos1 from "../img/Argos1.png";
import argos2 from "../img/Argos2.png";
import argos3 from "../img/Argos3.png";
import taoex1 from "../img/Taoex1.png";
import taoex2 from "../img/Taoex2.png";
import taoex3 from "../img/Taoex3.png";
import taoex4 from "../img/Taoex4.png";
import taoex5 from "../img/Taoex5.png";
import recette1 from "../img/recette1.png";
import recette2 from "../img/recette2.png";
import recette3 from "../img/recette3.png";
import aws1 from "../img/finaluml.png";
import aws2 from "../img/finalsignin.png";
import aws3 from "../img/finalcognito.png";
import aws4 from "../img/finalbook1.png";
import aws5 from "../img/finalapigateway.png";
import aws6 from "../img/finallambdahome.png"
import aws7 from "../img/finalemail.png";
import aws8 from "../img/finalses.png";
import aws9 from "../img/finaldynamodb.png";
import aws10 from "../img/finals3host.png";
import map1 from "../img/map1.png";
import map2 from "../img/map2.png";
import map3 from "../img/map3.png";
import map4 from "../img/map4.png";
import map5 from "../img/map5.png";
import map6 from "../img/map6.png";
import map7 from "../img/map7.png";
import yelp1 from "../img/yelp1.png";
import yelp2 from "../img/yelp2.png";
import yelp3 from "../img/yelp3.png";
import yelp4 from "../img/yelp4.png";
import yelp5 from "../img/yelp5.png";
import Collapse from "./Collapse.js";
import Disabled from "./CollapseDisabled.js";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonStatus: false,
      isOpened: [false, false],
      activeTab: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (this.state.buttonStatus === false) {
      this.setState({ buttonStatus: true, isOpened: true });
    } else if (this.state.buttonStatus === true) {
      this.setState({ buttonStatus: false, isOpened: false });
    }
  }

  render() {
    return (
      <div className="projects" id="projects">
        <Grid>
        <Grid item xs>
            <div className="projects-grid">
              <Card id="p1" shadow={5}>
                <CardText>
                  <span>BCIT Interactive Map</span>
                </CardText>

                <Carousel interval={5000}>
                  <Carousel.Item>
                    <img src={map1} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={map2} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={map3} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={map4} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={map5} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={map6} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={map7} />
                  </Carousel.Item>

                </Carousel>
                <Collapse git="https://github.com/Lng123/BCIT-Map">
                  <CardText>
                    <h2>BCIT Interactive Map</h2>
                    Our client BCIT Student Life Office would like to have an interactive map of BCIt's Burnaby campus developed as a resource for new students to navigate
                    around campus. This map is designed to be implemented into an iframe of specific dimensions on the the Learning Hub at BCIT.
                    The interactive map included multiple categories for different services. Choosing an option in a service would 
                    highlight specific areas on the map, as well as a description box. When hovering over the highlighted areas, a tooltip pops up
                    to display additional information about that particular area.
                    <br />
                    <br />
                    The app architecture is based off the Model View Controller pattern. 
                    The model component is where data is transferred between the MySQL database and the app using MySQL queries. 
                    The app retrieves data such as map descriptions and buildings to highlight.
                    The view represents the user interface component and determines what the user sees while using the app, 
                    such as a menu or a map. Express-Handlebars, HTML CSS, and Bootstrap are used for this component.
                    The controller component is the middle layer between the model and the view. 
                    It listens to user inputs from the view like a menu option click or page navigation. 
                    The controller then calls the appropriate method in the model component. 
                    The controller would also manipulate data and decide what data or view gets returned. The controller component is written in JavaScript and Node.js.
                    To reduce the amount fo time to load, dynamic data rendering is used. Data retrieved from the model is passed through the controller and sent to a route
                    as a JSON object, which is then detched dynamically to update the information on the page.
                    <br />
                    <br />
                    Permission granted from the client to display project. 
                    <br />
                    <br />
                    <h4>Technologies</h4>
                    HTML, CSS, BootStrap, JavaScript, MySQL, Node.js, jQuery
                  </CardText>
                </Collapse>
              </Card>
            </div>
          </Grid>

          <Grid item xs>
            <div className="projects-grid">
              <Card id="p1" shadow={5}>
                <CardText>
                  <span>AWS: Serverless Appointment Maker</span>
                </CardText>

                <Carousel interval={5000}>
                  <Carousel.Item>
                    <img src={aws1} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={aws2} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={aws3} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={aws4} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={aws5} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={aws6} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={aws7} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={aws8} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={aws9} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={aws10} />
                  </Carousel.Item>
                </Carousel>
                <Collapse git="https://github.com/Lng123/Appointment-Maker">
                  <CardText>
                    <h2>Serverless Appointment Maker</h2>
                    A web application for booking appointments. Each user is required to register/signin.
                    A user can then book for an appointment. Once they booked for an appointment, they would
                    recieve an email notification confirming the booked time slot. If the time slot that the user
                    wishes to book is already booked by someone else, they could sign up for the waitlist.
                    There will be an email notification that they signed up for the waitlist for that time slot.
                    If the user that has booked the time slot switches to another time slot, all the users on the waitlist
                    would be notified.
                    <br />
                    <br />
                    In the serverless backend we have 4 lambda functions:home(), book(),
                    waitlist(), and notifywaitlist(). The lambda functions read and write to the DynamoDB Easch user's username, booking time, and wailist time.
                    The lambda functions utilize Simple Email Service to send confirmation emails. The functions are then connected to the API Gateway to create
                    a RESTful API, which are then called with jquery through the app. The files of the app are stored and hosted from a S3 bucket. The code and structure of the app
                    was based off and modified from an Amazon example repo. Cognito is used as an authorizer
                    in to the API Gateway method requests to ensure that the users are registered and logged in to the app before using it. 
                    <br />
                    <br />
                    <h4>Technologies</h4>
                    AWS Cognito, AWS Lambda, AWS SES, AWS API Gateway, AWS DynamoDB, AWS S3 Bucket
                  </CardText>
                </Collapse>
              </Card>
            </div>
          </Grid>

          <Grid item xs>
            <div className="projects-grid">
              <Card id="p1" shadow={5}>
                <CardText>
                  <span>Android Project: Argos</span>
                </CardText>

                <Carousel interval={5000}>
                  <Carousel.Item>
                    <img src={argos1} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={argos2} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={argos3} />
                  </Carousel.Item>
                </Carousel>
                <Collapse git="https://github.com/Lng123/Argos">
                  <CardText>
                    <h2>Argos</h2>
                    An android app named Argos, aimed at improving bike security
                    in Vancouver. Collaborated in a group of three students,
                    Argos won first place out of 11 teams at the BCIT android
                    development competition under the community category. Argos
                    helps users find secure places to park their bike, using
                    maps showing locations of bike racks and bike theft iin
                    Vancouver.
                    <br />
                    <br />
                    Argos uses the google maps API to display nearby locations
                    of bike racks, as markers and clusters. The user can then
                    toggle a setting, showing all the bike thefts, overlayed as
                    a heatmap.
                    <br />
                    <br />
                    The datasets for both the bike racks and bike thefts are
                    stored in firebase and populates the map based off latitude
                    and longitude. Coordinates were not available for the bike
                    thefts dataset, and therefore a geocoding API was used to
                    convert addresses to coordinates.
                    <br />
                    <br />
                    <h4>Technologies</h4>
                    Java, Firebase, Android Studio
                  </CardText>
                </Collapse>
              </Card>
            </div>
          </Grid>

          <Grid item xs>
            <div className="projects-grid">
              <Card id="p1" shadow={5}>
                <CardText>
                  <span>Python: Discord Lunch Polling Bot</span>
                </CardText>

                <Carousel interval={5000}>
                  <Carousel.Item>
                    <img src={yelp1} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={yelp2} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={yelp3} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={yelp4} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={yelp5} />
                  </Carousel.Item>

                </Carousel>
                <Collapse git="https://github.com/Lng123/DiscordBot">
                  <CardText>
                    <h2>Discord Lunch Polling Bot</h2>
                    A discord bot for teammates to vote and decide where to go for lunch. 
                    The bot uses the Discord.py library on python for discord messages and the Yelp Fusion API to allow users to retreive restaurant names and information.
                    Users can add a Yelp option for the poll using a Yelp business id. They can alternatively add a non-Yelp option.
                    The bot creates an embed on discord which users can vote for the options added using discord reactions coresponding to the choices.
                    After polling, the bot counts the votes, and creates an embed showing from the option with the most votes.
                    Minutes prior to the set lunch time, the bot will send display a reminder.
                    <br />
                    <br />
                    <h4>Technologies</h4>
                    Python, Discord.py, Yelp Fusion API
                  </CardText>
                </Collapse>
              </Card>
            </div>
          </Grid>

          <Grid item xs>
            <div className="projects-grid">
              <Card id="p1" shadow={5}>
                <CardText>
                  <span>TAOEX Club</span>
                </CardText>

                <Carousel interval={5000}>
                  <Carousel.Item>
                    <img src={taoex1} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={taoex2} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={taoex3} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={taoex4} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={taoex5} />
                  </Carousel.Item>
                </Carousel>

                <Collapse git="https://github.com/Lng123/taoex.club">
                  <CardText>
                    <h2>TAOEX Club</h2>
                    I had the oppurtunity to work on TAOEX Club for our client
                    TAOEX along with five other students as part of the Industry
                    Sponsored Student Projects program at BCIT TAOEX Club is a
                    social webapp for the game taoex. TAOEX Club is used to
                    manage user profiles, matches, clubs, and leagues, and was
                    built with Laravel, a PHP framework, while using MySQL as
                    the database.
                    <br />
                    <br />
                    We were tasked with adding new features to the platform. The
                    new features involved developing an admistrator level
                    functionalities that has full control of the players such as
                    banning, messaging, editing user profiles, and managing
                    clubs, club leaders and members. We also added user level
                    features such as owning and joining multiple clubs, club
                    invitations, removing club members, club scores and
                    rankings, and matches.
                    <br />
                    <br />
                    Permission granted from the client to display project. 
                    <br/>
                    <br/>
                    <h4>Technologies</h4>
                    Laravel PHP Framework, MySql
                  </CardText>
                </Collapse>
              </Card>
            </div>

            {/* </div> */}
          </Grid>

          <Grid item xs>
            <div className="projects-grid">
              <Card id="p1" shadow={5}>
                <CardText>
                  <span>Recette</span>
                </CardText>

                <Carousel interval={5000}>
                  <Carousel.Item>
                    <img src={recette1} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={recette2} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={recette3} />
                  </Carousel.Item>
                </Carousel>

                <Collapse git="https://github.com/Lng123/Recette">
                  <CardText>
                    <h2>Recette</h2>
                    In a team of 5 students we were tasked with coming up with a
                    solution through a web app to reduce food waste. We decided
                    to accomplish this task by reducing the amount of
                    unforgotten food left to expire in people's fridges. Our web
                    app Recette, scans receipts of groceries, and populates them
                    as list. The list contains the grocery item, with the days
                    remaining until it expires. The user receives email
                    notifications when items are near expiry. The user would
                    also be able to select multiple items as ingredients, and
                    search for a recipe that uses those ingredients.
                    <br />
                    <br />
                    We had preset data on food items and their common time to
                    expire used for an autocomplete feature. All data including
                    individual food items are stored on Firebase. Multiple third
                    party APIs were used in the app, for feautures such as
                    receipt scanning and recipe searching.
                    <br />
                    <br />
                    <h4>Technologies</h4>
                    HTML, CSS, JavaScript, Bootstrap, Firebase
                  </CardText>
                </Collapse>
              </Card>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Projects;
