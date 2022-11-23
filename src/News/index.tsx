import React, { Fragment, useState } from "react"
import '../App.css'
import { useLocation } from "react-router-dom"
import { Pagination, PaginationProps } from 'antd'
import { 
  BannerImg, 
  Maintext, 
  Newsdate, 
  NewsList, 
  NewsListSize, 
  NewsWrap, 
  Tapbutton1, 
  Tapbutton2, 
  Tapmain, 
  Tapmenu, 
  Topmaintext, 
  Width100 
} from "../layout/index.style"
import NewsBanner from '../img/newstab_banner.426ffa43.png'

const News: React.FC = () => {

  const [current, setCurrent] = useState(1)
  const onChange: PaginationProps['onChange'] = page => {
    setCurrent(page)
  }
  console.log(current)

  const location = useLocation()

  const Tab1 = location.search.indexOf('tab=1') >= 0 ? 'block' : 'none'
  const Tab2 = location.search.indexOf('tab=2') >= 0 ? 'block' : 'none'
  const Tab3 = location.search.indexOf('tab=3') >= 0 ? 'block' : 'none'
  return(
    <Fragment>
      <Width100>
        <BannerImg  style={{backgroundImage: `url(${NewsBanner})`}}>
          <Maintext>NEWS</Maintext>
        </BannerImg>
      </Width100>
      <Tapmain>
        <Tapmenu>
          <Tapbutton1 to='/work?tab=1'>NEWS</Tapbutton1>
          <Tapbutton2 to='/work?tab=2'>PR MATERIALS</Tapbutton2>
        </Tapmenu>
      </Tapmain>
      <Topmaintext>뉴스</Topmaintext>
      <div className="wrap">
        <div>
          <NewsWrap>
            <NewsListSize>
              <NewsList>
                반려동물 모빌리티플랫폼 '멍타냥택시', 팀엠케이와 MOU
              </NewsList>
              <Newsdate>2022.10.15</Newsdate>
            </NewsListSize>
            <NewsListSize>
              <NewsList>
                주식회사 뉴플러스기획, 선국대학교와 산업협력 MOU
              </NewsList>
              <Newsdate>2022.09.22</Newsdate>
            </NewsListSize>
            <NewsListSize>
              <NewsList>
                (주)뉴플러스기획-연세대학교 산학협력단, AI 개발 및 SW고도화를 위한 반려동물 펫택시 플랫폼 MOU 체결
              </NewsList>
              <Newsdate>2022.09.22</Newsdate>
            </NewsListSize>
          </NewsWrap>
          <NewsWrap>
            <NewsListSize>
              <NewsList>
                중소벤처기업부 장관상 수상 - ‘대한민국여성기업상’에 컬리 김슬아 대표 등 6명 첫 수상
              </NewsList>
              <Newsdate>2022.07.10</Newsdate>
            </NewsListSize>
            <NewsListSize>
              <NewsList>
                중소벤처기업부 장관상 수상 - 여성창업경진대회 대상에 카이헬스 이혜준대표
              </NewsList>
              <Newsdate>2022.07.08</Newsdate>
            </NewsListSize>
            <NewsListSize>
              <NewsList>
                멍타냥택시, 오간식과 반려동물 시장의 성장을 위한 전략적 제휴 체결
              </NewsList>
              <Newsdate>2022.05.13</Newsdate>
            </NewsListSize>
          </NewsWrap>
          <NewsWrap>
            <NewsListSize>
              <NewsList>
                [제5회 국제인공지능대전] 국내 최대 AI 전시회 빛낸 인공지능 서비스와 솔루션
              </NewsList>
              <Newsdate>2022.04.13</Newsdate>
            </NewsListSize>
            <NewsListSize>
              <NewsList>
                사료 대신 멍카롱·고양이 화장실...1500만 펫팸족 사로잡았다'
              </NewsList>
              <Newsdate>2022.03.10</Newsdate>
            </NewsListSize>
            <NewsListSize>
              <NewsList>
                박현주 9대 IT여성기업인협회장 취임···'지역확대 등 5대 스케일업 추진'
              </NewsList>
              <Newsdate>2022.02.09</Newsdate>
            </NewsListSize>
          </NewsWrap>
        </div>
        <Pagination  className="news" total={30} showSizeChanger={false} onChange={onChange} current={current}/>

        <div style={{display: "none"}}>
          <NewsWrap>
            <NewsListSize>
              <NewsList>
                반려동물 전용 ‘멍타냥택시’, '2021 오픈 네스트 200＇선정
              </NewsList>
              <Newsdate>2022.01.21</Newsdate>
            </NewsListSize>
            <NewsListSize>
              <NewsList>
                종합광고대행사 퍼플시드, 오늘 사명 로고 변경 및 공개
              </NewsList>
              <Newsdate>2021.11.18</Newsdate>
            </NewsListSize>
            <NewsListSize>
              <NewsList>
                펫택시 멍타냥택시, 할인 이벤트 진행
              </NewsList>
              <Newsdate>202109.16</Newsdate>
            </NewsListSize>
          </NewsWrap>
          <NewsWrap>
            <NewsListSize>
              <NewsList>
                (주)뉴플러스기획, 반려동물 모빌리티 서비스 ‘멍타냥택시’ 런칭 예정
              </NewsList>
              <Newsdate>2021.07.07</Newsdate>
            </NewsListSize>
            <NewsListSize>
              <NewsList>
                안양대학교, (주)뉴플러스 기획과 산학 업무협약(MOU)체결
              </NewsList>
              <Newsdate>2021.04.16</Newsdate>
            </NewsListSize>
            <NewsListSize>
              <NewsList>
                종합광고에이전시 퍼플시드 신사동 확장이전 및 플랫폼 앱 개발 대행 런칭 앞두고 있어
              </NewsList>
              <Newsdate>2020.10.16</Newsdate>
            </NewsListSize>
          </NewsWrap>
          <NewsWrap>
            <NewsListSize>
              <NewsList>
                뉴플러스기획, 창립 2주년 빅데이터 플랫폼 런칭 계획 밝혀
              </NewsList>
              <Newsdate>2020.08.04</Newsdate>
            </NewsListSize>
            <NewsListSize>
              <NewsList>
                퍼플시드, 홈페이지 개편으로 무료 컨설팅 진행
              </NewsList>
              <Newsdate>2020.01.23</Newsdate>
            </NewsListSize>
            <NewsListSize>
              <NewsList>
                퍼플시드, 신사동 사로수길 인근으로 확장이전
              </NewsList>
              <Newsdate>2019.11.18</Newsdate>
            </NewsListSize>
          </NewsWrap>
        </div>
        <Pagination style={{display: 'none'}} className="news" total={30} showSizeChanger={false} onChange={onChange} current={current}/>
      </div>
    </Fragment>
  )
} 
export default News