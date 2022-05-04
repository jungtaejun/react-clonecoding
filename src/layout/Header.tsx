import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Atag, Full, Haedermenu, Imgstyle } from '../index.style';
function Header() {
  return (
    <Fragment>
        <Atag href='/'>
          <Imgstyle src='images/다운로드.png' alt='로고'/>
        </Atag>
        <Full>
          <Haedermenu>
            <Atag href='#'>COMPANY</Atag>
            <Atag href='#'>SERVICE</Atag>
            <Atag href='#'>WORK</Atag>
            <Atag href='#'>NEWS</Atag> 
            <Atag href='#'>CONTACT US</Atag>
          </Haedermenu>
        </Full>
    </Fragment>
  );
}

export default Header;