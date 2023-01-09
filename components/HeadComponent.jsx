import React from "react";
import Head from "next/head";

const HeadComponent = ({ page }) => {
  return (
    <Head>
      <title>Loopstudios || {page}</title>
      <meta name="description" content="Loopstudios landing page" />
      <link rel="icon" href="./logo.svg" />
    </Head>
  );
};

export default HeadComponent;
