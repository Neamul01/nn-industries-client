import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
    return (
        <div>
            <h2 className="text-center text-2xl">List of tech I know</h2>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">React</h3>
                    <h4 className="vertical-timeline-element-subtitle">Js Lobrary</h4>
                    <p>
                        I am very familier with react and I can create any project with it.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Node</h3>
                    <h4 className="vertical-timeline-element-subtitle">Js Runtime</h4>
                    <p>
                        I created some project with Node and much familier.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Express</h3>
                    <h4 className="vertical-timeline-element-subtitle">Node.js freamword</h4>
                    <p>
                        I actually create my project using express.js
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2008 - 2010"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Tailwind,Bootstrap</h3>
                    <h4 className="vertical-timeline-element-subtitle">CSS freamword</h4>
                    <p>
                        I can create project with any css library.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Component Library</h3>
                    <h4 className="vertical-timeline-element-subtitle">Tailwind</h4>
                    <p>
                        I can use any tailwind component Library.
                    </p>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                // icon={<StarIcon />}
                />
            </VerticalTimeline>
        </div>
    );
};

export default Timeline;