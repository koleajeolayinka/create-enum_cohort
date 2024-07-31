type LineConnectionProps = {
    className?: string;
    connectionColour?: string;
};

const SubModuleLineConnection = ({
                            className = "",
                            connectionColour,
                        }: LineConnectionProps) => {
    return (
        <div className={` mb-4 ${className}`}>
            <svg
                width="12"
                height="40"
                viewBox="0 0 12 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10 34V34C5.02944 34 1 29.9706 1 25L1 1"
                    stroke={connectionColour}
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <path
                    d="M6 39L11 34L6 29"
                    stroke={connectionColour}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
    );
};

export default SubModuleLineConnection;
