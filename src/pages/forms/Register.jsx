import Layout from '../../components/Layout'
import {Link} from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
/*
 :root {
      --brandColor: hsl(166, 67%, 51%);
      --background: rgb(247, 247, 247);
      --textDark: hsla(0, 0%, 0%, 0.66);
      --textLight: hsla(0, 0%, 0%, 0.33);
    }

    body {
      background: var(--background);
      height: 100vh;
      color: var(--textDark);
    }

    .field:not(:last-child) {
      margin-bottom: 1rem;
    }

    .register {
      margin-top: 10rem;
      background: white;
      border-radius: 10px;
    }

    .left,
    .right {
      padding: 4.5rem;
    }

    .left {
      border-right: 5px solid var(--background);
    }

    .left .title {
      font-weight: 800;
      letter-spacing: -2px;
    }

    .left .colored {
      color: var(--brandColor);
      font-weight: 500;
      margin-top: 1rem !important;
      letter-spacing: -1px;
    }

    .left p {
      color: var(--textLight);
      font-size: 1.15rem;
    }

    .right .title {
      font-weight: 800;
      letter-spacing: -1px;
    }

    .right .description {
      margin-top: 1rem;
      margin-bottom: 1rem !important;
      color: var(--textLight);
      font-size: 1.15rem;
    }

    .right small {
      color: var(--textLight);
    }

    input {
      font-size: 1rem;
    }

    input:focus {
      border-color: var(--brandColor) !important;
      box-shadow: 0 0 0 1px var(--brandColor) !important;
    }

    .fab,
    .fas {
      color: var(--textLight);
      margin-right: 1rem;
    }

*/

const Register = () => {
	return(
		<Layout title="Registro">
			<div className="container">
				<div className="columns is-multiline">
			        
			        <div className="column is-8 is-offset-2 register">
			          <div className="columns">
			            <div className="column left">
			              <h1 className="title is-1">Furtube</h1>
			              <h2 className="subtitle colored is-4">Un lugar para compartir tu creatividad</h2>
			              <p>Porque a todos nos gustaría saber que tienes para compartir con todos nosotros.</p>
			            </div>
			            <div className="column right has-text-centered">
			              <h1 className="title is-4">Registrate</h1>
			              <p className="description">Ingresa tus datos para iniciar tu registro</p>
			              <form>
			                <div className="field">
			                  <div className="control">
			                    <input className="input is-medium" type="text" placeholder="Username" />
			                  </div>
			                </div>

			                <div className="field">
			                  <div className="control">
			                    <input className="input is-medium" type="email" placeholder="Correo electronico" />
			                  </div>
			                </div>
			                <button className="button is-block is-primary is-fullwidth is-medium">
                      <span className="icon-text">
                        <span>Comenzar</span>
                        <span className="icon"><FaArrowRight /></span>
                      </span>
                      </button>
			                <br />
			                <small><Link to="/login">¿Ya tienes una cuenta?</Link></small>
			              </form>
			            </div>
			          </div>
			        </div>

			    </div>
			</div>
		</Layout>
	)
}

export default Register;