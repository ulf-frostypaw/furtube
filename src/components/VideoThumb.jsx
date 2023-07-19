import {Link} from 'react-router-dom'
const VideoThumb = () => {
	return(
		<div className="column is-full-mobile is-half-tablet is-one-fifth-desktop is-one-fifth-widescreen is-1-fifth-fullhd">
			<div className="card p-3">
				<div className="card-image">
					<div className="is-relative">
						<figure className="image is-16by9">
							<Link to="/video/id">
								<img className="image-video" src="https://placehold.co/400x225/" loading="lazy" />
							</Link>
						</figure>
					</div>
				</div>
				<div className="p-3 pb-0 card-content">
					<Link className="link" to="/video/id">
						<p className="is-6">My big title</p>
					</Link>
				</div>
			</div>
		</div>
	)
}
export default VideoThumb