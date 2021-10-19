import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent} from '@material-ui/lab';
import Paper from '@material-ui/core/Paper';
import "react-awesome-button/dist/styles.css";

function Experience() {
  return (
    <Timeline>
      {TimelineObject("2015", "Started University", "The start of my coding journey! In September 2015 I started a Computer Science degree at the University of Surrey. Here I learnt the programming fundamentals such as data stuctures and object-oriented programming which set me up for a career as a developer.", "glyphicon glyphicon-book")}
      {TimelineObject("2017", "First developer job", "In September 2017 I began an industrial placement year at Royal Surrey County Hospital. It was great to be able to put the theory I'd learnt at University into practice and develop loads of web applications that helped make the life of medical physicists easier.", "glyphicon glyphicon-briefcase")}
      {TimelineObject('2019', 'Graduation', "I returned to University and graduated in summer 2019 with a first class honours, picking up a lot of new skills along the way.", "glyphicon glyphicon-education")}
      {TimelineObject('2019', 'Software Consultant - Netcompany', 'In August 2019 I started working as a software consultant for Netcompany. I worked as a developer on 2 projects in my time here, the first being full stack work on a large scale web application and the second being frontend development for a greenfield React project.', 'glyphicon glyphicon-briefcase')}
      {TimelineObject('2021', 'Frontend Developer - Everledger', "After nearly 2 years at Netcompany I decided to switch to a frontend focused role as I learned this was the area of engineering where I felt most effective. I'm currently working on building the frontend layer of an exciting new product which is integrated with innovative blockchain and NFC technology.", "glyphicon glyphicon-briefcase", true)}
    </Timeline>
  );
}

function TimelineObject(year, title, description, icon, final){
  return (
    <TimelineItem>
      <TimelineOppositeContent>
        {year}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot><i className={icon}></i></TimelineDot>
        {!final && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3}>
          <h2>{title}</h2><p>{description}</p>
          </Paper>
      </TimelineContent>
    </TimelineItem>
  );
}

export default Experience;