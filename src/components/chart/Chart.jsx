import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, YAxis } from 'recharts';


export default function Chart({ title, data, datakey }) {
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <YAxis stroke="#5550bd" />
                    <Line type="monotone" dataKey={datakey} stroke="#5550bd" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
