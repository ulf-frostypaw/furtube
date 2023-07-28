import Layout from '../components/Layout'
import VideoThumb from '../components/VideoThumb'
import {Pagination} from 'react-bulma-components'
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

				<Pagination
				  current={1}
				  showFirstLast
				  total={5}
				/>
			</div>
		</Layout>
	)
}
export default Latest;