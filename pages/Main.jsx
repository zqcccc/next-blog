import React from 'react';
import Head from 'next/head';
// import styles from '../styles/Home.module.css'
import { preURL } from '../src/config';

import { getLayout } from '../src/container/layout/Layout';
import ArticleList from '../src/components/ArticleList';

function Home(props) {
  return (
    // <div className={styles.container}>
    <>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ArticleList {...props} />
    </>
    // </div>
  );
}
Home.getLayout = getLayout;

export async function getStaticProps() {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`${preURL}/list`);
  const list = await res.json();

  // Pass post data to the page via props
  return { props: { list } };
}
export default Home;
