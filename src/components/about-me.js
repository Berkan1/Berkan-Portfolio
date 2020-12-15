import { Container } from "react-bootstrap";

function AboutMe() {
  return (
    <div className='full-page' id='about-me'>
      <Container>
        <img src={process.env.PUBLIC_URL + '/profile-pic.jpg'} alt='Berkan' className='profile'/>
        <article>
          <p>Hi there! I'm <span>Berkan</span>, a <span>software developer</span> from London with over <span>2 
            years</span> of professional experience creating interactive web applications.
          </p><br/>
          <p>My strengths are <span>full stack/front end development</span>, and I'm a big fan
            of using tools like <span>React</span> to build software that can enrich the lives of others!
          </p>
        </article>
        <a href="#skills"><p className='link'>See my skills and experience <i className="glyphicon glyphicon-menu-down"></i></p></a>
      </Container>
    </div>
  );
}

export default AboutMe;