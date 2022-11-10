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
import DigitalImg01 from '../img/digital01.png'
import DigitalImg02 from '../img/digital02.png'
import DigitalImg03 from '../img/digital03.png'
import DigitalImg04 from '../img/digital04.png'
import ServiceBannerImg from '../img/service_banner.a622dfa6.png'

const Digital_Platform = () => {
  return(
    <Fragment>
      <Width100>
        <BannerImg  style={{backgroundImage: `url(${ServiceBannerImg})`}}>
          <Maintext>Service</Maintext>
        </BannerImg>
      </Width100>
      <Tapmain>
        <Tapmenu>
          <Tapbutton2 to='/marketing'>Marketing</Tapbutton2>
          <Tapbutton2 to='/contents'>Contents</Tapbutton2>
          <Tapbutton1 to='/digital_platform'>Digital Platform</Tapbutton1>
          <Tapbutton2 to='/consulting'>Consulting</Tapbutton2>
        </Tapmenu>
      </Tapmain>
      <Topmaintext
      style={{padding: '0px 0 100px 0'}}
      >Digital Platform</Topmaintext>
      <ServiceWrap>
        <ServiceImg style={{backgroundImage: `url(${DigitalImg01})`}}>
          <Servicetext>서비스 UX/컨설팅</Servicetext>
        </ServiceImg>
        <ServiceImg style={{backgroundImage: `url(${DigitalImg02})`}}>
          <Servicetext>UI / GUI 디자인</Servicetext>
        </ServiceImg >
        <ServiceImg style={{backgroundImage: `url(${DigitalImg03})`}}>
          <Servicetext>웹 & 앱 구축</Servicetext>
        </ServiceImg>
        <ServiceImg style={{backgroundImage: `url(${DigitalImg04})`}}>
          <Servicetext>서비스 운영</Servicetext>
        </ServiceImg>
      </ServiceWrap>
    </Fragment>
  )
}
export default Digital_Platform