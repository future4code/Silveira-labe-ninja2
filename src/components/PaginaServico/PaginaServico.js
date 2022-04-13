import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CardServicos from './CardServicos'
import axios from 'axios'

const BaseUrl = 'https://labeninjas.herokuapp.com'
const headers = {
    headers: {
        Authorization: '9f938b9f-4c97-4e2f-b675-1be76ea15bff'
    }
}

export class PaginaServico extends React.Component {
    state = {
        jobs: [],
        inputMin: '',
        inputMax: '',
        inputName: '',
        inputOrdenação: 'crescente'

    }

    componentDidMount = () => {
        this.getAllJobs()
    }
    handleInputMin = (event) => {
        this.setState({ inputMin: event.target.value })
    }
    handleInputMax = (event) => {
        this.setState({ inputMax: event.target.value })
    }
    handleInputName = (event) => {
        this.setState({ inputName: event.target.value })
    }
    handleInputOrdenacao = (event) => {
        this.setState({ inputOrdenação: event.target.value })
    }
    getAllJobs = () => {
        axios.get(`${BaseUrl}/jobs`, headers)
            .then((res) => {
                this.setState({
                    jobs: res.data.jobs
                })
            })
            .catch((err) => {
                console.log(err)
                alert('Ocorreu um erro, tente novamente')
            })
    }

    render() {
        return (
            <div>
                <Header
                    irParaHome={this.props.irParaHome} irParaCadastro={this.props.irParaCadastro} />
                <div>
                    <input
                        type="number"
                        value={this.state.inputMin}
                        onChange={this.handleInputMin}
                        placeholder="Valor mínimo"
                    />
                    <input
                        type="number"
                        value={this.state.inputMax}
                        onChange={this.handleInputMax}
                        placeholder="Valor máximo"
                    />
                    <input
                        type="text"
                        value={this.state.inputName}
                        onChange={this.handleInputName}
                        placeholder="Buscar"
                    />
                    <select onChange={this.handleInputOrdenacao} name="sort" value={this.state.inputOrdenação}>
                        <option value="crescente">Crescente</option>
                        <option value="decrescente">Decrescente</option>
                        <option value="Preço">Preço</option>
                        <option value="Data">Data</option>
                    </select>
                </div>
                <CardServicos
                    arrayDeServicos={this.state.jobs}
                    inputMin={this.state.inputMin}
                    inputMax={this.state.inputMax}
                    inputName={this.state.inputName}
                    inputOrdenacao={this.state.inputOrdenação}
                />
                <Footer />
            </div>
        )
    }
}