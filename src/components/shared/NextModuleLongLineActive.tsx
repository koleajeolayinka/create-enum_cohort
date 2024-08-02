type NextModuleLongLineActiveProps = {
  className?: string;
  connectionColour?: string;
  height?: number;
};

const NextModuleLongLineActive = ({
                                      className,
                                      connectionColour,
                                      height = 157,
                                  }: NextModuleLongLineActiveProps) => {
    return (
        <div className={`${className} mb-4 -mt-[7rem]`}>
            <svg
                width="27"
                height={height || 157} // Use the height prop or default to 157
                viewBox={`0 0 27 ${height || 157}`} // Adjust the viewBox height dynamically
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d={`M25 ${height - 6}H21C9.95431 ${height - 6} 1 ${height - 16} 1 ${height - 27}L1 1`}
                    stroke="#D0D5DD"
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <path
                    d={`M21 ${height}L26 ${height - 5}L21 ${height - 10}`}
                    stroke="#D0D5DD"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
    );
};

export default NextModuleLongLineActive;