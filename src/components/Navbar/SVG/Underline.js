import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Link } from 'react-scroll';

const Underline = (props) => {
  function pathValue(linkWidth) {
    var moveYMin = 5;
    var moveYMax = 12;

    var curveXMin = 20;
    var curveXMax = linkWidth;
    var curveYMin = 5;
    var curveYMax = 20;

    var endYMin = 5;
    var endYMax = 10;

    var moveY = Math.floor(Math.random() * (moveYMax - moveYMin)) + moveYMin;
    var curveX =
      Math.floor(Math.random() * (curveXMax - curveXMin)) + curveXMin;
    var curveY =
      Math.floor(Math.random() * (curveYMax - curveYMin)) + curveYMin;
    var endY = Math.floor(Math.random() * (endYMax - endYMin)) + endYMin;

    return `M5 ${moveY} Q ${curveX} ${curveY} ${linkWidth - 7} ${endY}`;
  }

  return (
    <Styled linkWidth={props.linkWidth}>
      <Link
        to={props.name}
        className="nav-links"
        spy={true}
        smooth={true}
        duration={1000}
        isDynamic={true}
        offset={props.offsetHandler}
      >
        {props.name.toUpperCase()}
        <svg
          className="underline"
          xmlns="http://www.w3.org/2000/svg"
          width={props.linkWidth}
          height="15"
        >
          <path
            d={pathValue(props.linkWidth)}
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        </svg>
      </Link>
    </Styled>
  );
};

const Styled = styled.div`
  .nav-links {
    padding: 0.5rem 1.5rem;
    display: inline-block;
    cursor: pointer;
    transition: all 0.2s ease-out;
  }

  .nav-links:hover {
    transform: scale(1.1);
    color: #f2695c;
    position: sticky;

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
  linkWidth: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  offsetHandler: propTypes.number.isRequired
};

export default Underline;
