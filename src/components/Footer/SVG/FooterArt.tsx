import { useState, createRef, useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

export const FooterArt = (): JSX.Element => {
  const [inViewRef, inView] = useInView({});
  const pathRef = createRef();
  const pathRef1 = createRef();
  const pathRef2 = createRef();
  const [pathLength, setPathLength] = useState();

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(
        pathRef.current.getTotalLength() +
          pathRef1.current.getTotalLength() +
          pathRef2.current.getTotalLength()
      );
    }
  }, [pathRef]);

  return (
    <Wrapper ref={inViewRef} pathLength={pathLength}>
      <svg
        className={inView ? 'animated visible' : 'animated'}
        viewBox="0 0 75 55"
        width="300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d="m 8.5504932,34.780913 c -3.2368191,-2.074263 -6.6407179,1.197528 -5.6988459,4.621249 -0.1699267,3.331091 1.8948242,6.137596 3.862651,8.598389 1.9066542,2.900327 7.5182407,3.179927 7.2697317,-1.288298 0.09443,-4.138815 -2.512739,-7.596557 -4.8243899,-10.789716 -0.8156932,-0.901966 -2.0616176,-2.035576 -0.4271539,-0.710282 1.6791398,2.088454 3.6796448,3.911534 6.2716038,4.786258 3.149981,2.21518 6.21657,-1.031178 4.995372,-4.24411 -1.162169,-5.214837 -5.335248,-8.999235 -8.710222,-12.869969 -1.17473,-1.504706 -4.8581928,-3.987306 -3.3769574,-0.344761 2.3225154,5.445825 8.0132384,7.841521 12.3993724,11.288387 2.354592,1.94886 8.329837,2.70265 6.70993,-2.079847 -0.89398,-3.511962 -3.097629,-6.565216 -5.483706,-9.217692 -2.032597,-1.356345 0.446164,2.405381 1.318778,2.575931 2.715213,1.962994 5.786456,5.271974 9.459041,4.101155 3.193695,-1.288446 1.576489,-5.285408 1.54117,-7.879015 -0.469932,-3.411101 -1.810698,-7.153662 -0.130125,-10.43708 1.085315,-0.800856 3.967678,-1.9610148 4.150958,-1.9217406 -3.520961,-0.3002473 -5.86,3.8886406 -4.51118,6.9370196 0.823401,3.440332 3.630739,7.953939 7.776856,6.6386 3.655433,-1.201464 5.335036,-5.212422 6.150484,-8.654862 0.271872,-2.089607 0.464438,-7.7984579 -2.704334,-6.8004487 -1.355937,2.2083014 -0.586534,5.2503247 0.828492,7.2813477 2.026846,2.865505 6.35251,5.259471 9.557907,2.763354 2.854111,-1.853606 1.756925,-6.782331 5.676764,-7.4722943 3.037836,0.1217563 5.94056,-0.4036375 7.394803,-3.4823927 0.692276,-1.007406 1.879024,-0.8180189 2.786801,-1.3051689"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
        />
        <path
          ref={pathRef1}
          d="m 19.154596,16.833235 c -1.99612,-0.09997 -6.204625,-0.429768 -6.577607,-1.377666 1.820145,0.58789 4.920367,3.667669 4.318334,4.609189 -0.890625,-1.704558 -0.216757,-3.910733 -1.055366,-5.525178 0.179011,1.467506 -1.713944,4.196029 -1.638844,4.371275 1.432235,-1.19151 3.712195,-0.598068 4.953483,-2.07762 z"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
        />
        <path
          ref={pathRef2}
          d="m 25.885956,44.663367 c -0.640669,-3.563118 4.207438,-4.884681 6.144983,-7.193289 5.816283,-4.809991 11.64604,-9.673964 18.300053,-13.304692 4.150882,-2.414089 8.738638,-5.206708 13.728937,-4.627087 3.636147,0.967841 -0.814685,3.952648 -2.180236,5.062149 -6.589227,5.180771 -15.002567,8.682279 -19.287474,16.281739 -1.554784,1.50167 -1.079459,4.805982 1.487647,3.186603 4.83597,-2.294576 9.503003,-5.779888 15.095701,-5.674653 3.009658,1.352063 -5.590911,4.281679 -1.361584,5.391232"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
        />
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: inherit;

  .animated.visible {
    stroke-dasharray: ${(props) => props.pathLength};
    stroke-dashoffset: ${(props) => props.pathLength};
    animation: draw 4s linear forwards;
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
}
`;
