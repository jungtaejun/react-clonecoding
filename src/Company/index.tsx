import React, { Fragment, useEffect, useState } from 'react'
import '../App.css'
import { 
  Bottomtext1,
  Bottomtext2,
  Circle,
  Circlebox,
  CircleText,
  CircleText2,
  Circlewrap,
  CompanyImgText,
  CompanyImgText2,
  Topmaintext, 
  CompanyPS, 
  CompanyPSimg,  
  CompanyText, 
  CompanyText2, 
  Companywrap, 
  Goodwrap, 
  Historylist, 
  Historylistcompany, 
  HistorylistNumber, 
  Historylistset, 
  Historytext, 
  HistoryWrap, 
  HistoryYear, 
  Missionbanner, 
  Missiontext1, 
  Missiontext2, 
  RecruitBotton, 
  RecruitLink, 
  Recruitwrap,  
  Tapbutton1, 
  Tapbutton2, 
  Tapmain, 
  Tapmenu, 
  VisionText, 
  Width100, 
  BannerImg,
  Maintext
} from '../layout/index.style'
import Companypurple from '../img/company_purple.26029c84.png'
import Companyseed from '../img/company_seed.436dc261.png'
import CompanyTabBanner from '../img/companytab_banner.png'
import { useLocation } from 'react-router-dom'
const Company = () => {
  const location = useLocation();
  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [ location ])
  // const [isClick, setIsClick] = useState(true);
  // const handleOnclick = (e:any) => {
  //   if(location.pathname === '/company'){
  //     setIsClick(true)
  //     console.log(true)
  //   }else if(location.pathname !== 'company'){
  //     setIsClick(false)
  //   }
  // }
  return (
    <Fragment>
      <Width100>
        <BannerImg style={{backgroundImage: `url(${CompanyTabBanner})`}}>
          <Maintext>COMPANY STORY</Maintext>
        </BannerImg>
      </Width100>
      <Tapmain>
        <Tapmenu>
          <Tapbutton1 to='/company'>회사 소개</Tapbutton1>
          <Tapbutton2 to='/brand'>브랜드 소개</Tapbutton2>
          <Tapbutton2 to='/ceo'>CEO 인사말</Tapbutton2>
        </Tapmenu>
      </Tapmain>
      <Topmaintext>회사 소개</Topmaintext>
      <Companywrap>
        <CompanyText>
          고객 성공의 씨앗들이 만드는
          <br/>
          경이로운 보라색 숲.
        </CompanyText>
        <CompanyText2>
          퍼플시드는 남들과 똑같은 천편일률적 마케팅과 비효율을 지양합니다.
          <br/>
          한정된 리소스 내에서 최대한 효과적인 마케팅 전략을 활용해, 나무 나이테처럼 지식경험 자산을 쌓아 왔습니다.
          <br/>
          세심한 고객 소통으로 이루어내는 높은 브랜드 이해 및 무엇보다 즐기면서 일하는 퍼르시드의 크리에이티브한
          <br/>
          에너지의 씨앗이 고객님들의 성공에 든든한 버팀목이 되는 보랏빛 숲으로 자리하겠습니다.
        </CompanyText2>
        <CompanyPS>
          <div>
            <CompanyPSimg src={Companypurple} alt="purple" />
            <CompanyImgText>차별성을 가진 PERPLE</CompanyImgText>
            <CompanyImgText2>
              빨강의 힘과 파랑의 우아함이 공존하는 보라색.
              <br/>
              진부한 마케팅을 지양하고 차별화된 마케팅 전략을 제안합니다.
            </CompanyImgText2>
          </div>
          <div>
            <CompanyPSimg src={Companyseed} alt="seed" />
            <CompanyImgText>가능성을 가진 SEED</CompanyImgText>
            <CompanyImgText2>
              고객의 든든한 숲이 되어드릴 씨앗.
              <br/>
              고객과의 만남으로 움튼 씨앗을 통해 사업의 성장을
              <br/>
              밑받침하는 숲이 되어드립니다.
            </CompanyImgText2>
          </div>
        </CompanyPS>
      </Companywrap>
      <Circlewrap>
        <CompanyText>
          VISION
        </CompanyText>
        <VisionText>
          VISION트렌드에 맞추어 고객의 다양한 요구와 소비자의 니즈를 반영하여
          <br/>
          최적화된 마케팅 및 컨설팅 서비스를 제공합니다
        </VisionText>
        <Circle>
          <div>
            <Circlebox>
              <CircleText>고객 이해</CircleText> 
            </Circlebox>
            <CircleText2>
              니즈 핵심 파악
              <br/>
              실전적 최적화
              <br/>
              솔루션
            </CircleText2>
          </div>
          <div>
            <Circlebox>
              <CircleText>강력한 퍼포먼스</CircleText>
            </Circlebox>
            <CircleText2>
              경험과 실력을 갖춘
              <br/>
              전문가 그룹
            </CircleText2>
          </div>
          <div>
            <Circlebox>
              <CircleText>크리에이티브 그 이상</CircleText>
            </Circlebox>
            <CircleText2>
              트렌드에 맞춘
              <br/>
              새로운 솔루션
            </CircleText2>
          </div>
        </Circle>
      </Circlewrap>
      <Missionbanner>
        <Missiontext1>MISSION</Missiontext1>
        <Missiontext2>
          우리의 미션은 우리가 만드는 콘텐츠와 서비스를 통해
          <br/>
          사용자에게 차별화된 마케팅 솔루션을 제시하고 진심 어린 소통으로 새로운 경험을 제공하는 것입니다.
        </Missiontext2>
      </Missionbanner>
      <HistoryWrap>
        <Historytext>HISTORY</Historytext>
        <Historylist>
          <HistoryYear>2021</HistoryYear>
          <div>
            <Historylistset>
              <HistorylistNumber>10</HistorylistNumber>
              <Historylistcompany>서강대학교 산학협력단 / 국토교통부 / IT여성기업인협회 / (주)위스트</Historylistcompany>
            </Historylistset>
            <Historylistset>
              <HistorylistNumber>09</HistorylistNumber>
              <Historylistcompany>한국로얄코펜하겐(주) / 세이브더칠드런 / 디비아이 어플리케이션 리플하다</Historylistcompany>
            </Historylistset>
            <Historylistset>
              <HistorylistNumber>08</HistorylistNumber>
              <Historylistcompany>롯테쇼핑(주) 한국인의 밥상 / 안양대학교 / (주)페페</Historylistcompany>
            </Historylistset>
            <Historylistset>
              <HistorylistNumber>07</HistorylistNumber>
              <Historylistcompany>티맵모빌리티</Historylistcompany>
            </Historylistset>
            <Historylistset>
              <HistorylistNumber>06</HistorylistNumber>
              <Historylistcompany>SK엠앤서비스 사장님안심경영팩 마케팅</Historylistcompany>
            </Historylistset>
            <Historylistset>
              <HistorylistNumber>05</HistorylistNumber>
              <Historylistcompany style={{marginBottom: 20}}>
                삼성전자 갤럭시워치 / (주)리파인 부동산 전문 어플리케이션
                <br/>
                집파인 유엔군 초전 기념관 / 병무청 / 한국장애인재활협회</Historylistcompany>
            </Historylistset>
            <Historylistset>
              <HistorylistNumber>04</HistorylistNumber>
              <Historylistcompany>롯데쇼핑(주) 메종아카이브 / 전자랜드 / (주)클루커스</Historylistcompany>
            </Historylistset>
            <Historylistset>
              <HistorylistNumber>03</HistorylistNumber>
              <Historylistcompany>국립중앙청소년디딤센터 온라인 마케팅</Historylistcompany>
            </Historylistset>
            <Historylistset>
              <HistorylistNumber>02</HistorylistNumber>
              <Historylistcompany>(주)아타쿠 모바일 게임 런칭 마케팅 프로모션 페이지 제작</Historylistcompany>
            </Historylistset>
            <Historylistset>
              <HistorylistNumber>01</HistorylistNumber>
              <Historylistcompany>프로스펙스 / 대한신장학회 / (주)진검물산</Historylistcompany>
            </Historylistset>
          </div>
        </Historylist>
        <Historylist>
          <HistoryYear>2020</HistoryYear>
          <div>
            <Historylistset>
              <HistorylistNumber>12</HistorylistNumber>
              <Historylistcompany>KOTRA 해외진출 IP 전략 컨런스(동일) / 인천 직업계고 박람회</Historylistcompany>
            </Historylistset>
            <Historylistset>
              <HistorylistNumber>11</HistorylistNumber>
              <Historylistcompany>행정중심복합도시건설청 홍보영상 제작 / 위크어바웃 코리아</Historylistcompany>
            </Historylistset>
            <Historylistset>
              <HistorylistNumber>10</HistorylistNumber>
              <Historylistcompany>(주)세니젠 온라인 마케팅 및 위탁 판매</Historylistcompany>
            </Historylistset>
            <Historylistset>
              <HistorylistNumber>09</HistorylistNumber>
              <Historylistcompany>플라탄바우어주식회사 컨텐츠 제작 및 광고 대행</Historylistcompany>
            </Historylistset>
            <Historylistset>
              <HistorylistNumber>08</HistorylistNumber>
              <Historylistcompany>고양시 일자리박람회 / 꽃을든남자</Historylistcompany>
            </Historylistset>
            <Historylistset>
              <HistorylistNumber>07</HistorylistNumber>
              <Historylistcompany>SK엠앤서비스 / 서울우리소리박물관 / (주)원더풀플랫폼</Historylistcompany>
            </Historylistset>
            <Historylistset>
              <HistorylistNumber>06</HistorylistNumber>
              <Historylistcompany>(주)지노바 아시아 / 밍동핑지아즈잉(명동샵)</Historylistcompany>
            </Historylistset>
            <Historylistset>
              <HistorylistNumber>05</HistorylistNumber>
              <Historylistcompany>대한고혈압학회 K-MMM 홍보대행 / 경기도 평화누리길 광고대행</Historylistcompany>
            </Historylistset>
            <Historylistset>
              <HistorylistNumber>04</HistorylistNumber>
              <Historylistcompany>LG유니참 / 씨클리스 / 닥터탑</Historylistcompany>
            </Historylistset>
            <Historylistset>
              <HistorylistNumber>03</HistorylistNumber>
              <Historylistcompany>유디치과 CF 제작 총괄 / 오진당떡볶이 / 쇼핑몰 룰루신사 오픈</Historylistcompany>
            </Historylistset>
            <Historylistset>
              <HistorylistNumber>02</HistorylistNumber>
              <Historylistcompany>DVN.GL IT 솔루션 컨설팅 / 스테어</Historylistcompany>
            </Historylistset>
            <Historylistset>
              <HistorylistNumber>01</HistorylistNumber>
              <Historylistcompany>멘야마쯔리 프랜차이즈 본사 마케팅 총괄</Historylistcompany>
            </Historylistset>
          </div>
        </Historylist>
        <Historylist>
          <HistoryYear>2019</HistoryYear>
          <div>
            <Historylistset>
              <HistorylistNumber>12</HistorylistNumber>
              <Historylistcompany>법무법인 정향 / 차이나플레인 / 금단비가 아인차</Historylistcompany>
            </Historylistset>
            <Historylistset>
              <HistorylistNumber>11</HistorylistNumber>
              <Historylistcompany>(주)뉴플러스기획 법인 설립 / 감동까스 프랜차이즈 본사 마케팅 총괄</Historylistcompany>
            </Historylistset>
            <Historylistset>
              <HistorylistNumber>10</HistorylistNumber>
              <Historylistcompany>법무법인 오킴스</Historylistcompany>
            </Historylistset>
            <Historylistset>
              <HistorylistNumber>08</HistorylistNumber>
              <Historylistcompany>삼성전자 디지털플라자 부산본점 / (주)에이원</Historylistcompany>
            </Historylistset>
            <Historylistset>
              <HistorylistNumber>06</HistorylistNumber>
              <Historylistcompany>농림축산식품부 2019농림축산식품일자리박람회</Historylistcompany>
            </Historylistset>
            <Historylistset>
              <HistorylistNumber>04</HistorylistNumber>
              <Historylistcompany>인천공항&CJ푸드몰 인천공항 상생 플리마켓 윙윙페어</Historylistcompany>
            </Historylistset>
            <Historylistset>
              <HistorylistNumber>02</HistorylistNumber>
              <Historylistcompany>(주)애프터컴퍼니</Historylistcompany>
            </Historylistset>
          </div>
        </Historylist>
        <Historylist>
          <HistoryYear>2018</HistoryYear>
          <div>
            <Historylistset>
              <HistorylistNumber>08</HistorylistNumber>
              <Historylistcompany>쇼핑몰 멜트미 오픈 / (주) 우리술</Historylistcompany>
            </Historylistset>
            <Historylistset>
              <HistorylistNumber>07</HistorylistNumber>
              <Historylistcompany>퍼플시드 회사 설립(사업자명:에스알월드)</Historylistcompany>
            </Historylistset>
          </div>
        </Historylist>
      </HistoryWrap>
      <Goodwrap>
        <Bottomtext1>GOOD WILL, GOOD BEHAVIOR</Bottomtext1>
        <Bottomtext2>선한 의지로 일하고, 선한 행동을 하는 것이 퍼플시드의 철학입니다.</Bottomtext2>
      </Goodwrap>
      <Recruitwrap>
        <Bottomtext1>Recruit</Bottomtext1>
        <Bottomtext2>
          퍼플시드는 고객의 다양한 요구와 소비자의 니즈를 반영하여 최적화된 마케팅 및 컨설팅 서비스를 제공합니다.
          <br/>
          퍼플시드와 함께 성장하고 싶다면, 지금바로 지원해주세요!
        </Bottomtext2>
        <RecruitLink to="/"><RecruitBotton>RECRUIT</RecruitBotton></RecruitLink>
      </Recruitwrap>
    </Fragment>
    )
  }
export default Company