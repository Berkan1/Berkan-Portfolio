import { Badge } from "react-bootstrap";
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";

function Tools() {
    return (
                <div className="tools">
                <div className='languages'>
                  <h2>Languages</h2>
                  <Badge>JavaScript</Badge>
                <Badge>C#</Badge>
                <Badge>Java</Badge>
                <Badge>HTML</Badge>
                <Badge>PHP</Badge>
                <Badge>TypeScript</Badge>
                <Badge>CSS</Badge>
                  </div>
                  <div className='libraries'>
                  <h2>Frameworks & Libraries</h2>
                  <Badge>React</Badge>
                <Badge>Node</Badge>
                <Badge>Ruby on Rails</Badge>
                <Badge>ASP.NET Core</Badge>
                <Badge>ExtJS</Badge>
                <Badge>Sass</Badge>
                <Badge>JQuery</Badge>
                <Badge>Bootstrap</Badge>
                  </div>
                  <div className='databases'>
                  <h2>Databases & Tools</h2>
                  <Badge>SQL</Badge>
                <Badge>MongoDB</Badge>
                <Badge>Firebase</Badge>
                <Badge>Azure DevOps</Badge>
                <Badge>Git</Badge>
                <Badge>Heroku</Badge>
                <Badge>Jira</Badge>
                <Badge>Visual Studio</Badge>
                <Badge>Confluence</Badge>
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