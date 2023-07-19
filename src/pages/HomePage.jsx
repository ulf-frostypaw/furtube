import Layout from '../components/Layout';
import {FaClock, FaStar} from 'react-icons/fa'
import {Link} from 'react-router-dom'

import VideoThumb from '../components/VideoThumb'
const Home = () => {
	return(
		<Layout title="Inicio">
			<div className="container p-4">
				<div class="box has-background-link"><h3 className="title is-3 has-text-white">Furtube - Nuevas caracteristicas</h3><span className="has-text-white">Grandes cosas están por venir. OwO</span></div>
				<div className="is-flex-desktop is-justify-content-space-between is-align-items-baseline">
					<div>
						<h1 className="title"><FaStar /> Contenido destacado</h1>
						<h2 className="subtitle">Contenido mejor calificado por los usuarios</h2>
					</div>
					<div>Order by: <strong>Más reciente</strong></div>
				</div>
				<div className="pt-4 gallery-margin columns is-multiline">
					<VideoThumb /><VideoThumb /><VideoThumb /><VideoThumb /><VideoThumb />
				</div>
				{/* FETCH CONTENT IN CARDS WITH AXIOS (API): -title, author, datetime, -likes, views */}

				<div className="is-flex-desktop is-justify-content-space-between is-align-items-baseline">
					<div>
						<h1 className="title"><FaClock /> Subido recientemente</h1>
						<h2 className="subtitle">Lo más fresco de los usuarios</h2>
					</div>
					<div>Order by: <strong>Más reciente</strong></div>
				</div>
				<div className="pt-4 gallery-margin columns is-multiline">
					<VideoThumb /><VideoThumb /><VideoThumb /><VideoThumb /><VideoThumb />
				</div>
			</div>
		</Layout>
	);
}

export default Home;