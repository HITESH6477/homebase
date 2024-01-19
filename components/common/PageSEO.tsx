import Head from "next/head";
import React from "react";
interface Props {
  title: string;
}
const PageSEO: React.FC<Props> = ({ title }) => {
  const maintitle = ` HomeBase - Discover The Perfect Charge Card For You — ${title}`;
  return (
    <>
      {title && (
        <Head>
          <title>{maintitle}</title>
          <meta
            name="title"
            content={`Discover The Perfect Charge Card For You — ${title}`}
          />
          <meta
            name="description"
            content={`Discover The Perfect Charge Card For You ${title}`}
          />
          <meta name="keywords" content="" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="" />
          <meta
            property="og:title"
            content={` Discover The Perfect Charge Card For You — ${title}`}
          />
          <meta property="og:description" content={`${title}`} />
        </Head>
      )}
    </>
  );
};

export default PageSEO;
