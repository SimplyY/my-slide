import React, { Component } from 'react'

import classNames from 'classnames'
import './index.scss'

class LuSlide extends Component {
    constructor() {
        super()

        this.state = {
            activeIndex: 0
        }

        this.handleLeftButton = this.handleLeftButton.bind(this)
        this.handleRightButton = this.handleRightButton.bind(this)
    }

    handleLeftButton() {
        const { slideData } = this.props

        const newActiveIndex = this.state.activeIndex - 1 >= 0 ?
            this.state.activeIndex - 1 :
            slideData.length - 1

        this.setState({
            activeIndex: newActiveIndex
        })
    }

    handleRightButton() {
        const { slideData } = this.props

        const newActiveIndex = this.state.activeIndex + 1 <= slideData.length - 1 ?
            this.state.activeIndex + 1 :
            0

        this.setState({
            activeIndex: newActiveIndex
        })
    }

    handleClickDot(index) {
        this.setState({
            activeIndex: index
        })
    }

    render() {
        return (
            <div className="lu-slide">
                <div className="slide-items-wrapper">
                    {this.renderSlideItems()}
                </div>

                <div className="slide-button-wrapper">
                    <div className="slide-left-button"
                        onClick={this.handleLeftButton}>
                    </div>
                    <div className="slide-right-button"
                        onClick={this.handleRightButton}>
                    </div>
                </div>

                <div className="slide-dots-wrapper">
                    {this.renderDots()}
                </div>
            </div>
        )
    }

    getSlideItemClassName(index) {
        return classNames({
            'slide-item': true,
            'active': this.state.activeIndex === index
        })
    }

    renderSlideItems() {
        const { slideData } = this.props

        return slideData.map((item, index) => (
            <li className={this.getSlideItemClassName(index)} key={index}>
                <a href={item.clickLink} target="_blank" title={item.title}>
                    <img src={item.imgLink} alt="图片" />
                </a>
            </li>
        ))
    }

    getSlideDotClassName(index) {
        return classNames({
            'slide-dot': true,
            'active': this.state.activeIndex === index
        })
    }

    renderDots() {
        const { slideData } = this.props

        return slideData.map((item, index) => (
            <li className={this.getSlideDotClassName(index)}
                onClick={this.handleClickDot.bind(this, index)}
                key={index}>
                •
            </li>
        ))
    }
}

export default LuSlide
