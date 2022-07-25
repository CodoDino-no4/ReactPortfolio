import React, { useState, createRef, useEffect } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Link } from 'react-scroll';

const Underline = (props) => {
  const pathRef = createRef();
  const [pathLength, setPathLength] = useState();

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [pathRef]);

  // var moveYMin = 5;
  // var moveYMax = 12;

  // var curveXMin = 20;
  // var curveXMax = 100; /* Will be replaced with the width of the link */
  // var curveYMin = 5;
  // var curveYMax = 20;

  // var endYMin = 5;
  // var endYMax = 10;

  // randomize.addEventListener('click', function () {
  //   var moveY = Math.floor(Math.random() * (moveYMax - moveYMin)) + moveYMin;
  //   var curveX =
  //     Math.floor(Math.random() * (curveXMax - curveXMin)) + curveXMin;
  //   var curveY =
  //     Math.floor(Math.random() * (curveYMax - curveYMin)) + curveYMin;
  //   var endY = Math.floor(Math.random() * (endYMax - endYMin)) + endYMin;

  //   var newPath = `M5 ${moveY} Q ${curveX} ${curveY} 170 ${endY}`;

  //   randomPath.setAttribute('d', newPath);
  // });

  return (
    <Wrapper pathLength={pathLength} linkWidth={props.linkWidth}>
      <Link
        to={props.link}
        className="nav-links"
        onClick={props.clickHandler}
        spy={true}
        smooth={true}
        duration={1000}
        isDynamic={true}
        offset={props.offsetHandler}
      >
        {props.name}
        <svg
          className="underline"
          xmlns="http://www.w3.org/2000/svg"
          width={props.linkWidth}
          height="15"
          {...props}
        >
          <path
            ref={pathRef}
            d="M5 5 Q 30 15 170 5"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.2}
          />
        </svg>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .nav-links {
    padding: 0.5rem 1.5rem;
    display: inline-block;
    cursor: pointer;
  }

  .nav-links:hover {
    transition: all 0.2s ease-out;
    transform: scale(1.1);
    color: #f2695c;

    .underline {
      opacity: 1;
      stroke-dasharray: ${(props) => props.linkWidth};
      stroke-dashoffset: ${(props) => props.linkWidth};
      animation: draw 0.5s linear forwards;
    }
  }

  .underline {
    height: 30px;
    position: absolute;
    display: block;
    margin-left: -10px;
    opacity: 0;
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 60;
    }
  }
`;

Underline.propTypes = {
  style: propTypes.func.isRequired,
  linkWidth: propTypes.string.isRequired
};

export default Underline;
