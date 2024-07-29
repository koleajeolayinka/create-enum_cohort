type PlusBarProps = {
    color?: string;
    onClick?: () => void;
    props?: any;
    className?: string;
}

const PlusBar = ({ color, onClick, props, className }: PlusBarProps) => {
    return (
        <div className={`${className}`}>

        <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
            {...props}
        >
            <path
                d="M11 6.33203V15.6654"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.33203 11H15.6654"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
        </div>

    );
}

export default PlusBar;