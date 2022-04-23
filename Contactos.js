import React from 'react'



const Contactos = () => {


  return (
    <div className="form">
      <div className="title">Contactanos!</div>
      <br></br>
      <div className="input-container ic1">
        <input id="firstname" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <p className="placeholder">
          Nombre:
        </p>
      </div>
      <div className="input-container ic2">
        <input id="lastname" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="Email" className="placeholder">
          Email:
        </label>
      </div>
      <div className="input-container ic2">
        <input id="lastname" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="Mensaje" className="placeholder">
          Mensaje:
        </label>
      </div>
      <button type="text" className="submit">
        Enviar
      </button>
      <br></br>
      <button type="text" className="submit">
        Borrar
      </button>
    </div>
  )
}

export default Contactos