import { Visibility } from '@material-ui/icons'
import React from 'react'
import "./widgetSmall.css"

export default function WidgetSmall() {
    return (
        <div className="widgetSm">
            <span className="widgetSmallTitle">New Join Members</span>
            <ul className="widgetSmallList">
                <li className="widgetSmallListItem">
                    <img
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Anna Keller</span>
                        <span className="widgetSmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Anna Keller</span>
                        <span className="widgetSmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Anna Keller</span>
                        <span className="widgetSmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Anna Keller</span>
                        <span className="widgetSmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Anna Keller</span>
                        <span className="widgetSmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
