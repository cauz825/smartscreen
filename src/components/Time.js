import React, { useState, useEffect } from 'react'
const moment = require('moment')

function Time() {

    const today = moment();
    const [currentDate, setCurrentDate] = useState('')
    const [currentTime, setCurrentTime] = useState('')
    const [countdown, setCountdown] = useState('')

    function displayDate() {
        setCurrentDate(today.format("dddd[,] MMMM Mo YYYY"))
    }

    function displayTime() {
        setCurrentTime(today.format("h:mmA"))
    }

    function daysLeft() {
        const costaRicaDate = moment("2021-06-08")
        setCountdown(costaRicaDate.diff(today, "days"))
    }

    useEffect(() => {
       displayDate()
       displayTime()
       daysLeft()
    })

    return(
        <div>
           Today is {currentDate}<br></br>
           It is {currentTime}<br></br>
           Costa Rica is {countdown} days!
        </div>
    )
}

export default Time