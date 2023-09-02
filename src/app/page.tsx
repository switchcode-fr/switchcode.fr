import Head from "next/head";
import react from "react";

export default function Home() {
    return (
        <div>
            <Head>
                <title>switchcode.fr</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="flex flex-col items-center justify-around p-20 space-y-3">
                <img src="/switchcode-logo-100.svg" alt="switchcode logo"/>
                <h1 className="inline-block italic font-light text-white">
                    switchcode.fr
                </h1>
            </div>
        </div>
    )
}
