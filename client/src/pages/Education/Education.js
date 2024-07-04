import React from 'react';
import "./education.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoMdSchool } from "react-icons/io";

const Education = () => {
  return (
    <>
    <div className='education' id='education'>
    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2015 - 2017"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Matriculation(Science)</h3>
    <h4 className="vertical-timeline-element-subtitle">Govt.High School KhanGarh</h4>
    <p>
I have passed my Matriculation with a score of 899 out of 1100, achieving a percentage of 80%.
    </p>
  </VerticalTimelineElement>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2017 - 2019"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Intermediate(Pre-Medical)</h3>
    <h4 className="vertical-timeline-element-subtitle">Misiali Zakria Higher Secondary School Muzaffargarh</h4>
    <p>
I have passed my Intermediate with a score of 850 out of 1100, achieving a percentage of 78%.
    </p>
  </VerticalTimelineElement>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2019 - 2023"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Bs Physics</h3>
    <h4 className="vertical-timeline-element-subtitle">Ghazi University DG Khan</h4>
    <p>
I have passed my Matriculation with a score of 4CGPA out of 3.10CGPA, achieving a percentage of 75%.
    </p>
  </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
    </>
  )
}

export default Education