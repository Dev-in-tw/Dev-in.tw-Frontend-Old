import Head from "next/head";
import Navbar from "@/components/navbar";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Dev-in.tw</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="keyword" content="Dev-in.tw" />
            </Head>
            <Navbar />
            <div className="h-[100svh]">{children}</div>
        </>
    );
}
