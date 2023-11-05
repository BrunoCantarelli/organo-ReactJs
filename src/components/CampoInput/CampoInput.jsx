/* eslint-disable react/prop-types */
import './CampoInput.css'


const CampoInput = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    let valor = 'Bruno Cantarelli'

    const aoDigitado = (evento) => {
        console.log(evento.target.value)
    }

    return (
        <div className='input-container'>
            <label>{props.label}</label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}
export default CampoInput