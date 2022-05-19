import exp from "constants"
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
 align-item: center;
 height: 85px;
 padding: 0px 43px;
 background: #000;
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
export const Amenu = styled.a`
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
export const SubmenuA = styled.a`
 width: 95px;
 text-align: center;
 color: rgb(51, 46, 84);
 display: block;
 padding-top: 32px;
` 
