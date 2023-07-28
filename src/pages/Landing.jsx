import Layout from '../components/Layout'
import {Link} from 'react-router-dom'
import {AiFillGithub} from 'react-icons/ai'
const Landing = () =>{
    return(
        <div className="hero is-black is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="column is-6 is-offset-3">
                        <div className="box has-background-dark">
                            <h1 className="title">Pr&oacute;ximamente</h1>
                            <h2 className="subtitle">Cada proyecto que desarrollo, es una idea y un sueño con un gran anhelo de ser cumplido. Espero que esta plataforma de videos sea de interes para todos los apasionados amantes del Furry. (.w.) </h2>
                            <Link className="button is-primary" to="https://github.com/ulf-frostypaw/furtube"><AiFillGithub /> Ver en GitHub</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;
