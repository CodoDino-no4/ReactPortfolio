import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

interface props {
  linkWidth: number;
  isOpen: boolean;
}

export const BurgerMenuIcon = ({ linkWidth, isOpen }: props): JSX.Element => {
  function pathValue(linkWidth) {
    const moveYMin = 5;
    const moveYMax = 12;

    const curveXMin = 10;
    const curveXMax = linkWidth;
    const curveYMin = 5;
    const curveYMax = 10;

    const endYMin = 5;
    const endYMax = 10;

    const moveY = Math.floor(Math.random() * (moveYMax - moveYMin)) + moveYMin;
    const curveX =
      Math.floor(Math.random() * (curveXMax - curveXMin)) + curveXMin;
    const curveY =
      Math.floor(Math.random() * (curveYMax - curveYMin)) + curveYMin;
    const endY = Math.floor(Math.random() * (endYMax - endYMin)) + endYMin;

    return `M5 ${moveY} Q ${curveX} ${curveY} ${linkWidth} ${endY}`;
  }

  function lineNode(yPos) {
    return (
      <svg x="0" y={yPos}>
        <path
          className="linePaths"
          d={pathValue(linkWidth)}
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
        />
      </svg>
    );
  }

  if (isOpen) {
    return (
      <Burger linkWidth={linkWidth}>
        {console.log(isOpen)}
        <svg
          className="times"
          xmlns="http://www.w3.org/2000/svg"
          width={linkWidth}
          height="40"
        >
          {lineNode(0)}
          {lineNode(10)}
        </svg>
      </Burger>
    );
  } else {
    return (
      <Burger linkWidth={linkWidth}>
        {console.log(isOpen)}
        <svg
          className="line"
          xmlns="http://www.w3.org/2000/svg"
          width={linkWidth}
          height="40"
        >
          {lineNode(0)}
          {lineNode(10)}
          {lineNode(20)}
        </svg>
      </Burger>
    );
  }
};

export const Burger = styled.div`
  .line {
    stroke-dasharray: ${(props) => props.linkWidth};
    stroke-dashoffset: ${(props) => props.linkWidth};
    animation: drawBurger 1s linear forwards;
    position: absolute;
    margin: 5px;
    width: 45px;
  }

  // .line:hover {
  //     stroke-dasharray: 0;
  //     stroke-dashoffset: ${(props) => props.linkWidth};
  //     animation: drawOut 1s linear forwards;
  // }

  .times {
    stroke-dasharray: ${(props) => props.linkWidth};
    stroke-dashoffset: ${(props) => props.linkWidth};
    animation: drawTimes 1s linear forwards;
    position: absolute;
    margin: 5px;
    width: 45px;
  }

  @keyframes drawBurger {
    to {
      stroke-dashoffset: 5;
    }
  }

  @keyframes drawTimes {
    to {
      stroke-dashoffset: 5;
    }
  }
`;

BurgerMenuIcon.propTypes = {
  linkWidth: propTypes.number.isRequired,
  isOpen: propTypes.bool.isRequired,
};
