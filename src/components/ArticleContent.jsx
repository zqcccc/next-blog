import React from 'react';
import './ArticleContent.less';
import moment from 'moment/moment';

import ReactMarkdown from 'react-markdown';

export default class ArticleContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // static async getInitialProps({ query: queryStr }) {
  //     const data = await axios.get(`${preURL}/post?pathName=${query.pathName}`)
  //     return { props: data }
  // }
  componentDidMount() {
    // const query = queryString.parse(location.search);
    // console.log('pathName:', query);

    // axios.get(`${preURL}/post?pathName=${query.pathName}`).then((response) => {
    //     console.log(response.data)

    // },(error) => {
    //     alert('拉取数据失败，请配置后端博客服务！')
    // })
    this.setState({
      ...this.props,
    });
  }

  render() {
    const {
      title, date, tags, _content,
    } = this.state;
    return (
      <div className="post-container">

        <div className="post-title">
          {title}
        </div>

        <div className="post-meta">

          <span className="attr">
            发布于：
            {date && moment(date).format('YYYY-MM-DD hh:mm:ss')}
          </span>

          <span className="attr">
            标签：/
            {(tags || []).map((item) => ` ${item} /`)}
          </span>

          <span className="attr">
            访问：

          </span>

        </div>

        <div className="post-content">
          <ReactMarkdown source={_content} />
        </div>

      </div>
    );
  }
}
