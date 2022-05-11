import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Amenu, Fix, Full, Headerflex, Headermenu, Hlogo } from '../index.style';
function Header() {
  return (
    <Fragment>
      <Fix>
        <Headerflex>
          <a href="/">
            <Hlogo src="images/다운로드.png" alt="퍼플시드 로고" />
          </a>
          <Full>
            <Headermenu>
              <Amenu href='#'>COMPANY</Amenu>
              <Amenu href='#'>SERVICE</Amenu>
              <Amenu href='#'>WORK</Amenu>
              <Amenu href='#'>NEWS</Amenu>
              <Amenu href='#'>CONTENT US</Amenu>
            </Headermenu>
          </Full>
        </Headerflex>
      </Fix>
    </Fragment>
  );
}

export default Header;