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

				<nav class="pagination is-rounded" role="navigation" aria-label="pagination">
				  <a class="pagination-previous">Previous</a>
				  <a class="pagination-next">Next page</a>
				  <ul class="pagination-list">
				    <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
				    <li><span class="pagination-ellipsis">&hellip;</span></li>
				    <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
				    <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
				    <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
				    <li><span class="pagination-ellipsis">&hellip;</span></li>
				    <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
				  </ul>
				</nav>
				
			</div>
		</Layout>
	)
}
export default Trending;