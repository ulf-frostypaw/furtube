import Layout from '../components/Layout';
// BUG: encontrar porque no se solicita el ID del contenido
import React from 'react';
import { Player } from 'video-react';
import { useParams } from 'react-router-dom';
import {AiFillHeart} from 'react-icons/ai'
import {FaEye} from 'react-icons/fa'
import {Link} from 'react-router-dom'

import eBlob from './eBlob'

const Video = () => {
	const { video_id } = useParams();
	const videoUrl = 'http://127.0.0.1:5173/storage/videos/trailer_hd.mp4'
	//const videoObjectURL = eBlob(videoUrl); 
	return(
		<Layout title={video_id}>
			<div className="container p-4 mx-auto">
				<div className="columns is-multiline">
					<div className="column is-three-quarters-desktop is-full-tablet">
						<div className="player-box">

						<Player>
				    		<source type="video/mp4" src={videoUrl} />
				    	</Player>
				    		<div className="box">
				    			<div className="columns is-multiline" id="medium-info">
				    				<div className="column is-full">
				    					<h1 className="is-size-4 has-text-weight-light has-text-white">Este es mi video épico</h1>
				    				</div>
				    			</div>
				    		</div>
						</div>

					</div>
					<div className="column is-one-quarter-desktop is-full-touch">
						<div className="columns is-multiline">
							<div className="column is-full-mobile is-half-tablet is-full-desktop">
								<div className="card">
									<Link to="/video/id">
									<div className="card-image">
										<div className="is-relative">
											<figure className="image is-16by9">
												<img className="video-image" src="https://placehold.co/400x225/"/>
											</figure>
											<div className="px-2 py-1 m-1 duration-box has-text-white">
												<p className="is-size-7">10:00</p>
											</div>
										</div>
									</div>
									</Link>
									<div className="p-3 pb-0 card-content">
										<Link to="/video/id"></Link>
										<div className="mb-2 media">
											<div className="media-content">
												<Link to="/video/id">
													<p className="is-6 is-truncated-text has-text-lighter has-text-weight-bold">Mi video genial owo</p>
												</Link>
												<div className="is-flex is-align-items-baseline is-justify-content-flex-start">
													<p className="is-size-6 has-text-lighter-1 is-truncated-text">
														<Link to="/user/username">Username</Link>
													</p>
													<p className="pl-2 is-size-7 has-text-lighter-2 min-width-fit-content">1d</p>
												</div>
											</div>
										</div>
										<footer className="px-1 pt-2 has-text-lighter-1 card-footer is-flex is-justify-content-space-between is-align-items-center">
											<span className="is-size-7"><span className="icon"><AiFillHeart /></span> 11</span>
											<span className="is-size-7"><span className="icon"><FaEye /></span> 7k</span>
										</footer>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Video;