import Layout from '../components/Layout'
const Error404 = () => {
	return(
		<Layout title="Error 404 - page not found">
		<section className="hero is-danger is-medium">
			<div class="hero-body">
			    <div class="container has-text-centered">
			      <p class="title">Error 404 - page not found</p>
			      <p class="subtitle">Nada, no hay, no existe.</p>
			    </div>
		  	</div>
		</section>
		</Layout>
	)
}

export default Error404