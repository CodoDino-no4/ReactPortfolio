import React from 'react';
import './About.scss';
import { Badge } from '../../Badge';

export const About = (): JSX.Element => {
  return (
    <section className="about">
      <h1>ABOUT</h1>
      <div className="about-container">
        <div className="intro-container">
          <div className="intro">
            <h2>
              Hiya, my name is Alice.
              <br />
              I am a creative professional with a passion for Software
              Development,
              <br /> UX and Software Architecture/Design.
            </h2>
            <p></p>
          </div>
        </div>
        <div className="key-info">
          <ul>
            <li className="key 1">
              <h2>University</h2>
              <p>
                I studied at Sheffield Hallam University, where I graduated in
                BEng Software Engineering with a First Class Honours. Here, I
                was taught the fundementals of programming and how to solve
                complex problems to produce various types of applications. I
                developed multiple web and desktop applications on solo and
                group projects, fulfilling requirements set by the lecturer,
                following known design patterns and various UML digarams created
                prior.
              </p>
            </li>
            <li className="skills 1">
              <Badge text={'C++'} />
              <Badge text={'C#'} />
              <Badge text={'UX'} />
              <Badge text={'Docker'} />
            </li>
            <li className="key 2">
              <h2>Autodesk</h2>
              <p>
                My placement year (extended to 2 years) during University was
                undertaken at Autodesk Ltd, my role was QA Engineer. I worked
                alongside developers to ensure the tickets completed worked as
                expected and performed to a high standard brfore the work
                completed would be shipped to production. I developed and
                maintained an E2E test suite, along with other automation tools
                such as scripts to generate test results that are sent to Slack
                and Jira.
              </p>
            </li>
            <li className="skills 2">
              <Badge text={'QA'} />
              <Badge text={'JS/TS'} />
              <Badge text={'Jenkins'} />
              <Badge text={'Python'} />
            </li>
            <li className="key 3">
              <h2>Personal Projects</h2>
              <p>
                In my spare time I enjoy working on my 2D game I have named
                Light-Years Away, it is a survival/crafting game set in
                outer-space, where you: Astro, has been thrown into the depths
                of space and must survive and return to his home planet. This
                portfolio is another project used as a place to practice my
                skills with React and whatever else I want to learn at the time.
                See my blog for more...
              </p>
            </li>
            <li className="skills 3">
              <Badge text={'C#'} />
              <Badge text={'JS/TS'} />
              <Badge text={'C+'} />
              <Badge text={'C++'} />
            </li>
            <li className="key 4">
              <h2>Upcoming</h2>
              <p>
                I have began my post-graduate career working for Bosch, where I
                am in training with other successful graduates to enhance my
                skills and hone in on the types of development work I enjoy
                most.
              </p>
            </li>
            <li className="skills 4">
              <Badge text={'C++'} />
              <Badge text={'C++'} />
              <Badge text={'C++'} />
              <Badge text={'C++'} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
