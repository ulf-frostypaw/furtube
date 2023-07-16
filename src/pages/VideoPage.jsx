import Layout from '../components/Layout';

const Video = ({ video_id }) => {
	return(
		<Layout title={video_id}>
			<h2>Video: {video_id}</h2>
		</Layout>
	)
}

export default Video;