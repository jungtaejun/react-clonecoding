import React, { Fragment } from "react"
import { 
  Copyright, 
  Footercontent, 
  Footerli, 
  Footerlogo, 
  FooterMain, 
  FooterSnsImg, 
  Footerul, 
  Sns 
} from "./index.style"
import MainLogo from '../img/mainlogo.png'
import Naver from '../img/join_naver.png'
import Facebook from '../img/join_facebook.png'
import Insta from '../img/join_instagram.png'
import Youtube from '../img/join_youtube.png'
const Footer = () => {
  return (
    <Fragment>
      <FooterMain>
        <Footercontent>
          <footer>
            <Footerlogo src={MainLogo} alt="로고" />
            <Footerul>
              <Footerli>회사명 | (주)뉴플러스기획</Footerli>
              <Footerli>대표자명 | 임세란</Footerli>
              <Footerli>Tel | 02.6080.0920</Footerli>
              <Footerli>E-mail | purpleseed@purpleseed.co.kr</Footerli>
              <Footerli>사업자등록번호 | 864-81-01703</Footerli>
              <Footerli>주소 | 서울특별시 강남구 논현동 50, 삼익전자빌딩 7F</Footerli>
            </Footerul>
            <Copyright>Copyright © 2021 NEWPLUS. All Rights Reserved.</Copyright>
          </footer>
          <Sns>
            <FooterSnsImg to="https://www.facebook.com/purpleseed1/"><img src={Facebook} alt="페이스북" /></FooterSnsImg>
            <FooterSnsImg to="https://www.instagram.com/purpleseed1/"><img src={Insta} alt="인스타그램" /></FooterSnsImg>
            <FooterSnsImg to="https://blog.naver.com/purpleseed1"><img src={Naver} alt="네이버블로그" /></FooterSnsImg>
            <FooterSnsImg to="https://www.youtube.com/channel/UCXgt0Tn6zS0yT8EtixJl4ww"><img src={Youtube} alt="유튜브" /></FooterSnsImg>
          </Sns>
        </Footercontent>
      </FooterMain>
    </Fragment>
  );
}
export default Footer 