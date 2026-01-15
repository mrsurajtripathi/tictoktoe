import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './layouts/Navbar'
import { Section } from './ui/components/Section'
import Container from './ui/components/Container'
import { Row } from './ui/components/Row'
import { Call } from './ui/components/Call'
import { Player } from './components/Player'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main className='flex-shrink-0'>
      <Navbar/>
      <Section className="py-5">
        <Container className="px-5 my-5">
          <Row className='gx-5 justify-content-center'>
            <Call>
            <div class="row">
              <Player name='Player 1'>1</Player>
              <Player name='Player 2'>2</Player>
            </div>
            </Call>
          </Row>
        </Container>
      </Section>
     </main>
    </>
  )
}

export default App
