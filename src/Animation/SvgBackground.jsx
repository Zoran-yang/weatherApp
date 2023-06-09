import { useSpring, animated } from "@react-spring/web";

export default function SvgBackground() {
  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  //matchMedia() to render components differently based on resolution
  //or orientation similarly as when using media queries.
  const mql = window.matchMedia("(max-width: 700px)");

  if (mql.matches) {
    // if screen is smaller than 600px, render this svg with tree
    return (
      <animated.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 870 688"
        width="100%"
        // height="auto"
        style={{ ...springs }}
      >
        <path
          fill="#3f3d56"
          d="M80.859 603L71.359 674 90.359 674 80.859 603z"
        ></path>
        <path
          fill="#3f3d56"
          d="M70.859 609L61.359 680 80.359 680 70.859 609z"
        ></path>
        <path
          fill="#3f3d56"
          d="M58.859 609L49.359 680 68.359 680 58.859 609z"
        ></path>
        <path
          fill="#3f3d56"
          d="M652.859 581L643.359 652 662.359 652 652.859 581z"
        ></path>
        <path
          fill="#3f3d56"
          d="M665.859 581L656.359 652 675.359 652 665.859 581z"
        ></path>
        <path
          fill="#3f3d56"
          d="M675.859 596L666.359 667 685.359 667 675.859 596z"
        ></path>
        <path
          fill="#3f3d56"
          d="M688.859 596L679.359 667 698.359 667 688.859 596z"
        ></path>
        <path
          fill="#3f3d56"
          d="M744.859 607L735.359 678 754.359 678 744.859 607z"
        ></path>
        <path
          fill="#3f3d56"
          d="M757.859 607L748.359 678 767.359 678 757.859 607z"
        ></path>
        <path
          fill="#3f3d56"
          d="M775.889 682L759.829 682 760.369 678 763.749 652.74 763.859 651.87 767.859 622 772.239 654.75 774.359 670.58 775.889 682z"
        ></path>
        <path
          fill="#3f3d56"
          d="M788.889 682L772.829 682 774.359 670.58 776.349 655.74 780.859 622 785.679 658.04 785.679 658.05 787.089 668.58 788.889 682z"
        ></path>
        <path
          fill="#3f3d56"
          d="M802.419 682L785.299 682 787.089 668.58 788.409 658.73 793.859 618 799.699 661.62 800.359 666.58 802.419 682z"
        ></path>
        <path
          fill="#3f3d56"
          d="M815.419 682L798.299 682 800.359 666.58 800.979 661.95 806.859 618 812.859 662.87 813.179 665.21 815.419 682z"
        ></path>
        <path
          fill="#3f3d56"
          d="M823.419 682L810.299 682 812.569 665.05 812.859 662.87 816.859 633 821.469 667.49 823.359 681.58 823.419 682z"
        ></path>
        <path
          fill="#3f3d56"
          d="M836.419 682L823.299 682 823.359 681.58 825.109 668.5 829.859 633 834.989 671.31 836.419 682z"
        ></path>
        <path
          fill="#e6e6e6"
          d="M870.359 688h-870s176.64-67.87 436.81-67.1c1.46 0 2.92.01 4.38.02q7.785.045 15.66.17 6.165.105 12.38.26c1.79.04 3.58.09 5.38.14l2.14.06c1.65.05 3.31.1 4.98.16 3.13.1 6.27.22 9.42.34q4.14.165 8.32.36c1.06.04 2.14.09 3.21.15q7.575.345 15.21.8l3.55.21c1.63.09 3.27.2 4.9.3q3.24.21 6.48.43c2.81.19 5.61.39 8.42.6q8.82.645 17.74 1.42c4.42.37 8.85.78 13.3 1.2q2.835.27 5.69.56 4.365.42 8.75.89l5.59.6c2.25.24 4.49.49 6.74.75 2.24.26 4.5.52 6.75.79q3.39.405 6.78.82c2.27.28 4.53.56 6.8.86 2.24.28 4.48.58 6.73.88q14.37 1.905 28.95 4.15c1.86.28 3.74.57 5.61.87q2.895.45 5.81.93 4.05.645 8.13 1.34c2.33.39 4.66.78 7 1.19 2.11.36 4.24.73 6.36 1.11l.66.12c2.34.41 4.69.84 7.03 1.27 2.35.43 4.71.87 7.06 1.31q3.54.66 7.08 1.35c2.37.46 4.73.92 7.1 1.39l5.54 1.11c.92.19 1.84.37 2.76.56q2.97.615 5.96 1.24 3.57.75 7.15 1.51c.27.06.53.12.8.17q5.55 1.2 11.11 2.44c.5.11 1.01.23 1.52.34q2.91.645 5.82 1.32c1.94.45 3.88.89 5.83 1.35a2.048 2.048 0 01.24.05c2.75.64 5.49 1.29 8.25 1.96q2.055.48 4.11.99c1.88.45 3.75.91 5.63 1.38 1.23.31 2.46.62 3.7.93.91.21 1.82.44 2.73.68q2.88.705 5.77 1.46 2.685.69 5.37 1.39a.834.834 0 01.15.04l1.28.33c1.31.34 2.62.69 3.94 1.04 1.35.36 2.71.72 4.07 1.09 1.19.32 2.39.64 3.58.97a.296.296 0 01.1.02c.17.04.34.09.51.14 1.38.37 2.76.74 4.14 1.13 1.38.38 2.76.76 4.15 1.15.14.03.28.07.42.11q1.605.435 3.21.9s0-.01.01 0c.61.16 1.22.34 1.83.51q2.445.69 4.89 1.39c1.05.3 2.11.6 3.16.91 2.93.85 5.87 1.7 8.81 2.57s5.89 1.75 8.83 2.64c1.77.53 3.53 1.07 5.3 1.62q2.49.75 4.98 1.53c2.48.77 4.97 1.54 7.45 2.33z"
        ></path>
        <path
          fill="#3f3d56"
          d="M870.057 688.953c-246.232-77.947-469.509-73.795-613.454-56.585C100.655 651.013 1.699 688.557.718 688.934L0 687.066c.984-.378 100.173-38.01 256.365-56.684a1486.92 1486.92 0 01276.89-7.083 1444.325 1444.325 0 01337.406 63.748z"
        ></path>
        <circle cx="706.859" cy="199.451" r="163.5" fill="#6c63ff"></circle>
        <path
          d="M828.48 90.245A163.513 163.513 0 01556.041 263.29a163.514 163.514 0 10272.44-173.044z"
          opacity="0.2"
        ></path>
        <path
          fill="#3f3d56"
          d="M707.308 199.451L707.757 199.451 715.842 663 698.774 663 707.308 199.451z"
        ></path>
        <path
          fill="#3f3d56"
          d="M882.309 545.732H890.394V576.276H882.309z"
          transform="rotate(62.234 891.422 371.846)"
        ></path>
        <path
          fill="#3f3d56"
          d="M316.512 666.924s.69-14.47 14.847-12.788"
        ></path>
        <circle cx="312.512" cy="646.069" r="7.085" fill="#6c63ff"></circle>
        <path fill="#3f3d56" d="M311.359 658H313.359V672H311.359z"></path>
        <path
          fill="#3f3d56"
          d="M574.512 669.924s.69-14.47 14.847-12.788"
        ></path>
        <circle cx="570.512" cy="649.069" r="7.085" fill="#6c63ff"></circle>
        <path fill="#3f3d56" d="M569.359 661H571.359V675H569.359z"></path>
        <path
          fill="#3f3d56"
          d="M149.512 644.924s.69-14.47 14.847-12.788"
        ></path>
        <circle cx="145.512" cy="624.069" r="7.085" fill="#6c63ff"></circle>
        <path fill="#3f3d56" d="M144.359 636H146.359V650H144.359z"></path>
        <path
          fill="#3f3d56"
          d="M258.512 625.924s.69-14.47 14.847-12.788"
        ></path>
        <circle cx="254.512" cy="605.069" r="7.085" fill="#6c63ff"></circle>
        <path fill="#3f3d56" d="M253.359 617H255.359V631H253.359z"></path>
        <path
          fill="#3f3d56"
          d="M531.512 652.924s.69-14.47 14.847-12.788"
        ></path>
        <circle cx="527.512" cy="632.069" r="7.085" fill="#6c63ff"></circle>
        <path fill="#3f3d56" d="M526.359 644H528.359V658H526.359z"></path>
        <path
          fill="#3f3d56"
          d="M333.153 39.466l9.206-7.363c-7.152-.789-10.09 3.111-11.293 6.198-5.587-2.32-11.669.72-11.669.72l18.42 6.688a13.938 13.938 0 00-4.664-6.243zM473.153 114.466l9.206-7.363c-7.152-.789-10.09 3.111-11.293 6.198-5.587-2.32-11.669.72-11.669.72l18.42 6.688a13.938 13.938 0 00-4.664-6.243zM322.153 178.466l9.206-7.363c-7.152-.789-10.09 3.111-11.293 6.198-5.587-2.32-11.669.72-11.669.72l18.42 6.688a13.938 13.938 0 00-4.664-6.243z"
        ></path>
      </animated.svg>
    );
  } else {
    // if screen is bigger than 600px, render this svg without tree
    return (
      <animated.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 870 688"
        style={{ ...springs }}
      >
        <path
          fill="#3f3d56"
          d="M80.859 603L71.359 674 90.359 674 80.859 603z"
        ></path>
        <path
          fill="#3f3d56"
          d="M70.859 609L61.359 680 80.359 680 70.859 609z"
        ></path>
        <path
          fill="#3f3d56"
          d="M58.859 609L49.359 680 68.359 680 58.859 609z"
        ></path>
        <path
          fill="#3f3d56"
          d="M652.859 581L643.359 652 662.359 652 652.859 581z"
        ></path>
        <path
          fill="#3f3d56"
          d="M665.859 581L656.359 652 675.359 652 665.859 581z"
        ></path>
        <path
          fill="#3f3d56"
          d="M675.859 596L666.359 667 685.359 667 675.859 596z"
        ></path>
        <path
          fill="#3f3d56"
          d="M688.859 596L679.359 667 698.359 667 688.859 596z"
        ></path>
        <path
          fill="#3f3d56"
          d="M744.859 607L735.359 678 754.359 678 744.859 607z"
        ></path>
        <path
          fill="#3f3d56"
          d="M757.859 607L748.359 678 767.359 678 757.859 607z"
        ></path>
        <path
          fill="#3f3d56"
          d="M775.889 682L759.829 682 760.369 678 763.749 652.74 763.859 651.87 767.859 622 772.239 654.75 774.359 670.58 775.889 682z"
        ></path>
        <path
          fill="#3f3d56"
          d="M788.889 682L772.829 682 774.359 670.58 776.349 655.74 780.859 622 785.679 658.04 785.679 658.05 787.089 668.58 788.889 682z"
        ></path>
        <path
          fill="#3f3d56"
          d="M802.419 682L785.299 682 787.089 668.58 788.409 658.73 793.859 618 799.699 661.62 800.359 666.58 802.419 682z"
        ></path>
        <path
          fill="#3f3d56"
          d="M815.419 682L798.299 682 800.359 666.58 800.979 661.95 806.859 618 812.859 662.87 813.179 665.21 815.419 682z"
        ></path>
        <path
          fill="#3f3d56"
          d="M823.419 682L810.299 682 812.569 665.05 812.859 662.87 816.859 633 821.469 667.49 823.359 681.58 823.419 682z"
        ></path>
        <path
          fill="#3f3d56"
          d="M836.419 682L823.299 682 823.359 681.58 825.109 668.5 829.859 633 834.989 671.31 836.419 682z"
        ></path>
        <path
          fill="#e6e6e6"
          d="M870.359 688h-870s176.64-67.87 436.81-67.1c1.46 0 2.92.01 4.38.02q7.785.045 15.66.17 6.165.105 12.38.26c1.79.04 3.58.09 5.38.14l2.14.06c1.65.05 3.31.1 4.98.16 3.13.1 6.27.22 9.42.34q4.14.165 8.32.36c1.06.04 2.14.09 3.21.15q7.575.345 15.21.8l3.55.21c1.63.09 3.27.2 4.9.3q3.24.21 6.48.43c2.81.19 5.61.39 8.42.6q8.82.645 17.74 1.42c4.42.37 8.85.78 13.3 1.2q2.835.27 5.69.56 4.365.42 8.75.89l5.59.6c2.25.24 4.49.49 6.74.75 2.24.26 4.5.52 6.75.79q3.39.405 6.78.82c2.27.28 4.53.56 6.8.86 2.24.28 4.48.58 6.73.88q14.37 1.905 28.95 4.15c1.86.28 3.74.57 5.61.87q2.895.45 5.81.93 4.05.645 8.13 1.34c2.33.39 4.66.78 7 1.19 2.11.36 4.24.73 6.36 1.11l.66.12c2.34.41 4.69.84 7.03 1.27 2.35.43 4.71.87 7.06 1.31q3.54.66 7.08 1.35c2.37.46 4.73.92 7.1 1.39l5.54 1.11c.92.19 1.84.37 2.76.56q2.97.615 5.96 1.24 3.57.75 7.15 1.51c.27.06.53.12.8.17q5.55 1.2 11.11 2.44c.5.11 1.01.23 1.52.34q2.91.645 5.82 1.32c1.94.45 3.88.89 5.83 1.35a2.048 2.048 0 01.24.05c2.75.64 5.49 1.29 8.25 1.96q2.055.48 4.11.99c1.88.45 3.75.91 5.63 1.38 1.23.31 2.46.62 3.7.93.91.21 1.82.44 2.73.68q2.88.705 5.77 1.46 2.685.69 5.37 1.39a.834.834 0 01.15.04l1.28.33c1.31.34 2.62.69 3.94 1.04 1.35.36 2.71.72 4.07 1.09 1.19.32 2.39.64 3.58.97a.296.296 0 01.1.02c.17.04.34.09.51.14 1.38.37 2.76.74 4.14 1.13 1.38.38 2.76.76 4.15 1.15.14.03.28.07.42.11q1.605.435 3.21.9s0-.01.01 0c.61.16 1.22.34 1.83.51q2.445.69 4.89 1.39c1.05.3 2.11.6 3.16.91 2.93.85 5.87 1.7 8.81 2.57s5.89 1.75 8.83 2.64c1.77.53 3.53 1.07 5.3 1.62q2.49.75 4.98 1.53c2.48.77 4.97 1.54 7.45 2.33z"
        ></path>
        <path
          fill="#3f3d56"
          d="M870.057 688.953c-246.232-77.947-469.509-73.795-613.454-56.585C100.655 651.013 1.699 688.557.718 688.934L0 687.066c.984-.378 100.173-38.01 256.365-56.684a1486.92 1486.92 0 01276.89-7.083 1444.325 1444.325 0 01337.406 63.748z"
        ></path>
        {/*-------------------------- tree part---------------------------- */}
        {/* <circle cx="706.859" cy="199.451" r="163.5" fill="#6c63ff"></circle> */}
        {/* <path
          d="M828.48 90.245A163.513 163.513 0 01556.041 263.29a163.514 163.514 0 10272.44-173.044z"
          opacity="0.2"
        ></path> */}
        {/* <path
          fill="#3f3d56"
          d="M707.308 199.451L707.757 199.451 715.842 663 698.774 663 707.308 199.451z"
        ></path> */}
        {/* <path
          fill="#3f3d56"
          d="M882.309 545.732H890.394V576.276H882.309z"
          transform="rotate(62.234 891.422 371.846)"
        ></path> */}
        {/*-------------------------- tree part---------------------------- */}
        <path
          fill="#3f3d56"
          d="M316.512 666.924s.69-14.47 14.847-12.788"
        ></path>
        <circle cx="312.512" cy="646.069" r="7.085" fill="#6c63ff"></circle>
        <path fill="#3f3d56" d="M311.359 658H313.359V672H311.359z"></path>
        <path
          fill="#3f3d56"
          d="M574.512 669.924s.69-14.47 14.847-12.788"
        ></path>
        <circle cx="570.512" cy="649.069" r="7.085" fill="#6c63ff"></circle>
        <path fill="#3f3d56" d="M569.359 661H571.359V675H569.359z"></path>
        <path
          fill="#3f3d56"
          d="M149.512 644.924s.69-14.47 14.847-12.788"
        ></path>
        <circle cx="145.512" cy="624.069" r="7.085" fill="#6c63ff"></circle>
        <path fill="#3f3d56" d="M144.359 636H146.359V650H144.359z"></path>
        <path
          fill="#3f3d56"
          d="M258.512 625.924s.69-14.47 14.847-12.788"
        ></path>
        <circle cx="254.512" cy="605.069" r="7.085" fill="#6c63ff"></circle>
        <path fill="#3f3d56" d="M253.359 617H255.359V631H253.359z"></path>
        <path
          fill="#3f3d56"
          d="M531.512 652.924s.69-14.47 14.847-12.788"
        ></path>
        <circle cx="527.512" cy="632.069" r="7.085" fill="#6c63ff"></circle>
        <path fill="#3f3d56" d="M526.359 644H528.359V658H526.359z"></path>
        <path
          fill="#3f3d56"
          d="M333.153 39.466l9.206-7.363c-7.152-.789-10.09 3.111-11.293 6.198-5.587-2.32-11.669.72-11.669.72l18.42 6.688a13.938 13.938 0 00-4.664-6.243zM473.153 114.466l9.206-7.363c-7.152-.789-10.09 3.111-11.293 6.198-5.587-2.32-11.669.72-11.669.72l18.42 6.688a13.938 13.938 0 00-4.664-6.243zM322.153 178.466l9.206-7.363c-7.152-.789-10.09 3.111-11.293 6.198-5.587-2.32-11.669.72-11.669.72l18.42 6.688a13.938 13.938 0 00-4.664-6.243z"
        ></path>
      </animated.svg>
    );
  }
}
