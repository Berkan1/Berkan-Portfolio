import { Container, Row, Col } from "react-bootstrap";
import Experience from './experience';
import Tools from './tools';
import "react-awesome-button/dist/styles.css";

function Skills() {
  return (
    <div className='full-page' id='skills'>
      <Container>
        <Row>
          <Col sm={7} md={7} lg={7}>
            <Experience/>
          </Col>
          <Col sm={5} md={5} lg={5}>
            <Tools/>
          </Col>
        </Row>
        <a href="#projects"><p className='link'>See my projects <i className="glyphicon glyphicon-menu-down"></i></p></a>
      </Container>
    </div>
  );
}

export default Skills;