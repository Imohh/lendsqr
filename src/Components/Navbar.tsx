import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.scss'
import logo from '../images/logo.svg'
import search from '../images/dashboard/search.png'
import notification from '../images/dashboard/notification.png'
import image from '../images/dashboard/image.png'


interface SearchProps {
  onSearch: (term: string) => void;
  showSearch: boolean;
}



const Navbar: React.FC<SearchProps> = ({ onSearch, showSearch }) => {

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onSearch(event.target.value);
	};

	const [show, setShow] = useState(false)
	const handleToggleVisibility = () => {
    setShow(!show);
  };

	return (
		<>



		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		  <a className="navbar-brand" href="#"><img src={logo} /></a>
		  <button onClick={handleToggleVisibility}
		  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>



		  <div className="navbar-collapse">
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
						<li className="nav-item docs"><a href="">docs</a></li>
					    <li className="nav-item notification"><img src={notification} /></li>

						<li className="dropdown nav-item nav-name">
							<a className=" dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    <span><img src={image} /></span> ayodeji
							</a>

							<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
								<li><a className="dropdown-item" href="#">Action</a></li>
								<li><a className="dropdown-item" href="#">Another action</a></li>
							    <li><a className="dropdown-item" href="#">Something else here</a></li>
							</ul>
						</li>
			  	</ul>
		    </div>
		  </div>
		</nav>

		{show && <nav>
			<h2>this is the mobile nav</h2>
		</nav>}







		</>
	)
}

export default Navbar