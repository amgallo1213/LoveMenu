import { useState } from 'react'

import './App.css'
import { foods } from './data'
import MenuMain from './components/MenuMain'
import DescriptiveWords from './components/DescriptiveWords'



function App() {

  const [isVisible, setIsVisible] = useState(true)

  return (
    <>
      <div>
        <MenuMain foods={foods} />
        <DescriptiveWords />
      </div>


      
    </>
  )
}

export default App
