import './Formulario.css'
import CampoInput from '../CampoInput/CampoInput'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import Botao from '../Botao/Botao'


const Formulario = () => {

const times = [
    'Programação',
    'Front End',
    'Data Science',
    'DevOps',
    'UX e Desing',
    'Mobile',
    'Inovação e Gestão'
]

const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('form submetido')
}

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoInput obrigatorio={true} label="Nome" placeholder="Digite seu Nome"/>
                <CampoInput obrigatorio={true} label="Cargo" placeholder="Digite seu Cargo"/>
                <CampoInput label="Imagem" placeholder="Digite o endereço da Imagem"/>
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario