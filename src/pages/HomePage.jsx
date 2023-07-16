import Layout from '../components/Layout';
import {FaClock, FaStar} from 'react-icons/fa'
const Home = () => {
	return(
		<Layout title="Inicio">
			<div className="container">
				<div class="box has-background-link"><h3 className="title is-3 has-text-white">Furtube - Nuevas caracteristicas</h3><span className="has-text-white">Grandes cosas están por venir. OwO</span></div>
				<section className="section">
					<h1 className="title"><FaStar /> Contenido destacado</h1>
					<h2 className="subtitle">Contenido mejor calificado por los usuarios</h2>
				</section>
				{/* FETCH CONTENT IN CARDS WITH AXIOS (API): -title, author, datetime, -likes, views */}

				<section className="section">
					<h1 className="title"><FaClock /> Subido recientemente</h1>
					<h2 className="subtitle">Lo más fresco de los usuarios</h2>
				</section>
			</div>
		</Layout>
	);
}

export default Home;