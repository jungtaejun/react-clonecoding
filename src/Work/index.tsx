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
    {"title" : '우리동네 놀이환경 진단 프로젝트', "name": '세이브더칠드런', "img": WorkSave},
    {"title" : '배달용기 순환 플랫폼 리플하다', "name": '디비아이', "img": WorkRiffle},
    {"title" : '몽클레르 향수', "name": '코익 퍼퓸', "img": WorkKoicc},
    {"title" : '2-TWO BACKPACK', "name": '프로스펙스', "img": WorkProspecs},
    {"title" : '마시는 프로바이오틱스 바이오티', "name": '(주)위스트', "img": WorkWeast},
  ]
  const NewsItems = arr.map(function(string, index){
    return (
      <Workitem>
        <Worksize>
          <div>
            <div>
              <img src={string.img} alt="" />
            </div>
            <WorkText1>{string.name}</WorkText1>
            <WorkText2>{string.title}</WorkText2>
          </div>
        </Worksize>
      </Workitem>
    )
  })
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
          {NewsItems}
        </WrokGrid>
      </div>
      : 
      ''}
      <Pagination className="news" total={70} showSizeChanger={false} onChange={onChagepaging}/>
    </Fragment>
  )
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
export default Work