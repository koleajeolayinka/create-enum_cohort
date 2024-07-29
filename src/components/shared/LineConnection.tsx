// type LineConnectionProps = {
//   className?: string;
//   connectionColour?: string;
//
// };
//
// const LineConnection = ({className = "", connectionColour}: LineConnectionProps) => {
//   return (
//     <div className={`mb-4 ${className}`}>
//     <svg
//       width="27"
//       height={101}
//       viewBox="0 0 27 101"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M25 95H21C9.95431 95 1 86.0457 1 75L1 1"
//         // stroke="#D0D5DD"
//           stroke={connectionColour}
//         stroke-width="2"
//         stroke-linecap="round"
//       />
//       <path
//         d="M21 100L26 95L21 90"
//         // stroke="#D0D5DD"
//           stroke={connectionColour}
//         stroke-width="2"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       />
//     </svg>
//     </div>
//   );
// };
//
// export default LineConnection;

type LineConnectionProps = {
    className?: string;
    connectionColour?: string;
    height?: number; // Add a height prop to make the SVG height dynamic
};

const LineConnection = ({ className = "", connectionColour, height = 100}: LineConnectionProps) => {
    return (
        <div className={`mb-4 ${className}`}>
            <svg
                width="27"
                height={height}
                viewBox={`0 0 27 ${height}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d={`M25 ${height - 6}H21C9.95431 ${height - 6} 1 ${height - 16} 1 ${height - 26}L1 1`}
                    stroke={connectionColour}
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d={`M21 ${height}L26 ${height - 5}L21 ${height - 10}`}
                    stroke={connectionColour}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

        </div>
    );
};

export default LineConnection;