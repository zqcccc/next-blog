import React from 'react';
import ClassNames from 'classnames';
import './Nav.less';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ActiveLink = ({ children, href }) => {
  const router = useRouter();
  // console.log(router.pathname)
  return (
    <Link href={href} scroll={false}>
      <li className={ClassNames({ active: router.pathname === href })}>
        <button type="button">
          <i className="iconfont icon-shouye1" />
          <span>{children}</span>
        </button>
      </li>
    </Link>
  );
};

const Nav = () => (
  <div className="nav" id="nav">
    <div className="avatar-name">
      <div className="avatar">
        <img src="/avatar.jpg" alt="react blog" />
      </div>
      <div className="name">
        <i>
          iconie
        </i>
      </div>
    </div>
    <div className="contents" id="nav-content">
      <ul>
        <ActiveLink href="/Main">
          首页
        </ActiveLink>
        <ActiveLink href="/TagList">
          标签
        </ActiveLink>
        <ActiveLink href="/ArchiveList">
          归档
        </ActiveLink>
        <ActiveLink href="/">
          关于
        </ActiveLink>
        <ActiveLink href="/Feedback">
          反馈
        </ActiveLink>
      </ul>
    </div>
  </div>
);

export default Nav;
