import React from "react";

const LandingSVG = () => (
  <div>
    <svg
      className="animated"
      id="freepik_stories-investment-data"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlnsSvgjs="http://svgjs.com/svgjs"
    >
      <g
        id="freepik--Floor--inject-69"
        className="animable"
        style={{ transformOrigin: "249.996px 325.8px" }}
      >
        {/* SVG content continues here... */}
      </g>
      {/* Other <g> and <path> etc. elements */}
    </svg>

    <style jsx>{`
      svg#freepik_stories-investment-data:not(.animated) .animable {
        opacity: 0;
      }

      svg#freepik_stories-investment-data.animated #freepik--Arrow--inject-69 {
        animation: 1s 1 forwards ease-out lightSpeedLeft;
        animation-delay: 0s;
      }

      @keyframes lightSpeedLeft {
        from {
          transform: translate3d(-50%, 0, 0) skewX(20deg);
          opacity: 0;
        }
        60% {
          transform: skewX(-10deg);
          opacity: 1;
        }
        80% {
          transform: skewX(2deg);
        }
        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
    `}</style>
  </div>
);

export default LandingSVG;