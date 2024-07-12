import { DM_Sans, IBM_Plex_Serif } from 'next/font/google';

export const dmSans = DM_Sans({ subsets: ['latin'], display: 'swap' });

export const ibmPlexSerif = IBM_Plex_Serif({
    preload: false,
    subsets: ['latin'],
    display: 'swap',
    style: 'normal',
    weight: '700',
});
