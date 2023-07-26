import Layout from '../components/Layout'
import VideoThumb from '../components/VideoThumb' // max videos 20 (15) by page (use paginator)
const Trending = () => {
	return(
		<Layout title="Tendencias">
			<div className="container">
				<h1 className="title is-1">Tendencias</h1>
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
export default Trending;