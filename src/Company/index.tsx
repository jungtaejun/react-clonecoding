import React, { Fragment } from 'react'
import { CompanyTapImg, Width100 } from '../layout/index.style'
import CompanyTabBanner from '../img/companytab_banner.png'
const Company = () => {
  return(
    <Fragment>
      <Width100>
        <CompanyTapImg src={CompanyTabBanner} alt="배너 이미지" />
      </Width100>
    </Fragment>
  )
}
export default Company