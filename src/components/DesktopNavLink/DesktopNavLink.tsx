import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface props {
  linkWidth: number;
  name: string;
}

export const DesktopNavLink = ({ linkWidth, name }: props): JSX.Element => {
  const pathValue = (linkWidth) => {
    const moveYMin = 5;
    const moveYMax = 12;

    const curveXMin = 20;
    const curveXMax = linkWidth;
    const curveYMin = 5;
    const curveYMax = 20;

    const endYMin = 5;
    const endYMax = 10;

    const moveY = Math.floor(Math.random() * (moveYMax - moveYMin)) + moveYMin;
    const curveX =
      Math.floor(Math.random() * (curveXMax - curveXMin)) + curveXMin;
    const curveY =
      Math.floor(Math.random() * (curveYMax - curveYMin)) + curveYMin;
    const endY = Math.floor(Math.random() * (endYMax - endYMin)) + endYMin;

    return `M5 ${moveY} Q ${curveX} ${curveY} ${linkWidth} ${endY}`;
  };

  return (
    <StyledLink linkWidth={linkWidth}>
      <Link to={`/#${name}`} className="nav-links">
        {name.toUpperCase()}
        <svg
          className="underline"
          xmlns="http://www.w3.org/2000/svg"
          width={linkWidth + 5}
          height="15"
        >
          <path
            d={pathValue(linkWidth)}
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        </svg>
      </Link>
    </StyledLink>
  );
};

const StyledLink = styled.div`
  .nav-links {
    padding: 0.5rem 1.5rem;
    display: inline-block;
    cursor: pointer;
    transition: all 0.2s ease-out;
    text-decoration: none;
    color: var(--text);
  }

  .nav-links:hover {
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
