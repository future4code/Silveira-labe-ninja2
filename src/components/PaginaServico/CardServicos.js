import React from 'react'
import styled from 'styled-components'

const ContainerCardServicos = styled.div`
    border: 3px outset black;
    padding: 15px;
    border-radius: 25px;
    width: 200px;
    text-align: center;
`
const ContainerDiversosServicos = styled.div`
    display: flex;
    flex-direction: row;
`
export default class CardServicos extends React.Component {

    render() {
        const diversosServicos = this.props.arrayDeServicos.filter(servicos => {
            return this.props.inputMin === '' || servicos.price >= this.props.inputMin
        }).filter(servicos => {
            return this.props.inputMax === '' || servicos.price <= this.props.inputMax
        }).filter(servicos => {
            return servicos.title.toUpperCase().includes(this.props.inputName.toUpperCase())
        })




            .map((servicos) => {
                const newDate = servicos.dueDate.slice(0, 10).split('-').reverse().join('/')

                return (
                    <ContainerCardServicos key={servicos.id}>
                        <p>{servicos.title}</p>
                        <div>
                            <p>{servicos.price}</p>
                            <p>{newDate}</p>
                        </div>
                    </ContainerCardServicos>
                )
            })
        return (
            <ContainerDiversosServicos>
                {diversosServicos}
            </ContainerDiversosServicos>
        )
    }
}
