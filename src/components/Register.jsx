import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../data/firebaseConfig.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Register = ()=>{
    const inputs = document.getElementsByTagName("input")
    const { session } = useContext(UserContext)

    const whiteSpaces = (e)=>{
        let key = e.keyCode
        if(key === 32){
            e.preventDefault()
        }
    }

    const navigate = useNavigate()

    const createUser = async (e)=>{
        e.preventDefault()
        const email = inputs[0].value
        const password = inputs[1].value
        
        try{
            await createUserWithEmailAndPassword(auth, email, password)
            let route = "/"
            toast.success("Su usuario ha sido creado con exito")

            inputs[2].setAttribute("disabled", "true")
            const btnLogin = document.getElementById("btn-login")
            btnLogin.setAttribute("disabled", "true")

            setTimeout(()=>{
                navigate(route)
            }, 3000)

        }catch(error){
            if(error.code === 'auth/invalid-email'){
                toast.error("Email Invalido")
            }else if(error.code === 'auth/weak-password'){
                toast.error("La contraseña debe tener minimo 6 caracteres")
            }else if(error.code === 'auth/email-already-in-use'){
                toast.error("El Email ya esta registrado")
            }else if(error.code){
                toast.error("Algo salio mal")
            }
        }

    }

    return(
        <>
        <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
            <form>
                <h3>Registrarse</h3>
                <label htmlFor="email">E-mail</label>
                <input placeholder="Introducir Email" className='input-text' onKeyDown={whiteSpaces} id="email" type="email" />
                <label htmlFor="password">Contraseña</label>
                <input placeholder="Introducir Contraseña" className='input-text' onKeyDown={whiteSpaces} id="password" type="password" />

                {
                    session === true
                    ?
                    <>
                        <input disabled id="btn-register" type="button" value="Registrarse"/>
                        <button disabled id="btn-login">Iniciar Sesión</button>
                        <p style={{color : "aqua", fontSize : "19px"}}>Ya tienes una sesión abierta</p>
                    </>
                    :
                    <>
                        <input onClick={createUser} id="btn-register" type="submit" value="Registrarse"/>
                        <Link to="/login"><button id="btn-login">Iniciar Sesión</button></Link>
                    </>
                }
            </form>
        </>
    )
}

export default Register