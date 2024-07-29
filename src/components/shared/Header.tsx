import Image from 'next/image';
import HeaderNav from '@/components/shared/HeaderNav';
import UserNav from '@/components/shared/UserNav';
import MobileHeader from '@/components/shared/MobileHeader';
const Header = () => {
    return (
        <>
            <header
                className={
                    'flex items-center h-[7vh] justify-between py-8 px-16 max-lg:px-2 max-lg:py-1 shadow-sm max-sm:hidden'
                }
                style={{ boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.1)' }}
            >
                <Image src="/enum.svg" alt="Enum Logo" width={97.415} height={29.022} />
                <HeaderNav />
                <UserNav />
            </header>
            <MobileHeader />
        </>
    );
};

export default Header;
