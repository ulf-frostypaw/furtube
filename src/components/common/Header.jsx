import {Link, NavLink} from 'react-router-dom'
import {HiFire} from 'react-icons/hi'
import {FaClock, FaSearch} from 'react-icons/fa'
const Header = () => {
	return(
		<nav className="navbar" role="navigation" aria-label="main navigation">
		  <div className="navbar-brand">
		    <Link class="navbar-item" to="/">
		      <h3 className="title is-3">LOGO</h3>
		    </Link>

		    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
		      <span aria-hidden="true"></span>
		      <span aria-hidden="true"></span>
		      <span aria-hidden="true"></span>
		    </a>
		  </div>

		  <div id="navbarBasicExample" className="navbar-menu">
		    <div className="navbar-start">
			    <NavLink
				  to="/trending"
				  className={({ isActive,}) =>
				    isActive ? "has-text-link navbar-item" : "navbar-item"
				  }
				>
				<span className="icon"><HiFire /></span>
				  <span>Tendencias</span>
				</NavLink>
				<NavLink
					to="/latest"
						className={({ isActive,}) =>
							isActive ? "has-text-link navbar-item" : "navbar-item"
						}
					>
					<span className="icon"><FaClock /></span>
					<span>Recientes</span>
				</NavLink>
				<NavLink
					to="/plus"
						className={({ isActive,}) =>
							isActive ? "has-text-link navbar-item" : "navbar-item"
						}
					>
					<span>Furtube +</span>
				</NavLink>
		      <div className="is-align-self-center">
		      	<form method="GET" action="/search">
		      		<p class="control has-icons-left">
			      		<span class="icon is-small is-left">
					    	<FaSearch />
					    </span>
		      			<input type="search" name="q" className="input is-shadowless"  placeholder="Search anything..."/>
		      		</p>
		      	</form>
		      </div>
		    </div>
		    <div className="navbar-end">
		      <div className="navbar-item">
		        <div className="buttons">
		          <Link to="/register" className="button is-primary">
		            <strong>Sign up</strong>
		          </Link>
		          <Link to="/login" className="button is-light">
		            Log in
		          </Link>
		        </div>
		      </div>
		    </div>
		  </div>
		</nav>
	)
}

export default Header;