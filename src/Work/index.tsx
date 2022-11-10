import React, { Fragment, useEffect, useState } from "react" 
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
  WorkarrowBtn, 
  WorkBtn, 
  WorkBtn1, 
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

  const queryString = require('query-string')
  const qs = queryString.parse(location.search)
  console.log(qs.currentPage)
  
  const [current, setCurrent] = useState(Number(qs.currentPage)) 
  const navigate = useNavigate()
  const onChagepaging = (page: number, pagesize: number) => {
    setCurrent(page)
    navigate('/work?tab=1&currentPage='+page)
  }
  const arr = [
    {"title" : '꿈꾸는평화실천가', "name": '유엔군초전기념관', "img": WorkUN},
    {"title" : '온라인 산업기능요원 채용박람회', "name": '병무청 x 중소벤처기업진흥공단', "img": WorkKosme},
    {"title" : '희망찬 내일을 꿈꾸는 청소년       치료 · 재활센터', "name": '국립중앙청소년디딤센터', "img": WorkDidim},
    {"title" : '2021 온라인 물류산업                   청년 채용 박람회', "name": '국토교통부 x 고용노동부', "img": WorkBilding},
    {"title" : '평화누리길', "name": '경기관광공사', "img": WorkPyeonwha},
    {"title" : '2020 온라인 인천 직업계고                      취업 박람회', "name": '인천광역시', "img": WorkTalk},
    {"title" : '청년드림 JOB 콘서트', "name": '고양시', "img": WorkJob},
    {"title" : '2020 경기도 온라인 청년            채용 박람회', "name": '경기도 일자리재단', "img": WorkKyungi},
    {"title" : '2020 해외진출 IP 전략 컨퍼런스', "name": '특허청 x 코트라', "img": WorkIp},
  ]
  
  return (
    <Fragment>
      <Width100>
          <BannerImg style={{backgroundImage: `url(${WorkBannerImg})`}}>
            <Maintext>Our Work</Maintext>
          </BannerImg>
        </Width100>
        {<Tapmain>
          <Tapmenu>
            <Tapbutton1 to='/work?tab=1'>All</Tapbutton1>
            <Tapbutton2 to='/work?tab=2'>공기업/정부기관</Tapbutton2>
            <Tapbutton2 to='/work?tab=3'>일반기업</Tapbutton2>
          </Tapmenu>
        </Tapmain>}
      <Topmaintext>All</Topmaintext>
      {qs.currentPage === '1' ? 
      <div className="wrap">
         <WrokGrid>
         </WrokGrid>
      </div>
      : 
      ''}
      <Pagination className="news" total={70} showSizeChanger={false} onChange={onChagepaging}/>
    </Fragment>
  )
}
export default Work