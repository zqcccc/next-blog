import React from 'react';
import { getLayout } from '../src/container/layout/Layout';
import ArchiveList from '../src/components/ArchiveList';
import { preURL } from '../src/config';

function Archive(props) {
  return (
    <ArchiveList {...props} />
  );
}
// Archive.getLayout = getLayout({
//   activeTag: '归档'
// })
Archive.getLayout = getLayout;

export async function getStaticProps() {
  const res = await fetch(`${preURL}/list`);
  const list = await res.json();
  return { props: { list } };
}
export default Archive;
