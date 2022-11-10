import React, { Fragment } from "react"
import { 
  Topmaintext, 
  Maintext, 
  Tapbutton1, 
  Tapbutton2, 
  Tapmain, 
  Tapmenu, 
  Width100, 
  ServiceWrap,
  ServiceImg,
  Servicetext,
  BannerImg} from "../layout/index.style"
import MarketingImg01 from '../img/marketing01.png'
import MarketingImg02 from '../img/marketing02.png'
import MarketingImg03 from '../img/marketing03.png'
import MarketingImg04 from '../img/marketing04.png'
import MarketingImg05 from '../img/marketing05.png'
import MarketingImg06 from '../img/marketing06.png'
import MarketingImg07 from '../img/marketing07.png'
import MarketingImg08 from '../img/marketing08.png'
import ServiceBannerImg from '../img/service_banner.a622dfa6.png'
const Maketing = () => {
  return (
    <Fragment>
      <Width100>
        <BannerImg  style={{backgroundImage: `url(${ServiceBannerImg})`}}>
          <Maintext>Service</Maintext>
        </BannerImg>
      </Width100>
      <Tapmain>
        <Tapmenu>
          <Tapbutton1 to='/marketing'>Marketing</Tapbutton1>
          <Tapbutton2 to='/contents'>Contents</Tapbutton2>
          <Tapbutton2 to='/digital_platform'>Digital Platform</Tapbutton2>
          <Tapbutton2 to='/consulting'>Consulting</Tapbutton2>
        </Tapmenu>
      </Tapmain>
      <Topmaintext
      style={{padding: '0px 0 100px 0'}}
      >Marketing</Topmaintext>
      <ServiceWrap>
        <ServiceImg style={{backgroundImage: `url(${MarketingImg01})`}}>
          <Servicetext>온/오프라인 캠페인 기획 및 진행</Servicetext>
        </ServiceImg>
        <ServiceImg style={{backgroundImage: `url(${MarketingImg02})`}}>
          <Servicetext>소셜 채널 관리 및 운영</Servicetext>
        </ServiceImg >
        <ServiceImg style={{backgroundImage: `url(${MarketingImg03})`}}>
          <Servicetext>디지털 광고 데이터 퍼포먼스</Servicetext>
        </ServiceImg>
        <ServiceImg style={{backgroundImage: `url(${MarketingImg04})`}}>
          <Servicetext>인플루언서 마케팅</Servicetext>
        </ServiceImg>
        <ServiceImg style={{backgroundImage: `url(${MarketingImg05})`}}>
          <Servicetext>바이럴 마케팅</Servicetext>
        </ServiceImg>
        <ServiceImg style={{backgroundImage: `url(${MarketingImg06})`}}>
          <Servicetext>공간 마케팅</Servicetext>
        </ServiceImg>
        <ServiceImg style={{backgroundImage: `url(${MarketingImg07})`}}>
          <Servicetext>오프라인 광고</Servicetext>
        </ServiceImg>
        <ServiceImg style={{backgroundImage: `url(${MarketingImg08})`}}>
          <Servicetext>온라인 언론 관리</Servicetext>
        </ServiceImg>
      </ServiceWrap>
    </Fragment>
  )
}
export default Maketing