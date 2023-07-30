import Layout from '../../components/Layout'
import {useParams} from 'react-router-dom'
const User = () => {
	const {username} = useParams()
	return(
		<Layout title={"Perfil de: " + username}  >
			<h1 className="title is-1">{username}</h1>
		</Layout>
	)
}

export default User;