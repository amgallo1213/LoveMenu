import { useState } from 'react'

import './App.css'
import { foods } from './data'
import MenuMain from './components/MenuMain'


function App() {

  const [isVisible, setIsVisible] = useState(true)

  return (
    <>
      <div>
        <MenuMain foods={foods}/>
      </div>


      
    </>
  )
}

export default App
