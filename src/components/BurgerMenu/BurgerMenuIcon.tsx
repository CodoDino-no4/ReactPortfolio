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

  const lineNode = (name, yPos) => {
    return (
      <svg className={name} x="0" y={yPos}>
        <path
          className="linePaths"
          d={pathValue(linkWidth)}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
        />
      </svg>
    );
  };

  if (isOpen) {
    return (
      <BurgerOpen linkWidth={linkWidth}>
        <svg
          className="times"
          xmlns="http://www.w3.org/2000/svg"
          width={linkWidth}
          height="40"
        >
          {lineNode('times-line 1', 10)}
          {lineNode('times-line 2', 10)}
        </svg>
      </BurgerOpen>
    );
  } else {
    return (
      <Burger linkWidth={linkWidth}>
        <svg
          className="line"
          xmlns="http://www.w3.org/2000/svg"
          width={linkWidth}
          height="40"
        >
          {lineNode('burger-line 1', 0)}
          {lineNode('burger-line 2', 10)}
          {lineNode('burger-line 3', 20)}
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

  svg {
    stroke: var(--text);
  }

  @keyframes drawBurger {
    to {
      stroke-dashoffset: 5;
    }
  }
`;

export const BurgerOpen = styled.div`
  .times {
    stroke-dasharray: ${(props) => props.linkWidth};
    stroke-dashoffset: ${(props) => props.linkWidth};
    animation: drawTimes 1s linear forwards;
    position: absolute;
    margin: 5px;
    width: 45px;
  }

  svg {
    stroke: var(--text);
  }

  .times-line 1 {
    transform: rotate(45deg);
  }

  @keyframes drawTimes {
    to {
      stroke-dashoffset: 5;
    }
  }
`;
