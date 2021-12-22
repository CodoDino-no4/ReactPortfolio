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
        viewBox="0 10 500 900"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M-.436 146.646h66.748v40.105h56.348l-.025 16.711 32.613-.145-.052-16.566h57.263v-40.105h295.349v0"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
.animated {
          stroke-dasharray:620;
    stroke-dashoffset: 620;
}
    .animated:hover {
    stroke-dasharray: 620;
    stroke-dashoffset: 620;
    animation: draw 4s linear forwards;

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
`;
export default PlaceholderHero;
