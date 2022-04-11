import React from 'react'
import styled from 'styled-components'
import { AppContainer } from './components/AppContainer'
import { Serviços } from './components/Serviços'

const GlogalStyles = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

function App() {
	return (
		<GlogalStyles>
			<Serviços />
		</GlogalStyles>

	)
}

export default App
