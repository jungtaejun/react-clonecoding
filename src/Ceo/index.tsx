import React, { Fragment } from "react"
import '../App.css'
import { 
  CeoSign, 
  Ceotext1, 
  Ceotext2, 
  Ceowrap, 
  Topmaintext, 
  Maintext, 
  Tapbutton1, 
  Tapbutton2, 
  Tapmain, 
  Tapmenu, 
  Width100, 
  BannerImg } from "../layout/index.style"
import CeosignImg from "../img/sign.png"
import CeoImg from "../img/ceo_img.cb434280.png"
import CeoBannerImg from '../img/ceotab_banner.f6fb93f5.png'

const Ceo = () => {
  return(
    <Fragment>
      <Width100>
        <BannerImg style={{backgroundImage: `url(${CeoBannerImg})`}}>
          <Maintext>CEO MESSAGE</Maintext>
        </BannerImg>
      </Width100>
      <Tapmain>
        <Tapmenu>
          <Tapbutton2 to='/company'>회사 소개</Tapbutton2>
          <Tapbutton2 to='/brand'>브랜드 소개</Tapbutton2>
          <Tapbutton1 to='/ceo'>CEO 인사말</Tapbutton1>
        </Tapmenu>
      </Tapmain>
      <Topmaintext>CEO 인사말</Topmaintext>
      <Ceowrap>
        <div>
          <Ceotext1>
            퍼플시드는 정직한 영혼이 있는 기업으로서
            <br/>
            언제나 고객과 든든한 파트너로 상생하기 위하여
            <br/>
            노력하겠습니다.
          </Ceotext1>
          <CeoSign>
            <img src={CeosignImg} alt="임세란 대표님 서명" />
          </CeoSign>
          <Ceotext2>
            고객에게 최적화된 솔루션을 제공해 드리기 위하여 밤낮을 고민하고,
            <br/>
            직접 발로 뛰며 실용적이고 합리적인 노하우를 쌓았습니다.
            <br/>
            퍼플시드의 역량은 그만큼 향상 되었으면,
            <br/>
            다양한 파트너들과 너트워크 인프라가 구축되어
            <br/>
            차별화된 마케팅 솔루션을 제공해 드리기에 자신이 있습니다.
            <br/>
            이러한 역량을 기반으로 고객과의 적극적이고 진심 어린 소통을 통하여
            <br/>
            새로운 경험을 선사해 드리는 것이 퍼플시드의 목표입니다.
          </Ceotext2>
        </div>
        <img src={CeoImg} alt="임세란 대표님 사진" />
      </Ceowrap>
    </Fragment>
  )
}
export default Ceo