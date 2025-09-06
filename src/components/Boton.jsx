import '../styles/Boton.css'

function Boton({ numero }){


    return(
        <div className="btn">
            <h2 className="btn-valor">{numero}</h2>
        </div>
    )
}

export default Boton;