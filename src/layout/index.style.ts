import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import styled from "styled-components"
import MissionBanner from '../img/company_banner_mission.beec966b.png'
import GoodBanner from '../img/company_bottom_banner.dae6bd1d.png'
import BrandRunImg from '../img/brand_img01.66b31b24.png'
import BrandGoalImg from '../img/brand_img02.6d26f9fd.png'
import BrandMakeImg from '../img/brand_img03.c02d2ec3.png'

export const Fix = styled.div`
 position: fixed;
 left: 0px;
 top: 0px;
 width: 100%;
 z-index: 99;
`
export const Headerflex = styled.div`
 display: flex;
 box-align: center;
 align-items: center;
 height: 85px;
 padding: 0px 43px;
 background-color:transparent;
`
export const Full = styled.div`
 width: 100%;
 height:100%;
`
export const Headermenu = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  box-align: center;
  align-items: center;
  box-pack: justify;
  justify-content: space-between;
  width: 50%;
  height: 100%;
`
export const Amenu = styled(Link)`
  display: block;
  width: 95px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
`
export const Hlogo = styled.img`
 width: 123px;
`
export const Subnav = styled.div`
position: absolute;
top: 85px;
left: 0px;
width: 100%;
height: 255px;
background: rgba(255, 255, 255, 0.9);
border-top: 1px solid rgb(217, 217, 217);
`
export const HeaderSubmenu = styled.div`
 position: relative;
 left: 50%;
 transform: translateX(-50%);
 display: flex;
 box-pack: justify;
 justify-content: space-between;
 width: 50%;
`
export const SubmenuA = styled(Link)`
 width: 95px;
 text-align: center;
 color: rgb(51, 46, 84);
 display: block;
 padding-top: 32px;
` 
export const FooterMain = styled.div`
 position: relative;
 width: 100%;
 height: auto;
 background: #000;
 color: #fff;
 font-weight:400;
 padding: 40px 0px;
`
export const HeaderPadding = styled.div` 
  padding: 85px 0 0 0;
`
export const Footercontent= styled.div`
 display: flex;
 box-pack:justify;
 justify-content: space-between;
 padding: 0px;
 max-width: 1240px;
 margin: 0 auto;
`
export const Footerlogo = styled.img`
 max-height:45px;
 margin-bottom:25px;
`
export const Footerul = styled.ul`
 display: flex;
 flex-wrap: wrap;
 width: 800px;
 margin-bottom:0px;
`
export const Footerli = styled.li`
  padding: 0px 20px 0px 0px;
  font-size: 14px;
`
export const Copyright = styled.p`
  margin: 34px 0px 0px;
  font-size: 14px;
`
export const Sns = styled.div`
 position: relative;
 top: 8px;
`
export const FooterSnsImg = styled(Link)`
 margin-right: 25px;
`
export const Frame = styled.div`
 display: flex;
 box-align: center;
 align-items: center;
 width: 100%;
`
export const Width100 = styled.div`
 width: 100%;
`
export const ImgInherit = styled.img`
 width: inherit; 
`// width: inherit; 부모의 속성을 상속받는다 
export const AboutImgWrap = styled.div`
 width: 600px;
 height: 600px;
 margin-right: 40px;
 overflow: hidden;
`
export const CompanyImg = styled.img`
 width: 100%; 
 &:hover {
   transition: transform 0.25s ease-in 0s;
  }
`
export const AboutH3 = styled.h3`
 line-height: 26px;
 letter-spacing:1px;
 color: rgb(100, 29, 135);
 font-size:3.5rem;
 font-weight:700;
 margin-top:0;
 margin-bottom: 0.5em;
`
export const AboutH2 = styled.h2`
 margin: 0px 0px 30px;
 letter-spacing: 1px;
 line-height: 32px;
 font-size: 26px;
 font-weght: bold;
 color: rgb(51, 46, 84);
`
export const AboutP = styled.p`
 margin:0px 0px 50px;
 line-height: 24px;
 font-size: 18px;
 color: rgb(80, 75, 110);
`
export const Btn = styled.button`
 position: relative;
 width: 180px;
 height: 45px;
 padding: 0px 25px;
 text-align: start;
 border: 1px solid rgb(158, 158, 158);
 border-radius: 45px; 
 background: rgb(255, 255, 255);
 line-height: 47px;
 font-size: 16px;
 font-weight: 600;
 color: rgb(17, 17, 17);
 transition: all 0.2s ease-in 0s;
`
export const Arrow = styled(FontAwesomeIcon)`
 width: 6px;
 height: 9px;
 position: absolute;
 top: 18px;
 right: 25px;
 transition all 0.4 ease-in 0s;
`
export const MainBackground = styled.div`
 width: 100%;
 background: rgb(248, 249, 251);
`
export const SurviceTitleH3 = styled.h3`
 text-align: center;
 color: rgb(100, 29, 135);
 font-size: 52px;
 font-weight: 700;
 margin-top: 0;
 margin-bottom: 0.5em;
`
export const SurviceTitleH2 = styled.h2`
 margin: 20px 0px;
 text-align: center;
 font-size: 1.9rem;
 font-weight: 600;
`
export const SurviceTitleP = styled.p`
 margin-bottom: 20px;
 text-align: center;
 font-size: 1.3rem;
`
export const SurviceFlex = styled.div`
 display: flex;
 box-align: center;
 align-items: center;
 width: 100%;
 margin-bottom: 20px;
`
export const SurviceImgwrap = styled.div`
 width: 785px;
 height: auto;
 overflow: hidden;
`
export const Survicetxtwrap = styled.div`
 padding: 0px 40px;
`
export const SurviceH3 = styled.h3`
 text-align: start;
 font-size: 16px;
 font-weight: bold;
 line-height: 26px;
 color: rgb(100, 29, 135);
 letter-spacing: 1px
 margin-top: 0px;
 margin-bottom: 0.5em;
`
export const SurviceH2 = styled.h2`
 white-space: pre-wrap;
 text-align: start;
 letter-spacing: 1px;
 font-size: 26px;
 font-weight: bold;
 line-height: 32px;
 margin: 0px 0px 30px;
 color: rgb(51, 46, 84);
`
export const SurviceP = styled.p`
 white-space: pre-wrap;
 text-align: start;
 line-height: 24px;
 margin: 0px 0px 50px;
 font-size: 16px;
 color: rgb(80, 75, 110);
`
export const Project = styled.div`
 width: 100%;
 background: rgb(27, 27, 27);
`
export const ProjectH2 = styled.h2`
 text-align: center;
 font-size: 3.5rem;
 font-weight: 700;
 color: rgb(255, 255, 255);
 margin-top: 0px;
 margin-bottom: 0.5em;
`
export const ProjectH3 = styled.h3`
 margin: 20px 0px;
 font-size: 1.9rem;
 font-weight: 600;
 text-align: center;
 color: rgb(255, 255, 255)
`
export const ProjectH4 = styled.h4`
 margin-bottom: 50px;
 text-align: center;
 font-size: 1.3rem;
 color: rgb(255, 255, 255);
`
export const ProjectBtn = styled(Link)`
 font-size: 13px;
 font-weight: bold;
 width: 160px;
 text-align: center;
 margin: 0px auto;
 line-height: 50px;
 height: 50px;
 border-radius:25px;
 box-sizing: border-box;
 display: block;
 border: 1px solid rgb(252, 247, 239);
 color: rgb(255, 255, 255);
`
export const News = styled.div`
 display: flex;
 box-align: center;
 align-items: center;
 width: 100%
`
export const NewsImgwrap = styled.div`
 width: 758px;
 height: auto;
 margin-right: 0px;
 overflow: hidden;
`
export const NewsTxtwrap = styled.div`
 margin: 0px 60px;
`
export const NewsImg = styled.img`
 width: 758px;
`
export const ClientsH2 = styled.h2`
 margin-bottom: 50px;
 text-align: center;
 color: rgb(100, 29, 135);
 font-size: 3.5rem;
 font-weight: 700;
`
export const ClientsWrapper = styled.div`
 display: flex;
 flex-wrap: wrap;
`
export const ClientsImg = styled.div`
 margin: 10px auto;
`
// export const CompanyTapImg = styled.img`
//  width: 100%;
//  height: 400px;
// `
export const Tapmain = styled.div`
 width: 100%;
 height: 230px;
 display: flex;
 align-items: center;
 justify-content: center;
`
export const Tapmenu = styled.div`
 display: flex;
`
export const Topmaintext = styled.div`
 text-align: center;
 font-size: 34px;
`
export const Companywrap = styled.div`
 max-width: 1240px;
 margin: 0 auto;
 padding: 100px 0;
`
export const CompanyText = styled.div`
 font-size: 45px;
 font-weight: 600;
 text-align: center;
 line-height: 1.5;
 margin-bottom: 49px;
`
export const CompanyText2 = styled.div`
 font-size: 18px;
 text-align: center;
 line-height:1.7;
 margin-bottom: 68px;
`
export const CompanyPS = styled.div`
 display: flex;
 margin: 0px auto;
 gap: 100px;
 max-width: 1100px;
`
export const CompanyPSimg = styled.img`
 width: 100%;
 margin-bottom: 45px;
`
export const CompanyImgText = styled.div`
 font-size: 30px;
 font-weight: 600;
 margin-bottom: 15px;
`
export const CompanyImgText2 = styled.div`
 font-size: 18px;
 margin-bottom: 68px;
 line-height:1.7;
`
export const VisionText = styled.div`
 margin-bottom: 83px;
 text-align: center;
 font-size: 22px;
`
export const Circle = styled.div`
 display: flex;
 justify-content: space-between;
`
export const Circlebox = styled.div`
 width: 300px;
 height: 300px;
 border: 1px solid rgb(112, 112, 112);
 border-radius: 50%;
 margin-bottom: 55px;
` 
export const Circlewrap = styled.div`
 max-width: 1100px;
 margin: 0 auto;
 padding: 100px 0;
`
export const CircleText = styled.div`
 font-size: 28px;
 font-weight: 400;
 text-align: center;
 line-height: 300px;
`
export const CircleText2 = styled.div`
 font-size: 22px;
 line-height: 35px;
 text-align: center;
`
export const Missionbanner = styled.div`
 width: 100%;
 padding: 140px 0px;
 background-size: 1903px 448px;
 background-image: url(${MissionBanner});
`
export const Missiontext1 = styled.div`
 text-align: center;
 font-size: 35px;
 color: #fff;
 font-weight: 700;
 margin-bottom: 20px;
`
export const Missiontext2 = styled.div`
 text-align: center;
 font-size: 22px;
 line-height: 40px;
 color: #fff;
 margin-bottom: 22px;
`
export const HistoryWrap = styled.div`
 width: 1100px;
 padding: 60px 20px;
 margin: 0px auto;
`
export const Historytext = styled.div`
 font-size: 32px;
 font-weight: bold;
 text-align: center;
 margin-bottom: 30px;
`
export const Historylist = styled.div`
 display: flex;
 padding: 53px 0px;
 border-bottom: 1px solid lightgray;
`
export const HistoryYear = styled.div`
 width: 123px;
 font-size: 24px;
 font-weight: 900;
 color: rgb(94, 54, 106);
`
export const Historylistset = styled.div`
 display: flex;
`
export const HistorylistNumber = styled.div`
 display: flex;
 width: 86px;
 font-size: 16px;
 font-weight: 700;
 margin-bottom: 20px;
`
export const Historylistcompany = styled.div`
 font-size: 16px;
 color: rgb(102, 102, 102);
`
export const Goodwrap = styled.div`
 width: 100%;
 display: flex;
 height: 400px;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 background-size: 1903px 400px;
 background-image: url(${GoodBanner})
`
export const Bottomtext1 = styled.div`
 font-size: 35px;
 font-weight: 600;
 color: #fff;
 margin-bottom: 20px;
`
export const Bottomtext2 = styled.div`
 text-align center;
 font-size: 22px;
 margin-bottom: 22px;
 color: #fff;
`
export const Recruitwrap = styled.div`
 width: 100%;
 height: 375px;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 background: rgb(100, 29, 135);
`
export const RecruitLink = styled(Link)`
 margin: 0 auto;
`
export const RecruitBotton = styled.div`
 text-align: center;
 width: 180px;
 height: 45px;
 padding: 0;
 margin: 45px auto 0px;
 border: none;
 border-radius: 45px;
 background: rgb(255, 255, 255);
 line-height: 47px;
 font-size: 18px;
 font-weight: 600;
`
export const Tapbutton1 = styled(Link)`
 color: #000;
 text-decoration : underline;
 margin: 0px 70px;
 padding: 17px 0px;
 font-size: 18px;
`
export const Tapbutton2 = styled(Link)`
 margin: 0px 70px;
 padding: 17px 0px;
 font-size: 18px;
 color: rgb(163, 163, 174);
`
export const Maintext = styled.div`
 text-align: center;
 line-height: 420px;
 font-size: 45px;
 color: rgb(255, 255, 255);
 font-weight: 400;
 margin-bottom: 0px;
`
export const BrandWrap = styled.div`
 max-width: 1240px;
 margin: 0 auto;
 padding-top: 100px;
`
export const BrandMaintext = styled.div`
 text-align: center;
 font-size: 45px;
 font-weight: 600;
 margin-bottom: 0.5em;
`
export const BrandSubtext = styled.div`
 text-align: center;
 font-size: 22px;
 font-weight: 400;
 margin-bottom: 0.5em;
`
export const BrandTapimg = styled.img`
 width: 100%;
`
export const BrandSecwrap = styled.div`
 display: flex;
 align-items: center;
`
export const BrandPurplrimg = styled.img`
 width: 350px;
 height: 32px;
 margin-right: 80px;
`
export const BrandSubtext2 = styled.div`
 font-size: 22px;
 line-height: 1.8;
`
export const BrandTrackwrap = styled.div`
 width: 100%;
 display: flex;
`
export const BrandRun = styled.div`
 width: 33.3%;
 padding: 25% 50px 50px;
 background-image: url(${BrandRunImg})
`
export const BrandGoal = styled.div`
 width: 33.3%;
 padding: 25% 50px 50px;
 background-image: url(${BrandGoalImg})
`
export const BrandMake = styled.div`
 width: 33.3%;
 padding: 25% 50px 50px;
 background-image: url(${BrandMakeImg})
`
export const Brandtracktext1 = styled.div`
 font-size: 30px;
 font-weight: 700;
 color: #fff;
 margin-bottom: 0.5em;
`
export const Brandtracktext2 = styled.div`
 font-size: 18px;
 color: #fff;
 margin-bottom: 0px;
`
export const Ceowrap = styled.div`
 max-width: 1240px;
 margin: 0 auto;
 padding: 100px 0;
 display: flex;
 justify-content: space-between;
 align-items: center;
`
export const CeoSign = styled.div`
text-align : right;
margin-bottom: 45px;
`
export const Ceotext1 = styled.div`
 font-size: 28px;
 color: #000;
 font-weight: 400;
 line-height: 1.5;
`
export const Ceotext2 = styled.div`
 font-size: 22px;
 font-weight: 400;
 color: #000;
 line-height: 1.5;
`
export const ServiceWrap = styled.div`
 display: flex;
 flex-wrap: wrap;
`
export const ServiceImg = styled.div`
 position: relative;
 width 25%;
 padding-bottom: 25%;
 background-size: cover;
`
export const Servicetext = styled.div`
 position: absolute;
 color: #fff;
 top: 50%;
 left: 50%;
 transform: translate( -50%, -50%);
 text-align: center;
 font-size: 18px;
 font-weight: normal;
`
export const BannerImg = styled.div`
 width: 100%;
 height: 400px;
 background-size: 1920px 400px;
`
export const WrokGrid = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 grid-template-rows: 1fr 1fr 1fr;
`
export const Workitem = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 12px 0;
 padding-bottom: 12px;
 margin-bottom: 60px;
`
export const Worksize = styled.div`
 width: 380px;
 height: 500px;
 margin: 0 auto;;
`
export const WorkText1 = styled.div`
 margin: 33px 0 8px;
 white-space: pre-wrap;
 font-size: 20px;
 font-weight: 400;
 color: #000;
`
export const WorkText2 = styled.div`
 margin-bottom: 13px;
 white-space: pre-wrap;
 font-size: 26px;
 font-weight: 400;
 color: #000;
`
export const WorkBtn1 = styled.div`
 text-align: center;
 margin-top: 18px;
`
export const WorkarrowBtn = styled.div`
 display: inline-block;
 width: 32px;
 height: 32px;
 padding: 0 6px;
 line-height: 30px;
 margin-right: 8px;
 border: 1px solid #d9d9d9;
 border-radius: 2px;
 color: #d9d9d9;
 font-size: 12px;
`
export const WorkBtn = styled.div`
  display: inline-block;
  width: 32px;
  height: 32px;
  padding: 0 6px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
  margin-right: 8px;
  color: #000;
`
export const NewsWrap = styled.div`
 display: flex;
 justify-content: space-between;
 gap: 80px;
`
export const NewsListSize = styled.div`
 width: 360px;
 height: 192px;
 border-top: 1px solid rgb(112, 112, 112);
 margin-bottom: 150px;
`
export const NewsList = styled.div`
 margin: 33px 0px 27px;
 font-size: 28px;
 font-weight: 500;
 color: #000;
 `
 export const Newsdate = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: rgb(163, 163, 174);
 `