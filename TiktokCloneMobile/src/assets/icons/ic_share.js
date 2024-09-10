import * as React from "react";
import Svg, { Path } from "react-native-svg";
const IconShareVideo = (props) => (
  <Svg
    width="36px"
    height="36px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <Path
      fill="white"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m20 12-6.4-7v3.5C10.4 8.5 4 10.6 4 19c0-1.167 1.92-3.5 9.6-3.5V19l6.4-7z"
    />
  </Svg>
);
export default IconShareVideo;
