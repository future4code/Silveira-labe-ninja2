import React from "react";
import styled from 'styled-components'


const ContainerHeader = styled.header`
    padding: 20px;
    background-color: red;
`
const ContainerMain = styled.main`
    padding: 20px;
    background-color: blue;
    flex-grow: 1;
`
const ContainerFooter = styled.footer`
    padding: 20px;
    background-color: yellow;
`

export class Serviços extends React.Component {
    state = {

    }
    render() {
        return (
            <>
                <ContainerHeader />
                <ContainerMain />
                <ContainerFooter />

            </>

        )
    }
}