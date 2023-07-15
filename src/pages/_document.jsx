/* eslint-disable @next/next/google-font-display */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="zh-TW">
            <Head>
                <meta charSet="UTF-8" />
                {/*<!-- Primary Meta Tags -->*/}
                <meta name="title" content="Dev-in.tw" />
                <meta
                    name="description"
                    content="Dev-in.tw是一個由HACO和OnCloud聯合構思的專案，打造一個給予台灣的開發者建立個人子網域的平台，提供 A、AAAA、CNAME、URI......等功能。"
                />

                {/*<!-- Open Graph / Facebook -->*/}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.dev-in.tw/" />
                <meta property="og:title" content="Dev-in.tw" />
                <meta
                    property="og:description"
                    content="Dev-in.tw是一個由HACO和OnCloud聯合構思的專案，打造一個給予台灣的開發者建立個人子網域的平台，提供 A、AAAA、CNAME、URI......等功能。"
                />
                <meta property="og:image" content="/images/banner.png" />

                {/*<!-- Twitter -->*/}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.dev-in.tw/" />
                <meta property="twitter:title" content="Dev-in.tw" />
                <meta
                    property="twitter:description"
                    content="Dev-in.tw是一個由HACO和OnCloud聯合構思的專案，打造一個給予台灣的開發者建立個人子網域的平台，提供 A、AAAA、CNAME、URI......等功能。"
                />
                <meta property="twitter:image" content="/images/banner.png" />

                {/*<!-- Google Fonts -->*/}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin={true}
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
