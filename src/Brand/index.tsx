import React, { Fragment, useState } from "react"
import { useLocation } from "react-router-dom";
import '../App.css'
import { 
  BrandGoal,
  BrandMaintext, 
  BrandMake, 
  BrandPurplrimg, 
  BrandRun, 
  BrandSecwrap, 
  BrandSubtext, 
  BrandSubtext2, 
  BrandTapimg, 
  Maintext, 
  Brandtracktext1, 
  Brandtracktext2, 
  BrandTrackwrap, 
  BrandWrap, 
  Topmaintext,  
  Companywrap,  
  Tapbutton1, 
  Tapbutton2, 
  Tapmain, 
  Tapmenu, 
  Width100, 
  BannerImg} from "../layout/index.style"
import BrandTap from '../img/brandTab_bg.1cd6866d.png'
import BrandPurple from '../img/brandpurple.png'
import BrandBannerImg from '../img/brandtab_banner.bb3679f5.png'

const Brand = () => {
  const location = useLocation();
  // const [isClick, setIsClick] = useState(true);
  // const handleOnclick = (e:any) => {
  //   if(location.pathname === '/company'){
  //     setIsClick(true)
  //     console.log(true)
  //   }else {
  //     setIsClick(false)
  //   }
  // }
  return(
    <Fragment>
      <Width100>
        <BannerImg style={{backgroundImage: `url(${BrandBannerImg})`}}>
          <Maintext>BRAND STORY</Maintext>
        </BannerImg>
      </Width100>
      <Tapmain>
        <Tapmenu>
          <Tapbutton2 to='/company'>회사 소개</Tapbutton2>
          <Tapbutton1 to='/brand'>브랜드 소개</Tapbutton1>
          <Tapbutton2 to='/ceo'>CEO 인사말</Tapbutton2>
        </Tapmenu>
      </Tapmain>
      <Topmaintext>브랜드 소개</Topmaintext>
      <BrandWrap>
        <BrandMaintext>WE MAKE THE TRACKS FOR THE GOAL</BrandMaintext>
        <BrandSubtext>퍼플시드가 목표를 위해, 성공을 위해 함께 트랙을 만듭니다.</BrandSubtext>
      </BrandWrap>
      <BrandTapimg src={BrandTap} alt="브랜드탭" />
      <Companywrap>
        <BrandSecwrap>
          <BrandPurplrimg src={BrandPurple} alt="브랜드퍼플시드" />
          <BrandSubtext2>
            퍼플시드의 BI 심볼은 트랙의 상징을 담아 제작하였습니다.
            <br/>
            페이스메이커가 좋은 기록을 내기 위해 함께 트랙을 달리며 경기의 흐름을 서포트하듯
            <br/>
            퍼플시드는 고객을 위해 서비스와 브랜드 환경에 맞는 최적의 솔루션을 제공하여
            <br/>
            고객의 비즈니스를 서포트합니다.
          </BrandSubtext2>
        </BrandSecwrap>
      </Companywrap>
      <BrandTrackwrap>
        <BrandRun>
          <Brandtracktext1>Run the Track</Brandtracktext1>
          <Brandtracktext2>
            좋은 기록으로 완주할 수 있도록
            <br/>
            퍼플시드가 함께 트랙을 달립니다.
          </Brandtracktext2>
        </BrandRun>
        <BrandGoal>
          <Brandtracktext1
          style={{color: '#000'}}
          >For the Goal</Brandtracktext1>
          <Brandtracktext2
          style={{color: '#000'}}
          >
            고객의 목표를 위해, 성공을 위해
            <br/>
            퍼플시드가 함께 합니다.
          </Brandtracktext2>
        </BrandGoal>
        <BrandMake>
          <Brandtracktext1>Make a Track</Brandtracktext1>
          <Brandtracktext2>
            퍼플시드의 비즈니스의 방향과 속도에 맞는
            <br/>
            고유의 트랙을 만들어갑니다.
          </Brandtracktext2>
        </BrandMake>
      </BrandTrackwrap>
    </Fragment>
  )
}
export default Brand 