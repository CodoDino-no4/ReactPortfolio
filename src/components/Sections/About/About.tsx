import React, from 'react';
import './About.scss';
import ProfilePic from '../../../images/edited-me.png';

export const About = ():JSX.Element => {
    return (
      <section className="about">
        <h1>ABOUT</h1>
        {/* avatar circle shaped */}
        {/* intro below avatar */}
        {/* key things in a 4x4 grid next to intro */}
        <div className="about-container">
          <div className="picture-intro">
            <div className="profile-pic">
              <img src={ProfilePic}></img>
            </div>
            <div className="intro">
              <p>
                Hi, my name is Alice Chambers. I am a creative professional with
                a passion for Software Development, UX and Software
                Architecture/Design. Through my expereince in digital marketing.
                I am currently completing my final year of University, studying
                Software Engineering. Something better than this haha.
              </p>
            </div>
          </div>
          <div className="key-info">
            <ul>
              <li className="key 1">
                <img className="key img"></img>
                <h2>Thing1</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting
                </p>
              </li>
              <li className="key 2">
                <img className="key img"></img>
                <h2>Thing2</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting
                </p>
              </li>
              <li className="key 3">
                <img className="key img"></img>
                <h2>Thing3</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting
                </p>
              </li>
              <li className="key 4">
                <img className="key img"></img>
                <h2>Thing4</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
}
