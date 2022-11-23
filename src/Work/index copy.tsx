import React, { Fragment, useState } from "react" 
import '../App.css'
import { 
  BannerImg, 
  Maintext, 
  Tapbutton1, 
  Tapbutton2, 
  Tapmain, 
  Tapmenu, 
  Topmaintext, 
  Width100, 
  Workitem, 
  Worksize, 
  WorkText1, 
  WorkText2, 
  WrokGrid } from "../layout/index.style"
import WorkBannerImg from '../img/work_banner.d3e51281.png'
import WorkUN from '../img/work_un.png'
import WorkKosme from '../img/work_kosme.png'
import WorkDidim from '../img/work_didim.png'
import WorkBilding from '../img/work_building.png'
import WorkSave from '../img/work_savethechildren.png'
import WorkRiffle from '../img/work_riffle.png'
import WorkKoicc from '../img/work_purfume.png'
import WorkProspecs from '../img/work_prospecs.png'
import WorkWeast from '../img/work_weast.png'
import WorkPyeonwha from '../img/work_pyeonwha.png'
import WorkTalk from '../img/work_talk.png'
import WorkJob from '../img/work_job.png'
import WorkKyungi from '../img/work_kyungi.png'
import WorkIp from '../img/work_ip.png'
import WorkEddalr from '../img/work_eddalr.png'
import WorkSeokang from '../img/work_seokang.png'
import WorkItwomen from '../img/work_itwomen.png'
import WorkAtaku from '../img/work_ataku.png'
import Workfarm from '../img/work_2019farm.png'
import { useLocation, useNavigate } from "react-router-dom"
import { Pagination, PaginationProps } from "antd"

const Work = () => {
  const location = useLocation();

  const Tab1 = location.search.indexOf('tab=1') >= 0 ? 'block' : 'none'
  const Tab2 = location.search.indexOf('tab=2') >= 0 ? 'block' : 'none'
  const Tab3 = location.search.indexOf('tab=3') >= 0 ? 'block' : 'none'

  const [current, setCurrent] = useState(1)
  const navigate = useNavigate()
  const onChange: PaginationProps['onChange'] = page => {
    navigate('/work?tab=1&currentPage='+page)
    setCurrent(page)
  }

  const CurrentTab1Page01 = location.search.indexOf('tab=1&currentPage=1') >= 0 ? 'block' : 'none'
  const CurrentTab1Page02 = location.search.indexOf('tab=1&currentPage=2') >= 0 ? 'block' : 'none'
  return (
    <Fragment>
      <div style={{display: Tab1}}>
        <Width100>
          <BannerImg  style={{backgroundImage: `url(${WorkBannerImg})`}}>
            <Maintext>Our Work</Maintext>
          </BannerImg>
        </Width100>
        <Tapmain>
          <Tapmenu>
            <Tapbutton1 to='/work?tab=1'>All</Tapbutton1>
            <Tapbutton2 to='/work?tab=2'>공기업/정부기관</Tapbutton2>
            <Tapbutton2 to='/work?tab=3'>일반기업</Tapbutton2>
          </Tapmenu>
        </Tapmain>
        <Topmaintext>All</Topmaintext>
        <div className="wrap">
          <div style={{display: CurrentTab1Page01}}>
            <WrokGrid>
              <Workitem>
                <Worksize>
                  <div>
                    <div>
                      <img src={WorkUN} alt="유엔군초전기념관" />
                    </div>
                    <WorkText1>유엔군초전기념관</WorkText1>
                    <WorkText2>꿈꾸는평화실천가</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div>
                      <img src={WorkKosme} alt="병무청 중소벤처기업진흥공단" />
                    </div>
                    <WorkText1>병무청 x 중소벤처기업진흥공단</WorkText1>
                    <WorkText2>온라인 산업기능요원 채용박람회</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div>
                      <img src={WorkDidim} alt="디딤센터" />
                    </div>
                    <WorkText1>국립중앙청소년디딤센터</WorkText1>
                    <WorkText2>희망찬 내일을 꿈꾸는 청소년       치료 · 재활센터</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div>
                      <img src={WorkBilding} alt="국토교통부 고용노동부" />
                    </div>
                    <WorkText1>국토교통부 x 고용노동부</WorkText1>
                    <WorkText2>2021 온라인 물류산업                   청년 채용 박람회</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div>
                      <img src={WorkSave} alt="세이브더칠드런" />
                    </div>
                    <WorkText1>세이브더칠드런</WorkText1>
                    <WorkText2>우리동네 놀이환경 진단 프로젝트</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div>
                      <img src={WorkRiffle} alt="리플하다" />
                    </div>
                    <WorkText1>디비아이</WorkText1>
                    <WorkText2>배달용기 순환 플랫폼 리플하다</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div>
                      <img src={WorkKoicc} alt="코익 퍼퓸" />
                    </div>
                    <WorkText1>코익 퍼퓸</WorkText1>
                    <WorkText2>몽클레르 향수</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div>
                      <img src={WorkProspecs} alt="프로스펙스" />
                    </div>
                    <WorkText1>프로스펙스</WorkText1>
                    <WorkText2>2-TWO BACKPACK</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div>
                      <img src={WorkWeast} alt="위스트" />
                    </div>
                    <WorkText1>(주)위스트</WorkText1>
                    <WorkText2>마시는 프로바이오틱스 바이오티</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
            </WrokGrid>
          </div>
          {/*                         2  페  이  지                         */}
          <div style={{display: CurrentTab1Page02}}>
            <WrokGrid>
              <Workitem>
                  <Worksize>
                    <div>
                      <div>
                        <img src={WorkEddalr} alt="한국로얄코펜하겐(주)" />
                      </div>
                      <WorkText1>한국로얄코펜하겐(주)</WorkText1>
                      <WorkText2>이딸라</WorkText2>
                    </div>
                  </Worksize>
                </Workitem>
                <Workitem>
                <Worksize>
                  <div>
                    <div><img src={WorkPyeonwha} alt="경기관광공사" /></div>
                    <WorkText1>경기관광공사</WorkText1>
                    <WorkText2>평화누리길</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div><img src={WorkTalk} alt="인천광역시" /></div>
                    <WorkText1>인천광역시</WorkText1>
                    <WorkText2>2020 온라인 인천 직업계고                      취업 박람회</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div><img src={WorkJob} alt="고양시" /></div>
                    <WorkText1>고양시</WorkText1>
                    <WorkText2>청년드림 JOB 콘서트</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div><img src={WorkKyungi} alt="경기도 일자리재단" /></div>
                    <WorkText1>경기도 일자리재단</WorkText1>
                    <WorkText2>2020 경기도 온라인 청년            채용 박람회</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div><img src={WorkIp} alt="특허청 x 코트라" /></div>
                    <WorkText1>특허청 x 코트라</WorkText1>
                    <WorkText2>2020 해외진출 IP 전략 컨퍼런스</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div>
                      <img src={Workfarm} alt="농림축산식품부" />
                    </div>
                    <WorkText1>농림축산식품부</WorkText1>
                    <WorkText2>2019농림축산식품일자리박람회</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div>
                      <img src={WorkSeokang} alt="서강대학교 산학협력단" />
                    </div>
                    <WorkText1>서강대학교 산학협력단</WorkText1>
                    <WorkText2>민국일보</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div>
                      <img src={WorkItwomen} alt="IT여성기업인협회" />
                    </div>
                    <WorkText1>IT여성기업인협회</WorkText1>
                    <WorkText2>혁신성장청년인재집중양성</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
            </WrokGrid>
          </div>
          <Pagination  className="news" current={current} total={70} showSizeChanger={false} onChange={onChange}/>
        </div>
      </div>

      <div style={{display: Tab2}}>
        <Width100>
          <BannerImg  style={{backgroundImage: `url(${WorkBannerImg})`}}>
            <Maintext>Our Work</Maintext>
          </BannerImg>
        </Width100>
        <Tapmain>
          <Tapmenu>
            <Tapbutton2 to='/work?tab=1'>All</Tapbutton2>
            <Tapbutton1 to='/work?tab=2'>공기업/정부기관</Tapbutton1>
            <Tapbutton2 to='/work?tab=3'>일반기업</Tapbutton2>
          </Tapmenu>
        </Tapmain>
        <Topmaintext>공기업/정부기관</Topmaintext>
        <div className="wrap">
          <div>
            <WrokGrid>
              <Workitem>
                <Worksize>
                  <div>
                    <div>
                      <img src={WorkUN} alt="유엔군초전기념관" />
                    </div>
                    <WorkText1>유엔군초전기념관</WorkText1>
                    <WorkText2>꿈꾸는평화실천가</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div>
                      <img src={WorkKosme} alt="병무청 중소벤처기업진흥공단" />
                    </div>
                    <WorkText1>병무청 x 중소벤처기업진흥공단</WorkText1>
                    <WorkText2>온라인 산업기능요원 채용박람회</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div>
                      <img src={WorkDidim} alt="디딤센터" />
                    </div>
                    <WorkText1>국립중앙청소년디딤센터</WorkText1>
                    <WorkText2>희망찬 내일을 꿈꾸는 청소년       치료 · 재활센터</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div>
                      <img src={WorkBilding} alt="국토교통부 고용노동부" />
                    </div>
                    <WorkText1>국토교통부 x 고용노동부</WorkText1>
                    <WorkText2>2021 온라인 물류산업                   청년 채용 박람회</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div><img src={WorkPyeonwha} alt="경기관광공사" /></div>
                    <WorkText1>경기관광공사</WorkText1>
                    <WorkText2>평화누리길</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div><img src={WorkTalk} alt="인천광역시" /></div>
                    <WorkText1>인천광역시</WorkText1>
                    <WorkText2>2020 온라인 인천 직업계고                      취업 박람회</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div><img src={WorkJob} alt="고양시" /></div>
                    <WorkText1>고양시</WorkText1>
                    <WorkText2>청년드림 JOB 콘서트</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div><img src={WorkKyungi} alt="경기도 일자리재단" /></div>
                    <WorkText1>경기도 일자리재단</WorkText1>
                    <WorkText2>2020 경기도 온라인 청년            채용 박람회</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div><img src={WorkIp} alt="특허청 x 코트라" /></div>
                    <WorkText1>특허청 x 코트라</WorkText1>
                    <WorkText2>2020 해외진출 IP 전략 컨퍼런스</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
            </WrokGrid>
            <Pagination  className="news" total={20} showSizeChanger={false} />
          </div>
        </div>
      </div>

      <div style={{display: Tab3}}>
        <Width100>
          <BannerImg  style={{backgroundImage: `url(${WorkBannerImg})`}}>
            <Maintext>Our Work</Maintext>
          </BannerImg>
        </Width100>
        <Tapmain>
          <Tapmenu>
            <Tapbutton2 to='/work?tab=1'>All</Tapbutton2>
            <Tapbutton2 to='/work?tab=2'>공기업/정부기관</Tapbutton2>
            <Tapbutton1 to='/work?tab=3'>일반기업</Tapbutton1>
          </Tapmenu>
        </Tapmain>
        <Topmaintext>일반기업</Topmaintext>
        <div className="wrap">
          <div>
            <WrokGrid>
              <Workitem>
                <Worksize>
                  <div>
                    <div>
                      <img src={WorkSave} alt="세이브더칠드런" />
                    </div>
                    <WorkText1>세이브더칠드런</WorkText1>
                    <WorkText2>우리동네 놀이환경 진단 프로젝트</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div>
                      <img src={WorkRiffle} alt="리플하다" />
                    </div>
                    <WorkText1>디비아이</WorkText1>
                    <WorkText2>배달용기 순환 플랫폼 리플하다</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div>
                      <img src={WorkKoicc} alt="코익 퍼퓸" />
                    </div>
                    <WorkText1>코익 퍼퓸</WorkText1>
                    <WorkText2>몽클레르 향수</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div>
                      <img src={WorkProspecs} alt="프로스펙스" />
                    </div>
                    <WorkText1>프로스펙스</WorkText1>
                    <WorkText2>2-TWO BACKPACK</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div>
                      <img src={WorkWeast} alt="위스트" />
                    </div>
                    <WorkText1>(주)위스트</WorkText1>
                    <WorkText2>마시는 프로바이오틱스 바이오티</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div>
                      <img src={WorkEddalr} alt="한국로얄코펜하겐(주)" />
                    </div>
                    <WorkText1>한국로얄코펜하겐(주)</WorkText1>
                    <WorkText2>이딸라</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div>
                      <img src={WorkSeokang} alt="서강대학교 산학협력단" />
                    </div>
                    <WorkText1>서강대학교 산학협력단</WorkText1>
                    <WorkText2>민국일보</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div>
                      <img src={WorkItwomen} alt="IT여성기업인협회" />
                    </div>
                    <WorkText1>IT여성기업인협회</WorkText1>
                    <WorkText2>혁신성장청년인재집중양성</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
              <Workitem>
                <Worksize>
                  <div>
                    <div>
                      <img src={WorkAtaku} alt="(주)아타쿠" />
                    </div>
                    <WorkText1>(주)아타쿠</WorkText1>
                    <WorkText2>앨리스클로젯 반전 부캐 TEST</WorkText2>
                  </div>
                </Worksize>
              </Workitem>
            </WrokGrid>
            <Pagination  className="news" total={60} showSizeChanger={false} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default Work