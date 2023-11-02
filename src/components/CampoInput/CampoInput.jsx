/* eslint-disable react/prop-types */
import './CampoInput.css'

const CampoInput = (props) => {

    return (
        <div className='input-container'>
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoInput