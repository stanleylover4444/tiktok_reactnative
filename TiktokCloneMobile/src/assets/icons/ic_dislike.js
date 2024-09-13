import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const IconDislike = ({ color = "#000000", width = 24, height = 24, ...props }) => (
  <Svg
    fill={color}
    width={width}
    height={height}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Fill">
      <Path d="M22,3H8A5,5,0,0,0,3,8v8a5,5,0,0,0,5,5h3v6a3,3,0,0,0,3,3h.4a3,3,0,0,0,2.91-2.28l2-5.5A1.84,1.84,0,0,1,21,21h8V3ZM17.39,21.55l-2,5.55,0,.12a1,1,0,0,1-1,.78H14a1,1,0,0,1-1-1V19H8a3,3,0,0,1-3-3V8A3,3,0,0,1,8,5H21V19A3.83,3.83,0,0,0,17.39,21.55ZM27,19H23V5h4Z" />
    </G>
  </Svg>
);

export default IconDislike;
