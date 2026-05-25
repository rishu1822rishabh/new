import React from 'react'
import Sidenav from './component/sidenav'
import Navbar from './component/navbar'
import Titlepage from './component/Pageheader'
import Maincontent from './component/Maincontent'

const App = () => {
  return (
    <div className='flex justify-between'>
      <Sidenav />
      <Maincontent />
    </div>
  )
}

export default App