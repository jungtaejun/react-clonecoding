import React, { Fragment } from "react" 
import { 
  BannerImg,
  Maintext, 
  ServiceImg, 
  Servicetext, 
  ServiceWrap, 
  Tapbutton1, 
  Tapbutton2, 
  Tapmain, 
  Tapmenu, 
  Topmaintext, 
  Width100 } from "../layout/index.style"
import ConsultingImg01 from '../img/consulting01.png'
import ConsultingImg02 from '../img/consulting02.png'
import ConsultingImg03 from '../img/consulting03.png'
import ConsultingImg04 from '../img/consulting04.png'
import ServiceBannerImg from '../img/service_banner.a622dfa6.png'

const Consulting = () => {
  return(
    <Fragment>
      <Width100>
        <BannerImg style={{backgroundImage: `url(${ServiceBannerImg})`}}>
          <Maintext>Service</Maintext>
        </BannerImg>
      </Width100>
      <Tapmain>
        <Tapmenu>
          <Tapbutton2 to='/marketing'>Marketing</Tapbutton2>
          <Tapbutton2 to='/contents'>Contents</Tapbutton2>
          <Tapbutton2 to='/digital_platform'>Digital Platform</Tapbutton2>
          <Tapbutton1 to='/consulting'>Consulting</Tapbutton1>
        </Tapmenu>
      </Tapmain>
      <Topmaintext
      style={{padding: '0px 0 100px 0'}}
      >Consulting</Topmaintext>
      <ServiceWrap>
        <ServiceImg style={{backgroundImage: `url(${ConsultingImg01})`}}>
          <Servicetext>비지니스 전략 사업기획</Servicetext>
        </ServiceImg>
        <ServiceImg style={{backgroundImage: `url(${ConsultingImg02})`}}>
          <Servicetext>마케팅</Servicetext>
        </ServiceImg >
        <ServiceImg style={{backgroundImage: `url(${ConsultingImg03})`}}>
          <Servicetext>서비스 UX/UI</Servicetext>
        </ServiceImg>
        <ServiceImg style={{backgroundImage: `url(${ConsultingImg04})`}}>
          <Servicetext>기타 각종 문서 작업</Servicetext>
        </ServiceImg>
      </ServiceWrap>
    </Fragment>
  )
}
export default Consulting