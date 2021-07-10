import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./home.css"
import { Userdata } from '../../dummyData'
import WidgetSmall from '../../components/widgetSmall/WidgetSmall'
import WidgetLarge from '../../components/widgetLarge/WidgetLarge'

export default function Home() {

    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={Userdata} title="User Analytics" datakey="ActiveUser" />
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
    )
}
