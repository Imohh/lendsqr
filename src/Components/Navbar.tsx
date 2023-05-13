import React from 'react'
import '../styles/navbar.scss'
import logo from '../images/logo.svg'
import search from '../images/dashboard/search.png'
import notification from '../images/dashboard/notification.png'
import image from '../images/dashboard/image.png'

const Navbar = () => {
	return (
		<>



			<nav className="navbar navbar-default no-margin">

		      <div className="navbar-header fixed-brand">
		         <a className="navbar-brand" href="#"><img src={logo} /></a>
		      </div>
		      
		      <div className="wrap">
				<div className="search">
				    <input type="text" className="searchTerm" placeholder="Search for anything" />
				    <button type="submit" className="searchButton">
				      <img src={search} />
				    </button>
				</div>
			  </div>
		      <div className="nav-right">
			      <ul>
			      	<li><a href="">docs</a></li>
			      	<li><img src={notification} /></li>
			      	<li><span><img src={image} /></span> ayodeji</li>
			      </ul>
		      </div>
		   	</nav>







		</>
	)
}

export default Navbar