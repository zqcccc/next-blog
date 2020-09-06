import React from 'react';
import axios from 'axios';
import moment from 'moment';
import Link from 'next/link';
import ClassNames from 'classnames';
import { preURL } from '../config';
import './ArticleList.less';

export default class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      begin: 0,
      list: props.list || [],
      pageSize: 8,
    };
  }

  componentDidMount() {
    const { list } = this.props;
    if (list === undefined || list.length === 0) {
      console.log('frontend request!!!!');
      axios.get(`${preURL}/list`).then(
        (response) => {
          console.log('list:', response.data);
          this.setState({
            list: response.data,
          });
        },
        (error) => {
          console.log('ArticleList axios error: ', error);
          alert('拉取数据失败，请配置后端博客服务！');
        },
      );
    }
  }

  nextPage() {
    this.setState((state) => ({
      begin: state.begin + state.pageSize,
    }));
  }

  lastPage() {
    this.setState((state) => ({
      begin: state.begin - state.pageSize,
    }));
  }

  render() {
    const { list, begin, pageSize } = this.state;
    return (
      <div>
        <div className="post-preview-container">
          {list.slice(begin, begin + pageSize).map((item) => (
            <div className="post-preview" key={item.pathName}>
              <div className="post-time">
                {moment(item.date).format('YYYY-MM-DD')}
              </div>
              <div className="post-info">
                <Link
                  href={{
                    pathname: '/article',
                    query: { pathName: item.pathName },
                  }}
                >
                  <h3>{item.title}</h3>
                </Link>
                <p>
                  <span>/</span>
                  {item.tags.map((tag) => (
                    <span key={tag}>
                      {' '}
                      {tag}
                      {' '}
                      /
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>

        <ul className="pager">
          <li
            role="menuitem"
            className={ClassNames('previous', { hidden: begin === 0 })}
            onClick={() => {
              this.lastPage();
            }}
            onKeyPress={() => {
              this.lastPage();
            }}
          >
            <button type="button">&larr; Newer Posts</button>
          </li>

          <li
            role="menuitem"
            className={ClassNames('next', {
              hidden: begin + pageSize >= list.length,
            })}
            onClick={() => {
              this.nextPage();
            }}
            onKeyPress={() => {
              this.nextPage();
            }}
          >
            <button type="button">Older Posts &rarr;</button>
          </li>
        </ul>
      </div>
    );
  }
}
