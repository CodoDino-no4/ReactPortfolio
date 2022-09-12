import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const BurgerMenuIcon = (props) => {
    function pathValue(linkWidth) {
        var moveYMin = 5;
        var moveYMax = 12;

        var curveXMin = 10;
        var curveXMax = linkWidth;
        var curveYMin = 5;
        var curveYMax = 10;

        var endYMin = 5;
        var endYMax = 10;

        var moveY = Math.floor(Math.random() * (moveYMax - moveYMin)) + moveYMin;
        var curveX =
            Math.floor(Math.random() * (curveXMax - curveXMin)) + curveXMin;
        var curveY =
            Math.floor(Math.random() * (curveYMax - curveYMin)) + curveYMin;
        var endY = Math.floor(Math.random() * (endYMax - endYMin)) + endYMin;

        return `M5 ${moveY} Q ${curveX} ${curveY} ${linkWidth} ${endY}`;
    }

    function lineNode(yPos) {
        return <svg x="0" y={yPos}>
            <path
                className="linePaths"
                d={pathValue(props.linkWidth)}
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
            />
        </svg>
    }

    if (props.open) {
        return (
            <Styled linkWidth={props.linkWidth}>
                {console.log(props.open)}
                <svg
                    className="times"
                    xmlns="http://www.w3.org/2000/svg"
                    width={props.linkWidth}
                    height="40"
                >
                    {lineNode(0)}
                    {lineNode(10)}
                </svg>
            </Styled>
        );
    } else {
        return (
            <Styled linkWidth={props.linkWidth}>
                {console.log(props.open)}
                <svg
                    className="line"
                    xmlns="http://www.w3.org/2000/svg"
                    width={props.linkWidth}
                    height="40"
                >
                    {lineNode(0)}
                    {lineNode(10)}
                    {lineNode(20)}
                </svg>
            </Styled>
        );
    }
};

const Styled = styled.div`
.line { 
      stroke-dasharray: ${(props) => props.linkWidth};
      stroke-dashoffset: ${(props) => props.linkWidth};
      animation: drawIn 1s linear forwards;
      position: absolute;
      margin:5px;
      width:45px;
    }

// .line:hover {
//     stroke-dasharray: 0;
//     stroke-dashoffset: ${(props) => props.linkWidth};
//     animation: drawOut 1s linear forwards;
// }

.times {
      stroke-dasharray: ${(props) => props.linkWidth};
      stroke-dashoffset: ${(props) => props.linkWidth};
      animation: draw 1s linear forwards;
      position: absolute;
      display: block;
      margin:5px;
      width:45px;
    }

  @keyframes drawIn {
    to {
      stroke-dashoffset: 5;
    }
  }

    @keyframes drawOut {
    to {
      stroke-dashoffset: 30;
    }
  }
`;

BurgerMenuIcon.propTypes = {
    linkWidth: propTypes.number.isRequired,
    open: propTypes.bool.isRequired
}
export default BurgerMenuIcon;
