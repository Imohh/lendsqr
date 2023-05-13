import React from 'react'
import '../styles/navbar.scss'
import logo from '../images/logo.svg'
import search from '../images/dashboard/search.png'
import notification from '../images/dashboard/notification.png'
import image from '../images/dashboard/image.png'


interface SearchProps {
  onSearch: (term: string) => void;
}



const Navbar: React.FC<SearchProps> = ({ onSearch }) => {

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onSearch(event.target.value);
	};

	return (
		<>



			{/*<nav className="navbar navbar-default no-margin">

		      <div className="navbar-header fixed-brand">
		         <a className="navbar-brand" href="#"><img src={logo} /></a>
		      </div>
		      
		      <div className="wrap">
				<div className="search">
				    <input 
				    	type="text" 
				    	className="searchTerm" 
				    	placeholder="Search for anything"
				    	onChange={handleChange}
				    />
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
		   	</nav>*/}



		<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><img src={logo} /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>



  <div className="collapse navbar-collapse" id="navbarSupportedContent">

		

    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <div className="wrap">
			<div className="search">
			    <input 
				    type="text" 
				   	className="searchTerm" 
				   	placeholder="Search for anything"
				   	onChange={handleChange}
				/>
				<button type="submit" className="searchButton">
			    	<img src={search} />
			    </button>
			</div>
		</div>

      </li>
    </ul>
    <div className="nav-right form-inline my-2 my-lg-0">
      <ul className="navbar-nav mr-auto">
		<li className="nav-item"><a href="">docs</a></li>
	    <li className="nav-item"><img src={notification} /></li>
		<li className="nav-item"><span><img src={image} /></span> ayodeji</li>
	  </ul>
    </div>
  </div>
</nav>







		</>
	)
}

export default Navbar