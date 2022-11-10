import React, { Fragment, SyntheticEvent, useState } from 'react'
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
} from './index.style'
import MainLogo from '../img/mainlogo.png'
import MainBLogo from '../img/mainBlogo.png'


interface IHeaderProps {
  
}

const Header: React.FC<IHeaderProps> = (props : IHeaderProps) =>{
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = (e: SyntheticEvent ) => {
    setIsHovering(true);
    // console.log(e)
  }
  const handleMouseOut = () => {
    setIsHovering(false);
  }
  return (
    <Fragment>
       <Fix>
        <Headerflex style={{background : isHovering ? '#fff' : ''}}>
          <Link to="/">
            <Hlogo src={ isHovering ? MainBLogo : MainLogo } alt="퍼플시드 로고"/>
          </Link> 
          <Full>
            <Headermenu
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseOut}
            >
              <Amenu style={{color : isHovering ? '#000' : '#fff'}} to="/company">COMPANY</Amenu>
              <Amenu style={{color : isHovering ? '#000' : '#fff'}} to="/marketing">SERVICE</Amenu>
              <Amenu style={{color : isHovering ? '#000' : '#fff'}} to="/work?tab=1">WORK</Amenu>
              <Amenu style={{color : isHovering ? '#000' : '#fff'}} to="/news">NEWS</Amenu>
              <Amenu style={{color : isHovering ? '#000' : '#fff'}} to="/contact">CONTACT US</Amenu>
            </Headermenu>
            <Subnav style={{display: isHovering ? 'block' : 'none'}}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
            >
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
                  <SubmenuA to="/work?tab=2">공기업/정부기관</SubmenuA>
                  <SubmenuA to="/work?tab=3">사기업</SubmenuA>
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