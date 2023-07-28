import Layout from '../components/Layout';
// BUG: encontrar porque no se solicita el ID del contenido
import React from 'react';
import { Player } from 'video-react';
import { useParams } from 'react-router-dom';

const Video = () => {
	const { video_id } = useParams();
	return(
		<Layout title={video_id}>
			<Player>
		    	<source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
		    </Player>
		</Layout>
	)
}

export default Video;