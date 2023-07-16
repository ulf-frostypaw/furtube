import Header from './common/Header';
import Footer from './common/Footer';
import Helmet from 'react-helmet'

const Layout = ({ title = '', children }) => {
	return(
		<main>
			<Helmet>
				<title>{title} | Furtube</title>
			</Helmet>
			<Header />
				{children}
			<Footer />
		</main>
	)
}

export default Layout;