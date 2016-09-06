import React from 'react'
import { render } from 'react-dom'

import LuSlide from './LuSlide/index.jsx'
import './index.scss'

const slideData = [
    {
        imgLink: 'https://static.lufaxcdn.com/wcm-images/zz78g4b0OIxyYbS3IXbFYw.png',
        clickLink: 'https://promo.lu.com/activity-pages/lhbzq-20160902/index.html',
        title: '宝宝'
    },
    {
        imgLink: 'https://static.lufaxcdn.com/wcm-images/2qOFjh8aqVfFpcyrnNjPzA.jpg',
        clickLink: 'https://promo.lu.com/activity-pages/jinqiupc-160902/index.html',
        title: '新客'
    },
    {
        imgLink: 'https://static.lufaxcdn.com/wcm-images/u0q8osrbz75XOvEv1P9_zg.jpg',
        clickLink: 'https://promo.lu.com/activity-pages/p2pxkpca-160824/index.html',
        title: 'P2P'
    }
]


render(
    <div className="slide-wrapper">
        <LuSlide slideData={slideData} />
    </div>,
    document.getElementById('Root')
)
