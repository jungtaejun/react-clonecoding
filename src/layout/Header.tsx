import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Amenu, Fix, Full, Headerflex, Headermenu, Hlogo, HeaderSubmenu, Subnav, SubmenuA } from './index.style'

interface IHeaderProps {

}

const Header: React.FC<IHeaderProps> = (props : IHeaderProps) =>{ 
  return (
    <Fragment>
       <Fix>
        <Headerflex>
          <Link to='/'>
            <Hlogo src="images/logo.png" alt="퍼플시드 로고" />
            </Link>
          <Full>
            <Headermenu >
              <Amenu href=''>COMPANY</Amenu>
              <Amenu href=''>SERVICE</Amenu>
              <Amenu href=''>WORK</Amenu>
              <Amenu href=''>NEWS</Amenu>
              <Amenu href=''>CONTENT US</Amenu>
            </Headermenu> 
            <Subnav>
              <HeaderSubmenu>
                <div>
                  <SubmenuA href=''>회사소개</SubmenuA>
                  <SubmenuA href=''>브랜드소개</SubmenuA>
                  <SubmenuA href=''>ceo인사말</SubmenuA>
                </div>
                <div>
                  <SubmenuA href=''>Marketing</SubmenuA>
                  <SubmenuA href=''>Contents</SubmenuA>
                  <SubmenuA href=''>Digital Platform</SubmenuA>
                  <SubmenuA href=''>Consulting</SubmenuA>
                </div>
                <div>
                  <SubmenuA href=''>공기업/정부기관</SubmenuA>
                  <SubmenuA href=''>사기업</SubmenuA>
                </div>
                <div>
                  <SubmenuA href=''>NEWS</SubmenuA>
                  <SubmenuA href=''>PR MATERIALS</SubmenuA>
                </div>
                <div>
                  <SubmenuA href=''>CONTACT US</SubmenuA>
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