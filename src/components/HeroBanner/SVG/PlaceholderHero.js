import React, { useState, createRef, useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const PlaceholderHero = props => {
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
        viewBox="0 0 1920 1200"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M-.436 146.646h66.748v40.105h56.348l-.025 16.711 32.613-.145-.052-16.566h57.263v-40.105h295.349v0"
          fill="none"
          stroke="#000"
          strokeWidth={0.265}
        />
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .animated {
    max-width: 300px;
    width: 100%;
    height: 100%;
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
export default PlaceholderHero;
