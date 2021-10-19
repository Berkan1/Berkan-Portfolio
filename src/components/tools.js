import { Badge } from "react-bootstrap";
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";

function Tools() {
  return (
    <div className="tools">
      <div className='languages'>
        <h2>Languages</h2>
        <Badge>JavaScript</Badge>
        <Badge>TypeScript</Badge>
        <Badge>HTML</Badge>
        <Badge>CSS</Badge>
        <Badge>C#</Badge>
      </div>
      <div className='libraries'>
        <h2>Frameworks & Libraries</h2>
        <Badge>React</Badge>
        <Badge>NextJS</Badge>
        <Badge>Node</Badge>
        <Badge>NestJS</Badge>
        <Badge>Express</Badge>
        <Badge>Sass</Badge>
        <Badge>Jest</Badge>
        <Badge>Material UI</Badge>
      </div>
      <div className='databases'>
        <h2>Databases & Tools</h2>
        <Badge>SQL</Badge>
        <Badge>MongoDB</Badge>
        <Badge>Firebase</Badge>
        <Badge>Azure DevOps</Badge>
        <Badge>Git</Badge>
        <Badge>Heroku</Badge>
        <Badge>Bitbucket</Badge>
        <Badge>Jira</Badge>
        <Badge>Confluence</Badge>
        <Badge>AWS Cognito</Badge>
      </div>
      <a href='/CV_Berkan.pdf' target='_blank'>
        <AwesomeButton>
          Open CV
        </AwesomeButton>
      </a>
    </div>
  );
}

export default Tools;