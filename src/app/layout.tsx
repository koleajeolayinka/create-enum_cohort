'use client';
import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
import { dmSans } from './fonts';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from '@/components/shared/Header'; // Import your Redux store

// export const metadata: Metadata = {
//     title: 'Enum',
//     description: '',
// };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <link rel="icon" href="/logo.svg" type="image/svg+xml" />
                <title>Enum</title>
            </head>
            <body className={dmSans.className}>
                <Provider store={store}>{children}</Provider>
            </body>
        </html>
    );
}
