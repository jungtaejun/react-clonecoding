import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare, faN, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { faSquare } from "@fortawesome/free-regular-svg-icons"
import React, { Fragment } from "react"
import { Copyright, Footercontent, Footerli, Footerlogo, FooterMain, FooterSnsImg, Footerul, Sns } from "./index.style"
import { faFacebookF, faInstagram, faInstagramSquare, faYoutube } from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
  return (
    <Fragment>
      <FooterMain>
        <Footercontent>
          <footer>
            <Footerlogo src="images/logo.png" alt="로고" />
            <Footerul>
              <Footerli>회사명 | (주)뉴플러스기획</Footerli>
              <Footerli>대표자명 | 임세란</Footerli>
              <Footerli>Tel | 02.6080.0920</Footerli>
              <Footerli>E-mail | purpleseed@purpleseed.co.kr</Footerli>
              <Footerli>사업자등록번호 | 864-81-01703</Footerli>
              <Footerli>주소 | 서울특별시 강남구 강남대로 156길 18, 3F</Footerli>
            </Footerul>
            <Copyright>Copyright © 2021 NEWPLUS. All Rights Reserved.</Copyright>
          </footer>
          <Sns>
            <FooterSnsImg href=""><FontAwesomeIcon icon={faFacebookF} /></FooterSnsImg>
            <FooterSnsImg href=""><FontAwesomeIcon icon={faInstagram} /></FooterSnsImg>
            <FooterSnsImg href=""><img src="images/join_naver.png" alt="네이버블로그" /></FooterSnsImg>
            <FooterSnsImg href=""><FontAwesomeIcon icon={faYoutube}/></FooterSnsImg>
          </Sns>
        </Footercontent>
      </FooterMain>
    </Fragment>
  );
}
export default Footer;