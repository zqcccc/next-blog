import React from 'react';
import moment from 'moment';

import './ArchiveList.less';
import axios from 'axios';
import { preURL, publicURL } from '../config';

class ArchiveList extends React.Component {
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
        console.log('ArchiveList axios error: ', error);
        alert('拉取数据失败，请配置后端博客服务！');
      });
      return;
    }
    this.setState({
      list,
    });
  }

  render() {
    const years = new Set();
    const yearsMap = new Map();

    const { list } = this.state;

    list.forEach((value) => {
      const momentDate = moment(value.date);
      const year = momentDate.format('YYYY');
      years.add(year);
      if (yearsMap.has(year)) {
        // console.log("yearsMap.get(year):",yearsMap.get(year),yearsMap.has(year),year,yearsMap)
        yearsMap.set(year, yearsMap.get(year).concat([value]));
      } else {
        yearsMap.set(year, [value]);
        // console.log('set:', yearsMap)
      }
    });

    return (
      <div className="archives-container">
        {Array.from(years).sort().map((year) => (
          <div className="one-tag-list" key={year}>

            <span className="fa fa-calendar-times-o listing-seperator">
              <span className="tag-text">{year}</span>
            </span>

            <ul>
              {yearsMap.get(year).map((item) => (
                <li key={item.pathName}>
                  <span>{moment(item.date).format('MM-DD')}</span>
                  <i className="fa fa-angle-double-right" aria-hidden="true" />
                  <a href={`${publicURL}/article?pathName=${item.pathName}`}>
                    <span>
                      {item.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default ArchiveList;
