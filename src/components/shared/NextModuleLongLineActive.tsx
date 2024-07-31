type NextModuleLongLineActiveProps = {
  className?: string;
  connectionColour?: string;
  height?: number;
};

const NextModuleLongLineActive = ({
  className,
  connectionColour,
  height,
}: NextModuleLongLineActiveProps) => {
  return (
    <div className={`${className} mb-4 -mt-28`}>
      <svg
        width="27"
        height="157"
        viewBox="0 0 27 157"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25 151H21C9.95431 151 1 142.046 1 131L1 0.999994"
          stroke="#D0D5DD"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M21 156L26 151L21 146"
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
