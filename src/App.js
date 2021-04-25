import React from 'react'
import Calendar from './components/Calendar'
import News from './components/News'
import Weather from './components/Weather'
import Time from './components/Time'

function App() {
  return(
    <div>
      Smartscreen App<br></br><br></br>
      <Time /><br></br>
      <Calendar />
      <News />
      <Weather />

    </div>
  )
}

export default App