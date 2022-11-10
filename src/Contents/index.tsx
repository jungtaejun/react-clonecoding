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
import ContentsImg01 from '../img/contents01.png'
import ContentsImg02 from '../img/contents02.png'
import ContentsImg03 from '../img/contents03.png'
import ContentsImg04 from '../img/contents04.png'
import ContentsImg05 from '../img/contents05.png'
import ContentsImg06 from '../img/contents06.png'
import ContentsImg07 from '../img/contents07.png'
import ContentsImg08 from '../img/contents08.png'
import ServiceBannerImg from '../img/service_banner.a622dfa6.png'

const Contents = () => {
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
          <Tapbutton1 to='/contents'>Contents</Tapbutton1>
          <Tapbutton2 to='/digital_platform'>Digital Platform</Tapbutton2>
          <Tapbutton2 to='/consulting'>Consulting</Tapbutton2>
        </Tapmenu>
      </Tapmain>
      <Topmaintext
      style={{padding: '0px 0 100px 0'}}
      >Contents</Topmaintext>
      <ServiceWrap>
        <ServiceImg style={{backgroundImage: `url(${ContentsImg01})`}}>
          <Servicetext>광고 디자인</Servicetext>
        </ServiceImg>
        <ServiceImg style={{backgroundImage: `url(${ContentsImg02})`}}>
          <Servicetext>TV/CF촬영</Servicetext>
        </ServiceImg >
        <ServiceImg style={{backgroundImage: `url(${ContentsImg03})`}}>
          <Servicetext>바이럴 영상</Servicetext>
        </ServiceImg>
        <ServiceImg style={{backgroundImage: `url(${ContentsImg04})`}}>
          <Servicetext>모션 그래픽</Servicetext>
        </ServiceImg>
        <ServiceImg style={{backgroundImage: `url(${ContentsImg05})`}}>
          <Servicetext>편집 디자인</Servicetext>
        </ServiceImg>
        <ServiceImg style={{backgroundImage: `url(${ContentsImg06})`}}>
          <Servicetext>웹 디자인</Servicetext>
        </ServiceImg>
        <ServiceImg style={{backgroundImage: `url(${ContentsImg07})`}}>
          <Servicetext>앱 디자인</Servicetext>
        </ServiceImg>
        <ServiceImg style={{backgroundImage: `url(${ContentsImg08})`}}>
          <Servicetext>사진촬영</Servicetext>
        </ServiceImg>
      </ServiceWrap>
    </Fragment>
  )
}
export default Contents