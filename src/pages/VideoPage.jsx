import Layout from '../components/Layout';
// BUG: encontrar porque no se solicita el ID del contenido

const Video = (props) => {
	return(
		<Layout title="AQUÍ VA EL TITULO PERONALIZADO">
			<h2>Video: {props.match.params.video_id}</h2>
		</Layout>
	)
}

export default Video;