import React from "react";
import "./workexp.css";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiAudiotechnica, SiReact } from "react-icons/si";
import { FaUpwork } from "react-icons/fa6";


const WorkExp = () => {
  return (
    <div className="work" id="work">
      <div className="container work-exp">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Work Experience
        </h2>
        <hr />
        <VerticalTimeline lineColor="#138781">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: '#1e1e2c' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2021 - 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<SiReact />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">VentureDive Limited (Private)</h4>
            <p>
              VentureDive is a technology solutions company that partners with startups and enterprises to deliver
              innovative digital products. At VentureDive, I was involved in the end-to-end development of
              several high-impact applications.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: '#1e1e2c' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2023 - 2024"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<SiAudiotechnica />}
          >
            <h3 className="vertical-timeline-element-title">Mern Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">TRG Pakistan Limited (Private)</h4>
            <p>
              TRG Pakistan is part of The Resource Group, a global leader in providing business process
              outsourcing services. Working at TRG Pakistan, I was involved in projects that required managing
              large volumes of data and delivering analytics-driven insights to clients.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: '#1e1e2c' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2024 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaUpwork/>}
          >
            <h3 className="vertical-timeline-element-title">Mern Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Arbisoft Limited (Private)</h4>
            <p>
              Arbisoft is a software development company that focuses on building custom software solutions
              for clients worldwide. My experience at Arbisoft involved working on diverse projects ranging
              from web and mobile applications to complex data analysis platforms.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExp;
