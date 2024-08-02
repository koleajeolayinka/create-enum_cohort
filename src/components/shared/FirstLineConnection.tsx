type FirstLineConnectionProps = {
  className?: string;
  connectionColour?: string;
};

const FirstLineConnection = ({
  className = "",
  connectionColour,
}: FirstLineConnectionProps) => {
  return (
    <div className={`mb-4 ${className}`}>
      <svg
        width="27"
        height="100"
        viewBox="0 0 27 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25 94H21C9.95431 94 1 85.0457 1 74L1 57"
          stroke={connectionColour}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M21 99L26 94L21 89"
          stroke={connectionColour}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default FirstLineConnection;



// type FirstLineConnectionProps = {
//     className?: string;
//     connectionColour?: string;
//     height?: number; // Add a height prop to make the SVG height dynamic
// };
//
// const FirstLineConnection = ({
//                                  className = "",
//                                  connectionColour,
//                                  height = 10, // Default height
//                              }: FirstLineConnectionProps) => {
//     return (
//         <div className={`mb-4 ${className}`}>
//             <svg
//                 width="27"
//                 height={height}
//                 viewBox={`0 0 27 ${height}`}
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//             >
//                 <path
//                     d={`M25 ${height - 6}H21C9.95431 ${height - 6} 1 ${height - 16} 1 ${height - 26}L1 1`}
//                     stroke={connectionColour}
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                 />
//                 <path
//                     d={`M21 ${height}L26 ${height - 5}L21 ${height - 10}`}
//                     stroke={connectionColour}
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//             </svg>
//         </div>
//     );
// };
//
// export default FirstLineConnection;