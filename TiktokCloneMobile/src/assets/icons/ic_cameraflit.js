import * as React from "react";
import Svg, { Path, Polyline } from "react-native-svg";
const IconCameraFlip = (props) => (
  <Svg
    width="36px"
    height="36px"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth={3}
    stroke="#000000"
    fill="none"
    {...props}
  >
    <Path d="M54.1,51.63H9.9a2,2,0,0,1-2-2V20.37a2,2,0,0,1,2-2h7.54A1,1,0,0,0,18.2,18l4.1-4.95a2,2,0,0,1,1.52-.7H40a2,2,0,0,1,1.51.7L45.6,18a1,1,0,0,0,.76.35H54.1a2,2,0,0,1,2,2V49.63A2,2,0,0,1,54.1,51.63Z" />
    <Path
      d="M42.5,31.21a10.49,10.49,0,0,1,.29,2.46A10.66,10.66,0,0,1,24.7,41.3"
      strokeLinecap="round"
    />
    <Path d="M21.72,35.94A10.65,10.65,0,0,1,39.52,26" strokeLinecap="round" />
    <Polyline
      points="34.73 27.3 39.66 26.1 39.28 21.48"
      strokeLinecap="round"
    />
    <Polyline
      points="29.61 40.41 24.44 41.1 24.83 45.73"
      strokeLinecap="round"
    />
  </Svg>
);
export default IconCameraFlip;
