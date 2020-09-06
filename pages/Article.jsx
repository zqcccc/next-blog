import React from 'react';
import ArticleContent from '../src/components/ArticleContent';
import { preURL } from '../src/config';

import './Article/Article.less';

export async function getServerSideProps({ query }) {
  // console.log('query: ', query);
  // 如果出现 500 Internal Privoxy Error 那应该是代理的问题
  // const { data } = await axios(`${preURL}/post?pathName=${encodeURI(query.pathname)}`)
  const res = await fetch(`${preURL}/post?pathName=${encodeURI(query.pathName)}`);
  const data = await res.json();
  return { props: data };
}
export default class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <ArticleContent {...this.props} />
    );
  }
}
