import Head from "next/head";
import Particles from "react-particles-js";

function Home() {
  return (
    <div>
      <Head>
        <title>switchcode.fr</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-around p-20 space-y-3">
        <img src="/switchcode-logo-100.svg" alt="switchcode logo" />
        <h1 className="inline-block italic font-light text-white">
          switchcode.fr
        </h1>
      </div>

      <Particles
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
    </div>
  );
}

export default Home;
