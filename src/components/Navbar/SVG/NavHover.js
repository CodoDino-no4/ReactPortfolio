import React, { useState, createRef, useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const NavHover = props => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true
  });
  const pathRef = createRef();
  const [pathLength, setPathLength] = useState();

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [pathRef]);

  return (
    <Wrapper ref={inViewRef} pathLength={pathLength}>
      <svg
        className={inView ? 'animated visible' : 'animated'}
        viewBox="0 0 100 500"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M32.563 14.262 16.65 13.52M45.785 42.74l-1.083-15.894M18.571 27.126l14.716-6.098M30.23 39.488l1.698-3.024L38.033 25.6"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
        />
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .animated {
    stroke-dasharray: ${props => props.pathLength};
    stroke-dashoffset: ${props => props.pathLength};
  }
  .animated.visible {
    animation: draw 6s linear forwards;
  }

  @keyframes draw {
    from {
      stroke-dashoffset: ${props => props.pathLength};
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`;
export default NavHover;
