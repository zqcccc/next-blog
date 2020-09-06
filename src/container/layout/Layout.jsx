import React from 'react';

import Nav from '../../components/Nav';

import './Layout.less';

export const getLayout = (Component, pageProps) => (
  <Layout layoutProps={Component.layoutProps}>
    <Component {...pageProps} />
  </Layout>
);

export default function Layout({ children, activeTag, layoutProps }) {
  console.log('Layout render');
  console.log('layoutProps: ', layoutProps);
  return (
    <div>
      <input />
      <div className="site-nav-toggle" id="site-nav-toggle">
        <button type="button">
          <span className="btn-bar" />
          <span className="btn-bar" />
          <span className="btn-bar" />
        </button>
      </div>

      <div className="index-about">
        <i>The blog for react-course</i>
      </div>

      <div className="index-container">
        <div className="index-left">
          <Nav activeTag={activeTag} />
          <div className="index-about-mobile">
            <i>The blog for react-course</i>
          </div>
        </div>
        <div className="index-middle">
          {children}
        </div>
      </div>

      <footer className="footer">
        <p>Created By react@2018</p>
      </footer>

    </div>
  );
}
// export default function Layout(props){
//     console.log('nav render')
//     return(
//         <div>
//             <div className="site-nav-toggle" id="site-nav-toggle">
//                 <button>
//                     <span className="btn-bar"></span>
//                     <span className="btn-bar"></span>
//                     <span className="btn-bar"></span>
//                 </button>
//             </div>

//             <div className="index-about">
//                 <i>The blog for react-course</i>
//             </div>

//             <div className="index-container">
//                 <div className="index-left">
//                     <Nav activeTag={props.activeTag}/>
//                     <div className="index-about-mobile">
//                         <i>The blog for react-course</i>
//                     </div>
//                 </div>
//                 <div className="index-middle">
//                     {props.children}
//                 </div>
//             </div>

//             <footer className="footer">
//                 <p>Created By react@2018</p>
//             </footer>

//         </div>
//     )
// }
