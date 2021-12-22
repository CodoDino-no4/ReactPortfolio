import React, { useState, createRef, useEffect } from 'react';
import styled from 'styled-components';

const NavHoverLeft = props => {
  const pathRef = createRef();
  const [pathLength, setPathLength] = useState();

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [pathRef]);

  return (
    <Wrapper pathLength={pathLength}>
      <svg
        className={'animated'}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        style={{ top: '200px' }}
        viewBox="0 0 8.4666667 8.4666667"
        {...props}
      >
        <path
          d="M4.135.423.531.433M15.15.333l-3.605.01M7.98-6.97l-.04 3.603M7.92 4.163l-.04 3.604M11.315-.894 14.541-2.5M.988 2.958l3.409-1.17M13.209-4.835l-2.54 2.556M9.221-3.113l1.592-3.233M4.912 7.114l1.546-3.256M5.22 2.95 2.68 5.508"
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
  // }

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
`;
export default NavHoverLeft;
