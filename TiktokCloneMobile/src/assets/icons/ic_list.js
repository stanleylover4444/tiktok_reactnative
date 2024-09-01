import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const SvgPostedIcon = (props) => (
  <Svg
    width="24px"
    height="24px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect width={16} height={16} id="icon-bound" fill="none" />
    <Path d="M4,3v2h12V3H4z M0,5h2V3H0V5z M4,9h12V7H4V9z M0,9h2V7H0V9z M4,13h12v-2H4V13z M0,13h2v-2H0V13z" />
  </Svg>
);
export default SvgPostedIcon;
