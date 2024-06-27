import Image from 'next/image';
import { FiBell } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa';

const Header = () => {
    const userProfile: string = '/avatar.svg';
    return (
        <header className="flex justify-between px-6 pt-3.5">
            <Image src="/enum.svg" alt="Enum Logo" width={97.415} height={29.022} />
            <nav className="text-amber-200">
                <ul className="flex space-x-4">
                    <li>Home</li>
                    <li>Workspace</li>
                    <li>Resources Library</li>
                </ul>
            </nav>
            <div className="">
                <ul className="flex space-x-4">
                    <div style={{ position: 'relative' }}>
                        <FiBell
                            xmlns="http://www.w3.org/2000/svg"
                            size="27"
                            viewBox="0 0 27 27"
                            fill="none"
                            stroke="#475661"
                            strokeWidth="2.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <span
                            style={{
                                position: 'absolute',
                                top: '0',
                                right: '0',
                                background: '#008EEF',
                                borderRadius: '50%',
                                color: 'white',
                                padding: '2px 5px',
                                width: 'auto',
                                height: '15.6px',
                                justifyContent: 'center',
                            }}
                        >
                            1
                        </span>
                    </div>
                    <div className={'flex'}>
                        <Image src={userProfile} alt="Avatar" width={36} height={36} />
                        <h1>Onowomano</h1>
                        <FaChevronDown
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            path="M6.49902 9.09375L12.499 15.0938L18.499 9.09375"
                            stroke="#475661"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </div>
                    <li>Sign In</li>
                    <li>Sign Up</li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
