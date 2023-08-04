import callCenter from "./icons/call_center.svg";
import nossaSeguros from "./icons/nossalogo.svg";

import logo1 from "./icons/1.svg";
import logo2 from "./icons/2.svg";
import logo3 from "./icons/3.svg";
import logo4 from "./icons/4.svg";
import logo5 from "./icons/5.svg";
import logo6 from "./icons/6.svg";
import logo7 from "./icons/7.svg";
import logo8 from "./icons/8.svg";
import bai from "./icons/iconBai.svg";

export function assets() {
  return {
    iconsGame: [
      { src: logo1, matched: false },
      { src: logo2, matched: false },
      { src: logo3, matched: false },
      { src: logo4, matched: false },
      { src: logo5, matched: false },
      { src: logo6, matched: false },
      { src: logo7, matched: false },
      { src: logo8, matched: false },
    ],
    fallBack: {
      src: bai
    },
    callCenter,
    nossaSeguros,
  };
}
