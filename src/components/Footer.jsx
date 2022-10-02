import '../css/Footer.css'
import githubImg from '../img/github-logo.png'

const Footer = ()=>{

    return(
        <footer>
            <div className='footer-content'>
                <p id="logo-footer" className="logo-p">R4MA GAMES</p>
                <p>RAMA-GAMES es una marca ficticia</p>
            </div>
            <div className='footer-content'>
                <a href='https://github.com/R4MA-Dev' rel="noreferrer" target="_blank"><img id="footer-img" src={githubImg} alt="GitHub" /></a>
                <p>R4MA-Dev</p>
            </div>
        </footer>
    )
}

export default Footer