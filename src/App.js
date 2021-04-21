import React from 'react'
import Calendar from './components/Calendar'
import News from './components/News'
import Weather from './components/Weather'

function App() {
  return(
    <div>
      Smartscreen App<br></br><br></br>
      <Calendar />
      <News />
      <Weather />

    </div>
  )
}

export default App