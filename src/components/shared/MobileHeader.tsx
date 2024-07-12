import Image from 'next/image';
import NotificationHub from '@/components/shared/NotificationHub';
import UserAvatar from '@/components/shared/UserAvatar';

const MobileHeader = () => {
    return (
        <header className={'flex sm:hidden justify-between '}>
            <Image src={'./logo.svg'} alt={'Enum logo'} width={28} height={28} className={''} />
            <div className={'flex items-center ml-96'}>
                <UserAvatar />
                <NotificationHub />
            </div>
        </header>
    );
};

export default MobileHeader;
