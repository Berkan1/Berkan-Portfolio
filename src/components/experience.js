import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent} from '@material-ui/lab';
import Paper from '@material-ui/core/Paper';
import "react-awesome-button/dist/styles.css";

function Experience() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineOppositeContent>
          2015
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot><i className="glyphicon glyphicon-book"></i></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3}>
            <h2>Started University</h2><p>The start of my coding journey! In September 2015 I started a Computer Science degree at the University of Surrey. Here I learnt the programming fundamentals such as data stuctures and object-oriented programming which set me up for a career as a developer.</p>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          2017
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot><i className="glyphicon glyphicon-briefcase"></i></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3}>
            <h2>First developer job</h2><p>In September 2017 I began an industrial placement year at Royal Surrey County Hospital. It was great to be able to put the theory I'd learnt at University into practice and develop loads of web applications that helped make the life of medical physicists easier.</p>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot><i className="glyphicon glyphicon-education"></i></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3}>
            <h2>Graduation</h2><p>I returned to University and graduated in summer 2019 with a first class honours, picking up a lot of new skills along the way.</p>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot><i className="glyphicon glyphicon-briefcase"></i></TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3}>
            <h2>First graduate job</h2><p>In August 2019 I started my first job after graduation as a software consultat at Netcompany. I am currently part of an agile team of developers helping build and maintain a large scale web application, and have grown a lot as a developer in my time here so far.</p>
           </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default Experience;