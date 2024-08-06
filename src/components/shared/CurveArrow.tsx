const CurveArrow = () => {
    return (
        <div className={'mb-[10px] z-50'}>

            <svg
                width="27"
                height="37"
                viewBox="0 0 27 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M25 31H21C9.95431 31 1 22.0457 1 11L1 1"
                    stroke="#EA0707"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M21 36L26 31L21 26"
                    stroke="#EA0707"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};

export default CurveArrow;
