import "@fontsource/josefin-sans";
import { useEffect, useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

import authService from "../../../services/auth.service";
import './Banner.css';



const Banner = () => {

    const [isUser, setIsUser] = useState(false);
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const user = authService.getCurrentUser();
        if (user) {
            setIsUser(user.roles.includes("ROLE_USER"));
            setCurrentUser(user)
        }
    }, []);

    return (
        <section className="single-hero-slide text-white d-flex justify-content-center align-items-center">
            <Container>
                <Row className="align-items-center">
                    <Col md={12} sm={12} lg={6}>
                        <div className="hero-slide-left justify-content-end align-items-center text-center text-lg-start">
                            <h2>This is our Northern Vietnam Lottery Statistics And Analysis Website</h2>
                            <h1>Join with us!</h1>
                            <p className="mb-xs-5"></p>
                            <div className="banner-btn m-sm-auto">
                                {!isUser && (
                                    <Link to="/login"><button className="theme-btn btn-fill">Join Now</button></Link>
                                )}
                                <button className='theme-btn bth-blank'>Learn More</button>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} sm={12} lg={6} className="mt-sm-5">
                        <div className="hero-slide-right text-center text-lg-start mt-sm-5">
                            <div className="animate-img">
                            </div>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;

// import React, { useEffect, useState } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import authService from '../../../services/auth.service';
// import './Banner.css';

// const XoSoMienBac = () => {
//   return (
//     <>
//       <link
//         rel="stylesheet"
//         href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
//         integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
//         crossOrigin="anonymous"
//       />

//       <div className="col-xs-12">
//         <div className="block" id="kqngay_05102023" style={{ display: 'none' }}></div>
//         <div className="block" id="kqngay_04102023">
//           <div className="block-main-heading">
//             <h1>XSMB - Kết quả xổ số miền Bắc - SXMB</h1>
//           </div>
//           <div className="list-link">
//             <h2 className="class-title-list-link">
//               <a href="/xsmb-xo-so-mien-bac.html" title="XSMB" className="u-line">
//                 XSMB
//               </a>
//               <span>»</span>
//               <a href="/xsmb-thu-4.html" title="XSMB Thứ 4" className="u-line">
//                 XSMB Thứ 4
//               </a>
//               <span>»</span>
//               <a href="/xsmb-04-10-2023.html" title="XSMB  04/10/2023" className="u-line">
//                 XSMB 04/10/2023
//               </a>
//             </h2>
//           </div>
//           <div className="block-main-content">
//             <table className="table table-bordered table-striped table-xsmb">
//               <tbody>
//                 <tr>
//                   <td style={{ width: '15%' }}>Mã ĐB</td>
//                   <td className="text-center">
//                     <div className="madb">
//                       <span className="madb8 special-code div-horizontal">10ZH </span>
//                       <span className="madb8 special-code div-horizontal"> 11ZH </span>
//                       <span className="madb8 special-code div-horizontal"> 16ZH </span>
//                       <span className="madb8 special-code div-horizontal"> 17ZH </span>
//                       <span className="madb8 special-code div-horizontal"> 2ZH </span>
//                       <span className="madb8 special-code div-horizontal"> 3ZH </span>
//                       <span className="madb8 special-code div-horizontal"> 4ZH </span>
//                       <span className="madb8 special-code div-horizontal"> 8ZH</span>
//                     </div>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>G.ĐB</td>
//                   <td className="text-center">
//                     <span className="special-prize-lg div-horizontal">53139</span>
//                   </td>
//                 </tr>
//                 {/* Các dòng tiếp theo */}
//               </tbody>
//             </table>
//           </div>
//           <hr className="line-adv" />
//           <div className="adv-side-bar">
//             <div className="adv-main-title">
//               <span className="link-pad-left textadv">Advertisements</span>
//             </div>
//             <div className="adv-main-content">
//               <div style={{ height: '10px' }}></div>
//               <script async="" src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
//               <div id="gpt-passback">
//                 <script>
//                   {`
//                   window.googletag = window.googletag || { cmd: [] };
//                   googletag.cmd.push(function () {
//                     googletag
//                       .defineSlot('/154031234/Direct_Deal_336x280', [336, 280], 'gpt-passback')
//                       .addService(googletag.pubads());
//                     googletag.enableServices();
//                     googletag.display('gpt-passback');
//                   });
//                   `}
//                 </script>
//               </div>
//               <script src="https://api-sg.flygame.io/sdk/widget/xosodaiphat.com.3609.js" async=""></script>
//             </div>
//           </div>
//           <hr className="line-header" />
//           <div className="block-main-content">
//             <span className="link-pad-left padding10">Loto miền Bắc</span>
//             <table className="table table-bordered table-loto" style={{ marginBottom: '0' }}>
//               <tbody>
//                 <tr>
//                   <th className="col-md-2" style={{ width: '10%' }}>
//                     Đầu
//                   </th>
//                   <th className="col-md-4">Loto</th>
//                 </tr>
//                 <tr>
//                   <td className="text-center">0</td>
//                   <td>07, 00</td>
//                 </tr>
//                 {/* Các dòng tiếp theo */}
//               </tbody>
//             </table>
//           </div>
//           <div className="link-statistic">
//             <ul>
//               <li>
//                 Xem thống kê{' '}
//                 <a href="/cau-mien-bac/cau-bach-thu.html" title="Thống kê 2 điểm duy nhất">
//                   2 điểm duy nhất miền Bắc
//                 </a>
//               </li>
//               <li>
//                 Xem thống kê{' '}
//                 <a href="/thong-ke-lo-xien.html" title="Cặp loto cùng về miền Bắc">
//                   Cặp loto cùng về miền Bắc
//                 </a>
//               </li>
//               <li>
//                 Tham khảo{' '}
//                 <a href="/thong-ke-xsmb-c2579-article.html" title="Thống kê XSMB">
//                   Thống kê XSMB
//                 </a>
//               </li>
//               <li>
//                 <a href="/">KQXS</a> miền Bắc hôm nay siêu tốc - chính xác, trực tiếp{' '}
//                 <a href="/xsmb-xo-so-mien-bac.html">XSMB</a> lúc 18h15 mỗi ngày
//               </li>
//             </ul>
//           </div>
//         </div>
//         <hr className="line-adv" />
//         <div className="adv-side-bar">
//           <div className="adv-main-title">
//             <span className="link-pad-left textadv">Advertisements</span>
//           </div>
//           <div className="adv-main-content">
//             <div id="M802834ScriptRootC1423705"></div>
//             <script src="https://jsc.adskeeper.com/x/o/xosothienphu.com.1423705.js" async=""></script>
//             <div id="M662053ScriptRootC1425077"></div>
//             <script src="https://jsc.adskeeper.co.uk/x/o/xosodaiphat.com.1425077.js" async=""></script>
//             <script src="https://api.flygame.io/sdk/widget/xosodaiphat.com.3418.js" async=""></script>
//           </div>
//         </div>
//         <hr className="line-header" />
//         <style>
//           {`
//           @media(min-width:270px) and (max-width:640px) {
//             .hidenmobile {
//               display: none;
//             }
//             .post .post-container .post-content .post-title a {
//               font-size: 15px !important;
//             }
//           }
//           `}
//         </style>
//         <div className="bg-viewmore">
//           <img
//             className="loadmoreimg"
//             src="https://cdn.xosodaiphat.com/assets/images/Loading_icon.gif"
//             alt="xem thêm kết quả xổ số miền bắc"
//           />
//           <p className="btn-viewmore">
//             <span>
//               <a rel="nofollow" style={{ color: '#000', textDecoration: 'none' }} href="javascript:xsdp.Xsmb.loteryloadmore()" title="Xem thêm 7 kết quả XSMB">
//                 Xem Thêm
//               </a>
//             </span>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// const Banner = () => {
//   const [isUser, setIsUser] = useState(false);
//   const [currentUser, setCurrentUser] = useState();

//   useEffect(() => {
//     const user = authService.getCurrentUser();
//     if (user) {
//       setIsUser(user.roles.includes('ROLE_USER'));
//       setCurrentUser(user);
//     }
//   }, []);

//   return (
//     <section className="single-hero-slide text-white d-flex justify-content-center align-items-center">
//       <Container>
//         <Row className="align-items-center">
//           <Col md={12} sm={12} lg={6}>
//             <div className="hero-slide-left justify-content-end align-items-center text-center text-lg-start">
//               <h2>This is our Northern Vietnam Lottery Statistics And Analysis Website</h2>
//               <h1>Join with us!</h1>
//               <p className="mb-xs-5"></p>
//               <div className="banner-btn m-sm-auto">
//                 {!isUser && (
//                   <Link to="/login">
//                     <button className="theme-btn btn-fill">Join Now</button>
//                   </Link>
//                 )}
//                 <button className="theme-btn bth-blank">Learn More</button>
//               </div>
//             </div>
//           </Col>
//           <Col md={12} sm={12} lg={6} className="mt-sm-5">
//             <div className="hero-slide-right text-center text-lg-start mt-sm-5">
//               <div className="animate-img"></div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export { XoSoMienBac, Banner };
