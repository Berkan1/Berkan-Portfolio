import { Container, Row, Col } from "react-bootstrap";
import GitHubIcon from '@material-ui/icons/GitHub';
import VideocamIcon from '@material-ui/icons/Videocam';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';

function Projects() {
  return (
    <div className='full-page' id='projects'>
      <Container>
        <Row className='spaced-row'>
          <Col sm={6} md={6} lg={6}>
            <p>WatchThis</p>
            <section>
              <p>A full stack web application hosted on Heroku that allows users to give scores out of 10 to films.
                The front end was crafted with React and Material-UI, the server was built using Node and Express and 
                a MongoDB database was used for data storage. The Auth0 authentication service was used for user 
                registration and film data was retrieved from a third party API using Axios.
              </p>
              <a href='https://github.com/Berkan1/WatchThis' target='_blank' rel="noreferrer"><GitHubIcon/></a>
              <a href='https://watch-this-project.herokuapp.com/' target='_blank' rel="noreferrer"><DesktopMacIcon/></a>
            </section>
          </Col>
          <Col sm={6} md={6} lg={6}>
            <img src={process.env.PUBLIC_URL + '/watchthis-pic.png'} alt='WatchThis website'/>
          </Col>
        </Row>
        <Row className='spaced-row'>
          <Col sm={6} md={6} lg={6}>
            <p>Cocktails</p>
            <section>
              <p>A front end web application that allows users to search for cocktail recipes by name or starting letter.
                This was built using React, React-router, Bootstrap, Sass, CSS and React hooks. Axios was used to consume
                JSON data from an external REST API.
              </p>
              <a href='https://github.com/Berkan1/cocktails' target='_blank' rel="noreferrer"><GitHubIcon/></a>
              <a href='https://berkan1.github.io/cocktails/#/' target='_blank' rel="noreferrer"><DesktopMacIcon/></a>
            </section>
          </Col>
          <Col sm={6} md={6} lg={6}>
            <img src={process.env.PUBLIC_URL + '/cocktails-pic.png'} alt='Cocktails website'/>
          </Col>
        </Row>
        <Row className='spaced-row'>
          <Col sm={6} md={6} lg={6}>
            <p>GigUnite</p>
            <section>
              <p>A full stack web application built using the ASP.NET Core framework. This application was created for my final
                year project and allowed users to find advertised gigs based on their musical interests.
                This included features such as using Mailkit to send email alerts, Google Maps API to suggest meeting points and the Azure 
                Identity framework to securely authenticate users. This is unfortunately no longer available online due to hosting costs,
                but there is a video demonstration of the application linked below.
              </p>
              <a href='https://github.com/Berkan1/Gig-Unite' target='_blank' rel="noreferrer"><GitHubIcon/></a>
              <a href='https://www.dropbox.com/s/e9vgf94k60xh2s6/bc00208_FYP_presentation_main.mp4?dl=0' target='_blank' rel="noreferrer"><VideocamIcon/></a>
            </section>
          </Col>
          <Col sm={6} md={6} lg={6}>
            <img src={process.env.PUBLIC_URL + '/gigunite-pic.png'} alt='Gigunite website'/>
          </Col>
        </Row>
        <a href="#about-me"><p className='link'>Back to top <i className="glyphicon glyphicon-menu-up"></i></p></a>
      </Container>
    </div>
  );
}

export default Projects;