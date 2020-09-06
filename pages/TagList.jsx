import React from 'react';
import { getLayout } from '../src/container/layout/Layout';
import TagList from '../src/components/TagList';
import { preURL } from '../src/config';

function Tag(props) {
  return (
    <TagList {...props} />
  );
}
Tag.getLayout = getLayout;
Tag.layoutProps = 'tag layout 123';

export async function getStaticProps() {
  const res = await fetch(`${preURL}/list`);
  const list = await res.json();
  return { props: { list } };
}
export default Tag;
