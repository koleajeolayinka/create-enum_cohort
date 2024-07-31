type NextModuleLongLineActiveProps = {
    className?: string;
    connectionColour?: string;
    height?: number;
};

const NextModuleLongLineActive = ({className, connectionColour, height}: NextModuleLongLineActiveProps) => {
  return (
    <div className={`${className}`}>
      <svg
        width="27"
        height="148"
        viewBox="0 0 27 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25 142H21C9.95431 142 1 133.046 1 122L1 0.999997"
          stroke="#D0D5DD"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M21 147L26 142L21 137"
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
