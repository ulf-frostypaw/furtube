import Layout from '../components/Layout'
import VideoThumb from '../components/VideoThumb'
const Latest = () => {
	return(
		<Layout title="Más recientes">
			<div className="container">
				<h1 className="title is-1">Contenido más reciente</h1>
				<div className="pt-4 gallery-margin columns is-multiline">
					<VideoThumb /><VideoThumb /><VideoThumb /><VideoThumb /><VideoThumb />
					<VideoThumb /><VideoThumb /><VideoThumb /><VideoThumb /><VideoThumb />
					<VideoThumb /><VideoThumb /><VideoThumb /><VideoThumb /><VideoThumb />
					<VideoThumb /><VideoThumb /><VideoThumb /><VideoThumb /><VideoThumb />
				</div>
			</div>
		</Layout>
	)
}
export default Latest;