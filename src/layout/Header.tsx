import React, { Fragment, useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { 
  Amenu, 
  Fix, 
  Full, 
  Headerflex, 
  Headermenu, 
  Hlogo, 
  HeaderSubmenu, 
  Subnav, 
  SubmenuA,
  OverStyle
} from './index.style'
import MainLogo from '../img/mainlogo.png'

interface IHeaderProps {
  
}

const Header: React.FC<IHeaderProps> = (props : IHeaderProps) =>{
  const [isHovering, setIsHovering] = useState(0);
  const handleMouseOver = () => {
    setIsHovering(1);
    console.log(1)
  }
  const handleMouseOut = () => {
    setIsHovering(0);
    console.log(0)
  }
  return (
    <Fragment>
       <Fix>
        <Headerflex>
          <Link to="/">
            <Hlogo src={ MainLogo } alt="퍼플시드 로고"/>
          </Link>
          <Full>
            <Headermenu
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <Amenu to="/company">COMPANY</Amenu>
              <Amenu to="/service">SERVICE</Amenu>
              <Amenu to="/work">WORK</Amenu>
              <Amenu to="/news">NEWS</Amenu>
              <Amenu to="/contact">CONTACT US</Amenu>
            </Headermenu>
            <Subnav>
              <HeaderSubmenu>
                <div>
                  <SubmenuA to="/company">회사소개</SubmenuA>
                  <SubmenuA to="/brand">브랜드소개</SubmenuA>
                  <SubmenuA to="/ceo">ceo인사말</SubmenuA>
                </div>
                <div>
                  <SubmenuA to="/marketing">Marketing</SubmenuA>
                  <SubmenuA to="/contents">Contents</SubmenuA>
                  <SubmenuA to="/digital_platform">Digital Platform</SubmenuA>
                  <SubmenuA to="/consulting">Consulting</SubmenuA>
                </div>
                <div>
                  <SubmenuA to="/2">공기업/정부기관</SubmenuA>
                  <SubmenuA to="/3">사기업</SubmenuA>
                </div>
                <div>
                  <SubmenuA to="/news">NEWS</SubmenuA>
                  <SubmenuA to="/pr_material">PR MATERIALS</SubmenuA>
                </div>
                <div>
                  <SubmenuA to="/contact">CONTACT US</SubmenuA>
                </div>
              </HeaderSubmenu>
            </Subnav>
          </Full>
        </Headerflex>
      </Fix>
    </Fragment>
  )
}
export default Header