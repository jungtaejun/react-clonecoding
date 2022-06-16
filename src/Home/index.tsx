import React, { Fragment } from 'react'
import Mainimage from '../img/main_slider.99a75528.png'
import MainMarketingImg from '../img/marketing_main.png'
import MainContentsImg from '../img/contents_main.png'
import MainConsultingImg from '../img/consulting_main.png'
import MainNewsImg from '../img/news_main.png'
import Partner01 from '../img/partner01.jpg'
import Partner02 from '../img/partner02.jpg'
import Partner03 from '../img/partner03.jpg'
import Partner04 from '../img/partner04.jpg'
import Partner05 from '../img/partner05.jpg'
import Partner06 from '../img/partner06.jpg'
import Partner07 from '../img/partner07.jpg'
import Partner08 from '../img/partner08.jpg'
import Partner09 from '../img/partner09.jpg'
import Partner10 from '../img/partner10.jpg'
import Partner11 from '../img/partner11.jpg'
import Partner12 from '../img/partner12.jpg'
import Partner13 from '../img/partner13.jpg'
import Partner14 from '../img/partner14.jpg'
import Partner15 from '../img/partner15.jpg'
import Partner16 from '../img/partner16.jpg'
import Partner17 from '../img/partner17.jpg'
import Partner18 from '../img/partner18.jpg'
import Partner19 from '../img/partner19.jpg'
import Partner20 from '../img/partner20.jpg'
import Partner21 from '../img/partner21.jpg'
import Partner22 from '../img/partner22.jpg'
import Partner23 from '../img/partner23.jpg'
import Partner24 from '../img/partner24.jpg'
import Partner25 from '../img/partner25.jpg'
import Partner26 from '../img/partner26.jpg'
import Partner27 from '../img/partner27.jpg'
import Partner28 from '../img/partner28.jpg'
import Partner29 from '../img/partner29.jpg'
import Partner30 from '../img/partner30.jpg'
import Partner31 from '../img/partner31.jpg'
import Partner32 from '../img/partner32.jpg'
import Partner33 from '../img/partner33.jpg'
import Partner34 from '../img/partner34.jpg'
import Partner35 from '../img/partner35.jpg'
import Partner36 from '../img/partner36.jpg'
import Partner37 from '../img/partner37.jpg'
import Partner38 from '../img/partner38.jpg'
import Partner39 from '../img/partner39.jpg'
import Partner40 from '../img/partner40.jpg'
import Partner41 from '../img/partner41.jpg'
import Partner42 from '../img/partner42.jpg'
import Partner43 from '../img/partner43.jpg'
import Partner44 from '../img/partner44.jpg'
import Partner45 from '../img/partner45.jpg'
import Partner46 from '../img/partner46.jpg'
import Partner47 from '../img/partner47.jpg'
import Partner48 from '../img/partner48.jpg'
import Partner49 from '../img/partner49.jpg'
import Partner50 from '../img/partner50.jpg'
import { 
  AboutH2, 
  AboutH3, 
  AboutImgWrap, 
  AboutP, 
  Arrow,  
  Btn, 
  ClientsH2, 
  ClientsImg, 
  ClientsWrapper, 
  CompanyImg, 
  Frame, 
  ImgInherit, 
  MainBackground, 
  News, 
  NewsImg, 
  NewsImgwrap, 
  NewsTxtwrap, 
  Project, 
  ProjectBtn, 
  ProjectH2, 
  ProjectH3, 
  ProjectH4, 
  SurviceFlex, 
  SurviceH2, 
  SurviceH3, 
  SurviceImgwrap,  
  SurviceP,  
  SurviceTitleH2, 
  SurviceTitleH3, 
  SurviceTitleP, 
  Survicetxtwrap, 
  Width100 
} from '../layout/index.style';
import AboutImg from '../img/about_us1.jpg'
import { Link } from 'react-router-dom';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
function Home() {
  return (
    <Fragment>
      <Width100>
        <ImgInherit src={Mainimage} alt="배너이미지" />
        <Frame className='wrap'>
          <AboutImgWrap>
            <CompanyImg src={AboutImg} alt="회사 소개 이미지" />
          </AboutImgWrap>
          <div>
            <AboutH3>About us</AboutH3>
            <AboutH2>차별성을 가진 보라, 가능성을 가진 씨앗</AboutH2>
            <AboutP>퍼플시드의 에너지 씨앗이 고객님들의 성공에
              <br/>
              든든한 버팀목이 되는 보랏빛 숲으로 자리하겠습니다.
            </AboutP>
            <Link to="/company">
              <Btn>
                More View
                <Arrow icon={faChevronRight} /> 
              </Btn>
            </Link>
          </div>
        </Frame>
      </Width100>

      <MainBackground>
        <div className='wrap'>
          <SurviceTitleH3>WHAT WE DO</SurviceTitleH3>
          <SurviceTitleH2>퍼플시드 서비스 영역</SurviceTitleH2>
          <SurviceTitleP>
            퍼플시드는 트렌드에 맞추어 고객의 다양한 요구와 소비자 니즈를 반영하여
            <br/>
            고객사의 비전에 맞게 최적화된 마케팅 및 컨설팅 서비스를 제공합니다.
          </SurviceTitleP>
          <SurviceFlex>
            <SurviceImgwrap>
              <img src={MainMarketingImg} alt="이미지" />
            </SurviceImgwrap>
            <Survicetxtwrap>
              <SurviceH3>Marketing</SurviceH3>
              <SurviceH2>온/오프라인 마케팅</SurviceH2>
              <SurviceP>
                퍼플시드는 고객사의 비전에 맞게 
                <br/>
                최상의 결과를 이끌어냅니다.
              </SurviceP>
              <Link to="/marketing">
                <Btn>
                  Marketing
                  <Arrow icon={faChevronRight} /> 
                </Btn>
            </Link>
            </Survicetxtwrap>
          </SurviceFlex>
          <SurviceFlex>
            <Survicetxtwrap>
              <SurviceH3>Contents</SurviceH3>
              <SurviceH2>콘텐츠 기획/제작/배포</SurviceH2>
              <SurviceP>
                퍼플시드는 고객의 니즈를 반영한
                <br/>
                창의적인 콘텐츠를 제작, 배포합니다.
              </SurviceP>
              <Link to="/contents">
                <Btn>
                  Contents
                  <Arrow icon={faChevronRight} /> 
                </Btn>
              </Link>
            </Survicetxtwrap>
            <SurviceImgwrap>
              <img src={MainContentsImg} alt="이미지" />
            </SurviceImgwrap>
          </SurviceFlex>
          <SurviceFlex>
            <SurviceImgwrap>
              <img src={MainConsultingImg} alt="이미지" />
            </SurviceImgwrap>
            <Survicetxtwrap>
              <SurviceH3>Consulting</SurviceH3>
              <SurviceH2>
                비지니스/브랜드
                <br/>
                문서 컨설팅/인적 자원
              </SurviceH2>
              <SurviceP>
                퍼플시드는 고객의 사업 시작과
                <br/>
                운영에 관한
                <br/>
                비즈니스 컨설팅을 제공합니다.
              </SurviceP>
              <Link to="/consulting">
                <Btn>
                  Consulting
                  <Arrow icon={faChevronRight} />
                </Btn>
            </Link>
            </Survicetxtwrap>
            </SurviceFlex>
        </div>
      </MainBackground>

      <Project>
        <div className='wrap'>
          <ProjectH2>WHAT WE MADE</ProjectH2>
          <ProjectH3>퍼플시드 프로젝트</ProjectH3>
          <ProjectH4>퍼플시드는 디지털마케팅 전략 수립과 실행, 제작까지 디지털 마케팅의 모든 서비스를 제공합니다.</ProjectH4>
          <ProjectBtn to="/work">More view</ProjectBtn>
        </div>
      </Project>

      <News className='wrap'>
        <NewsTxtwrap>
          <AboutH3>News</AboutH3>
          <AboutH2>
            Find out the lasest news
            <br/>
            about PURPLESEED
          </AboutH2>
          <AboutP>퍼플시드의 새로운 소식과 함께 하세요!</AboutP>
          <Link to="/news">
            <Btn>
              News
              <Arrow icon={faChevronRight} /> 
            </Btn>
          </Link>
        </NewsTxtwrap>
        <NewsImgwrap>
          <NewsImg src={MainNewsImg} alt="이미지" />
        </NewsImgwrap>
      </News>

      <MainBackground>
        <div className='wrap'>
          <ClientsH2>OUR CLIENTS</ClientsH2>
          <ClientsWrapper>
            <ClientsImg><img src={Partner01} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner02} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner03} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner04} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner05} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner06} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner07} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner08} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner09} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner10} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner11} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner12} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner13} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner14} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner15} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner16} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner17} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner18} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner19} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner20} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner21} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner22} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner23} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner24} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner25} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner26} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner27} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner28} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner29} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner30} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner31} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner32} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner33} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner34} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner35} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner36} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner37} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner38} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner39} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner40} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner41} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner42} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner43} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner44} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner45} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner46} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner47} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner48} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner49} alt="클라이언트 이미지" /></ClientsImg>
            <ClientsImg><img src={Partner50} alt="클라이언트 이미지" /></ClientsImg>
          </ClientsWrapper>
        </div>
      </MainBackground>
    </Fragment>
  )
}
export default Home;