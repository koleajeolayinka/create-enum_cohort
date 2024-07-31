type SubModuleLongLineProps = {
  className?: string;
  connectionColour?: string;
  height?: number;
};

const SubModuleLongLine = ({
  className,
  connectionColour,
  height,
}: SubModuleLongLineProps) => {
  return (
    <div className={`${className} mb-4 -mt-10 `}>
      <svg
        width="12"
        height="79"
        viewBox="0 0 12 79"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 73V73C5.02944 73 1 68.9706 1 64L1 1"
          stroke="#095AD3"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M6 78L11 73L6 68"
          stroke="#095AD3"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default SubModuleLongLine;
