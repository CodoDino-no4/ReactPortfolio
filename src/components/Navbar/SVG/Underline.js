import React, { useState, createRef, useEffect } from 'react';
import styled from 'styled-components';

const Underline = (props) => {
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
        viewBox="0 0 30.956244 2.116668"
        width={props.linkWidth }
        height="25"
        {...props}
      >
        <path
          ref={pathRef}
          d="M 2.4734291,2.261594 C 2.9323167,2.015267 3.1374231,1.33156 3.696426,1.287361 4.6238329,1.214031 5.0192606,2.386288 5.8847913,2.377081 6.6722497,2.368681 7.0293856,1.382398 7.8540236,1.373236 8.5252385,1.365736 9.0457397,2.116412 9.6988835,2.149069 10.247559,2.176499 10.521032,1.41877 11.069943,1.379158 c 0.782955,-0.0565 1.152339,0.921779 1.972193,0.849863 0.770959,-0.06763 1.285085,-0.869641 2.061032,-0.832096 0.7114,0.03442 1.381279,0.813321 2.102488,0.689959 0.626415,-0.107148 0.8557,-0.801857 1.622766,-0.814329 0.882511,-0.01435 1.458142,0.790158 2.283126,0.91797 0.718937,0.111383 1.19962,-0.623063 1.889278,-0.722531 0.800614,-0.115471 1.364424,0.563456 2.188365,0.530054"
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
  a:hover {
    stroke-dasharray: ${(props) => props.linkWidth};
    stroke-dashoffset: ${(props) => props.linkWidth};
    animation: draw 0.4s linear forwards;
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
`;
export default Underline;
