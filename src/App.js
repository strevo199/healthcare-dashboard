import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ApponitmentContextProvider from './component/context/ApponitmentContext'
import Routes from './component/Routes'


const App = () => {
  return (
    <div className ="app flex overflow-x-hidden">
      <BrowserRouter>
        <ApponitmentContextProvider>
          <Routes/>
        </ApponitmentContextProvider>
      </BrowserRouter>
    </div>
    
  )
} 

export default App
