import '../css/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../data/firebaseConfig.js';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';


const Login = ()=>{
    const inputs = document.getElementsByTagName("input")
    const navigate = useNavigate()
    const { session } = useContext(UserContext)

    const whiteSpaces = (e)=>{
        let key = e.keyCode
        if(key === 32){
            e.preventDefault()
        }
    }
    
    const login = async (e)=>{
        e.preventDefault()

        const email = inputs[0].value
        const password = inputs[1].value

        try{
            await signInWithEmailAndPassword(auth, email, password)
            toast.success("Se ha iniciado sesión con exito")

            inputs[2].setAttribute("disabled", "true")
            const btnRegister = document.getElementById("btn-register")
            btnRegister.setAttribute("disabled", "true")

            setTimeout(()=>{
                let route = "/"
                navigate(route)
            }, 3000)
        }catch(error){
            if(error.code === "auth/wrong-password"){
                toast.error("La contraseña es incorrecta")
            }else if(error.code === "auth/user-not-found"){
                toast.error("El usuario no existe")
            }else if(email === "" || password === ""){
                toast.error("Rellene los campos requeridos")
            }else{
                toast.error("Ha ocurrido un error")
            }
        }
    }

    return (
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
                <h3>Iniciar Sesión</h3>
                <label htmlFor="email">E-mail</label>
                <input placeholder="Introducir Email" className='input-text' onKeyDown={whiteSpaces} id="email" type="email" />
                <label htmlFor="password">Contraseña</label>
                <input placeholder="Introducir Contraseña" className='input-text' onKeyDown={whiteSpaces} id="password" type="password" />

                {
                    session === true
                    ?
                    <>
                        <input disabled id="btn-login" type="button" value="Iniciar Sesión"/>
                        <button disabled id="btn-register">Registrarse</button>
                        <p style={{color : "aqua", fontSize : "19px"}}>Ya tienes una sesión abierta</p>
                    </>

                    :
                    <> 
                        <input onClick={login} id="btn-login" type="submit" value="Iniciar Sesión"/>
                        <Link to="/register"><button id="btn-register">Registrarse</button></Link>
                    </>
                }
            </form>
        </>
    )
}

export default Login