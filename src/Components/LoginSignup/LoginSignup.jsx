import React, { useState } from 'react';
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {

   const [action, setAction] = useState("Registrate");

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Iniciar sesion" ? <div></div> : 
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder="Nombre" />
            </div>
            }
    
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder="Correo" />
            </div>
        
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder="Contraseña" />
            </div>
        </div>
        
        {action==="Sign Up" ? <div></div> : 
        <div className="forgot-password">¿Olvido Contraseña?<span>Click aqui</span></div> }

        <div className="submit-container">
            <div className={action==="Registrarse" ? "submit gray" : "submit"} onClick={()=>{setAction("Registrarse")}}>Registrarse</div>
            <div className={action==="Iniciar sesion" ? "submit gray" : "submit"} onClick={()=>{setAction("Iniciar sesion")}}>Iniciar sesion</div>
        </div>
    </div>
  )
}

export default LoginSignup;
