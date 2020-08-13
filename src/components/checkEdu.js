import React from "react";
import { useMediaQuery } from "react-responsive";
import Education from "./education";
import Education1 from "./education1";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1200 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ maxWidth: 1199 });
  return isTablet ? children : null;
};

export default function checkEdu() {
  return (
    <div>
      <Desktop>
        <Education />
      </Desktop>
      <Tablet>
        <Education1 />
      </Tablet>
    </div>
  );
}
