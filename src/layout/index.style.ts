import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import styled from "styled-components"

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
background: rgba(200, 200, 200, 0.9);
 display: none;
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