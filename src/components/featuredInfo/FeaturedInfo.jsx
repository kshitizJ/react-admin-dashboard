import React from 'react'
import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Rs 2,500 /-</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDownward className="featuredIcon negative" /> </span>
                </div>
                <span className="featuredSubtitle">Compared To Last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Rs 4,500 /-</span>
                    <span className="featuredMoneyRate">-1.4 <ArrowDownward className="featuredIcon negative" /> </span>
                </div>
                <span className="featuredSubtitle">Compared To Last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Rs 2,000 /-</span>
                    <span className="featuredMoneyRate">+2.4 <ArrowUpward className="featuredIcon" /> </span>
                </div>
                <span className="featuredSubtitle">Compared To Last Month</span>
            </div>
        </div>
    )
}
