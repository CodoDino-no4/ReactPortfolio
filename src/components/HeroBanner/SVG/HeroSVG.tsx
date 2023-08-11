import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import HeroPath from './HeroPaths.json';
import React from 'react';

interface props {
  windowSize: number;
}

export const HeroSVG = ({windowSize}: props): JSX.Element => {

  const [inViewRef, inView] = useInView({});
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState<number>(0);

  useEffect(() => {
    if (pathRef.current !== null) {
      setPathLength(
        pathRef.current.getTotalLength()
      );
    }
  }, [pathRef]);

  return (
    <HeroWrapper ref={inViewRef} pathLength={pathLength}>
      <svg
        className={inView ? 'animated visible' : 'animated'}
        viewBox={windowSize <= 600 ? '0 -20 140 240' : '0 15 450 250'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d={windowSize <= 600 ? HeroPath.Mobile : HeroPath.Desktop}
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.5}
        />
      </svg>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
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
