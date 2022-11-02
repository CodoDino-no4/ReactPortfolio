import React, { createRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import HeroPath from './HeroPaths';

const HeroSVG = (props) => {
  const [inViewRef, inView] = useInView({});
  const pathRef = createRef();
  const [pathLength, setPathLength] = useState();

  useEffect(() => {
    setPathLength(pathRef.current.getTotalLength());
  }, [pathRef]);

  return (
    <Wrapper ref={inViewRef} pathLength={pathLength}>
      <svg
        className={inView ? 'animated visible' : 'animated'}
        viewBox={props.windowSize <= 480 ? "0 -20 140 240" : "0 15 450 250"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d={props.windowSize <= 480 ? HeroPath.Mobile : HeroPath.Desktop}
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.5}
        />
      </svg>
    </Wrapper >
  );
};

const Wrapper = styled.div`
  height:inherit;
  
  z-index: 0;
   svg {
       max-height: 95vh;
   }

  .animated.visible {
    stroke-dasharray: ${(props) => props.pathLength};
    stroke-dashoffset: ${(props) => props.pathLength};
    animation: draw 15s linear forwards;
    max-height: max-content;
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
}
`;
export default HeroSVG;
