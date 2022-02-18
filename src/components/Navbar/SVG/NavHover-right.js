import React, { useState, createRef, useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const NavHoverRight = (props) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
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
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 8.4666667 8.4666667"
        {...props}
      >
        <path
          d="m7.712 8.034-3.604.01M.543.73.502 4.333M3.878 6.807 7.104 5.2M5.771 2.866l-2.54 2.556M1.784 4.588l1.592-3.234"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
        />
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
.animated {
          stroke-dasharray: 5;
    stroke-dashoffset: 5;
}
    .animated:hover {
    stroke-dasharray: 5;
    stroke-dashoffset: 5;
    animation: draw 0.4s linear forwards;

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
`;
export default NavHoverRight;
