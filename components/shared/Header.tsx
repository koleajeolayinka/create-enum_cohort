import Image from "next/image";
import {FiBell} from "react-icons/fi";

const Header = () => {
    return (
        <header className="flex justify-between px-6 pt-3.5">
            <Image src="/enum.svg" alt="Enum Logo" width={97.415} height={29.022}/>
            <div className="text-amber-200">
                <ul className="flex space-x-4">
                    <li>Home</li>
                    <li>Workspace</li>
                    <li>Resources Library</li>
                </ul>
            </div>
            <nav className="">
                <ul className="flex space-x-4">
                    <FiBell xmlns="http://www.w3.org/2000/svg" size="27" viewBox="0 0 27 27" fill="none"
                            stroke="#475661" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    <div>
                        <Image src="/avatar.svg" alt="Avatar" width={36} height={36}/>
                    </div>
                    <li>Sign In</li>
                    <li>Sign Up</li>
                </ul>
            </nav>
        </header>


    );
}

export default Header;