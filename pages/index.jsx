import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to styled layouts</h1>
      <p>
        This repo is my attempt at writing the components from{' '}
        <a href="/https://every-layout.dev/">Every layout</a> with React &
        styled components.
      </p>
      <p>
        I highly recommend purchasing a copy of{' '}
        <a href="/https://every-layout.dev/">Every layout</a>.
      </p>
      <p>
        The list of pages are my personal notes about each component to help me
        better understand them. Writing notes help me to retain information
        better :).
      </p>
      <p>
        The application was built with next.js. The sole reason for building the
        site with next.js was to get more experience with the technology.
      </p>
    </>
  );
}
