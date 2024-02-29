import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Gallery from './components/Gallery'
import { Avatar,  } from './components/CurlyBraces'
import Todolist from './components/ConditionalRender'
import { Shoppinglist} from './components/ShoppingList'
function App() {
 

  return (
    <>
     <div className='text-center m-0 auto max-w-60 rounded-sm border-solid border-2 bg-slate-300'> 
      <h1 className='text-2xl mt-10'>lesson day 29</h1>
      <p className='text-4xl text-lime-800'>React</p>
      <Gallery/>
      <Avatar/>
     {/* <Todolist asd="Munkhtulga"/> */}
      </div>
      <Todolist/>
      <Shoppinglist/>
    </>
  )
}

export default App
