import { useState } from 'react'

import {AnimatePresence, motion} from "motion/react"
import './App.css'
import { foods } from './data'
import MenuMain from './components/MenuMain'


function App() {

  const [isVisible, setIsVisible] = useState(true)

  return (
    <>
      {/* <section id="center">
        <div className="hero">
          <AnimatePresence initial={false} className="blah" >
                {isVisible ? (
                    <motion.div className='box'

                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                      
                        key="box"
                    />
                ) : null}
            </AnimatePresence>
            <motion.button
                className='motion-btn'
                onClick={() => setIsVisible(!isVisible)}
                whileTap={{ y: 1 }}
            >
                {isVisible ? "Hide" : "Show"}
            </motion.button>
        </div>
      </section> */}

        <div>
          <MenuMain foods={foods}/>
        </div>


      
    </>
  )
}

export default App
