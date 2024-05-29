import { useState } from 'react'
import {Container} from 'react-bootstrap'
import {Outlet} from 'react-router-dom'
import Header from "./components/Header.jsx"

function App() {

  return (
      <>
        <Header/>
        <main className='py-3'>
            <Container>
                <Outlet/>
            </Container>
        </main>
      </>
  )
}

export default App
