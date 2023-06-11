import { Container } from "react-bootstrap";

function AboutMe() {
  return (
    <div className='full-page' id='about-me'>
      <Container>
        <img src={process.env.PUBLIC_URL + '/profile-pic.jpg'} alt='Berkan' className='profile'/>
        <article>
          <p>Hi there! I'm <span>Berkan</span>, a <span>frontend developer</span> from London with over <span>5 
            years</span> of professional experience creating interactive web applications.
          </p><br/>
          <p>I'm a big fan of using tools like <span>React</span> to build responsive, accessible and performant software that can make a positive social impact!
          </p>
        </article>
        <a href="#skills"><p className='link'>See my skills and experience <i className="glyphicon glyphicon-menu-down"></i></p></a>
      </Container>
    </div>
  );
}

export default AboutMe;