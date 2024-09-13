import * as React from "react";
import Svg, { Path } from "react-native-svg";

const IconSaveVideo = (props) => (
  <Svg
    width="36px"
    height="36px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5 22V3C5 2.44772 5.44772 2 6 2H18C18.5523 2 19 2.44772 19 3V22L12 15.8889L5 22Z"
      fill={props.fill || "white"} // Sử dụng màu sắc từ props
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default IconSaveVideo;
