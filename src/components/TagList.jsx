import React from 'react';

import './TagList.less';
import axios from 'axios';
import { preURL, publicURL } from '../config';

export default class TagList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    const { list } = this.props;
    if (!list || (list && list.length === 0)) {
      axios.get(`${preURL}/list`).then((response) => {
        // console.log('list:', response.data);
        this.setState({
          list: response.data,
        });
      }, (error) => {
        console.log('TagList axios error: ', error);
        alert('拉取数据失败，请配置后端博客服务！');
      });
      return;
    }
    this.setState({
      list,
    });
  }

  render() {
    const tags = new Map();

    const { list = [] } = this.state;

    list.forEach((item) => {
      if (Array.isArray(item.tags)) {
        item.tags.forEach((tag) => {
          if (tags.has(tag)) {
            tags.set(tag, tags.get(tag).concat(item));
          } else {
            tags.set(tag, [item]);
          }
        });
      }
    });
    const tagArr = [...tags];
    return (
      <div>
        <div id="tag_cloud" className="tags">
          {tagArr.map((t) => <button type="button" key={t[0]}>{t[0]}</button>)}
        </div>

        {tagArr.map((tag, keyIndex) => (
          <div className="one-tag-list" key={tag[0]}>
            <span className="fa fa-tag listing-seperator" id={keyIndex}>
              <span className="tag-text">{tag[0]}</span>
            </span>
            {tag[1].map((item) => (
              <div className="post-preview" key={item.pathName}>
                <a href={`${publicURL}/article?pathName=${item.pathName}`}>
                  <h2 className="post-title">
                    {item.title}
                  </h2>
                </a>
              </div>
            ))}
          </div>
        ))}

      </div>
    );
  }
}
