import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link} from 'react-router-dom';
import '../styles/dashboard.scss'
import logo from '../images/logo.svg'
import users from '../images/dashboard/glyph1.png'
import activeUsers from '../images/dashboard/glyph2.png'
import loanUsers from '../images/dashboard/glyph3.png'
import savingsUsers from '../images/dashboard/glyph4.png'
import viewDetail from '../images/dashboard/view-detail.png'
import activateUser from '../images/dashboard/activate-user.png'
import blacklistUser from '../images/dashboard/blacklist-user.png'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Detail from './Detail'

export interface User{
	id: number,
  email: string,
  phoneNumber: number,
  orgName: string,
  userName: string,
  createdAt: string,
  lastActiveDate: string
}

const Dashboard = () => {
	const url = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"

	const [data, setData] = useState<User[]>([])
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState({})
	const [show, setShow] = useState<boolean>(false)
	const [searchTerm, setSearchTerm] = useState<string>('');
  	const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);
  	const [currentPage, setCurrentPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>(0);
	const itemsPerPage = 9; // Number of items to display per page

	const [orgNameSearchTerm, setOrgNameSearchTerm] = useState<string>('');
	const [emailSearchTerm, setEmailSearchTerm] = useState<string>('');
	const [userNameSearchTerm, setUserNameSearchTerm] = useState<string>('');
	const [filteredData, setFilteredData] = useState<User[]>([]);
  


  useEffect(() => {
  	setTimeout(() => {
      fetchData();
    }, 1000);

  }, []);


  const fetchData = async () => {
  try {
    const response = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
    const jsonData = await response.json();
    const totalItems = jsonData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    setData(jsonData);
    setTotalPages(totalPages);
    setLoading(false);
  } catch (error) {
    console.log('Error fetching data:', error);
    setLoading(false);
  }
};


  // format time to readable format
  const formatTime = (time: string) => {
    const date = new Date(time);
    return date.toLocaleString();
  };

  const getStatus = (date: string): string => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const tenYearsAgo = year - 10;
  const year2000 = 2000;
  const year2022 = 2022;

  const parsedDate = new Date(date);

  if (parsedDate.getFullYear() < year2000) {
    return 'blacklisted';
  } else if (parsedDate.getFullYear() >= year2022) {
    return 'active';
  } else if (parsedDate.getFullYear() <= tenYearsAgo) {
    return 'pending';
  }

  return 'unknown';
};
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredUsers = data.filter((user) =>
    user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.orgName.toLowerCase().includes(searchTerm.toLowerCase())
  );

	const shouldShowSearch = true;


	  const getStatusColor = (status: string): string => {
	    if (status === 'Active') {
	      return 'red';
	    } else if (status === 'inactive') {
	      return 'blue';
	    } else if (status === 'pending') {
	      return 'green';
	    }
	    return 'black'; // Default color if status doesn't match any condition
	  };


	  // hide amd show side bar
	  const toggleSidebar = () => {
	    setSidebarVisible(!sidebarVisible);
	  };



	  // pagination
	  const paginateData = (data: User[]): User[] => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return data.slice(startIndex, endIndex);
	  };

	  const handlePreviousPage = () => {
		setCurrentPage((prevPage) => prevPage - 1);
	  };

	  const handleNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	  };


	  const generatePageNumbers = (currentPage: number, totalPages: number): number[] => {
	  const visiblePageCount = 3; // Number of page numbers to show on each side of the current page
	  const pageNumbers: number[] = [];

	  // Add page numbers before the current page
	  for (let i = currentPage - visiblePageCount; i < currentPage; i++) {
	    if (i > 0) {
	      pageNumbers.push(i);
	    }
	  }

	  // Add the current page
	  pageNumbers.push(currentPage);

	  // Add page numbers after the current page
	  for (let i = currentPage + 1; i <= currentPage + visiblePageCount; i++) {
	    if (i <= totalPages) {
	      pageNumbers.push(i);
	    }
	  }

	  return pageNumbers;
	};

	const pageNumbers = generatePageNumbers(currentPage, totalPages);


	// filter
	const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
	    event.preventDefault();

	    const filteredUserss = data.filter((user) =>
	      user.userName.toLowerCase().includes(userNameSearchTerm.toLowerCase()) ||
	      user.email.toLowerCase().includes(emailSearchTerm.toLowerCase()) ||
	      user.orgName.toLowerCase().includes(orgNameSearchTerm.toLowerCase())
	    );

	    setFilteredData(filteredUserss);
	};

	// Use the filteredData state to render the filtered users
	const filteredUserss = filteredData.length > 0 ? filteredData : data;



	return (
		<HelmetProvider>

			<Helmet>
		        <title>Lendsqr | Dashboard</title>
		        <meta name="description" content="Empowering the smartest lenders" />
			    <meta property="og:title" content="Lendsqr Dashboard" />
	    	</Helmet>

	    	
			<Navbar onSearch={handleSearch}
				showSearch={shouldShowSearch}
			/>
		   	<div id="wrapper">
		      {sidebarVisible && <Sidebar/>}



		      <div id="page-content-wrapper">
		         <div className="container xyz">
		            <div className="row">
		               <div className="col-lg-12">
		               		<p className="users-text">users</p>
		               </div>



		               {/*<form onSubmit={handleSearchSubmit}>
				        <input
				          type="text"
				          value={orgNameSearchTerm}
				          onChange={(e) => setOrgNameSearchTerm(e.target.value)}
				          placeholder="Search by orgName"
				        />
				        <input
				          type="text"
				          value={emailSearchTerm}
				          onChange={(e) => setEmailSearchTerm(e.target.value)}
				          placeholder="Search by email"
				        />
				        <input
				          type="text"
				          value={userNameSearchTerm}
				          onChange={(e) => setUserNameSearchTerm(e.target.value)}
				          placeholder="Search by userName"
				        />
				        <button type="submit">Search</button>
				      </form>*/}


		               <div className="col-lg-3 col-md-6 col-sm-6">
		               		<div className="card">
		               			<img src={users} />
		               			<p className="first-text">users</p>
		               			<p className="total">2,453</p>
		               		</div>
		               </div>
		               <div className="col-lg-3 col-md-6 col-sm-6">
		               		<div className="card">
		               			<img src={activeUsers} />
		               			<p className="first-text">active users</p>
		               			<p className="total">2,453</p>
		               		</div>
		               </div>
		               <div className="col-lg-3 col-md-6 col-sm-6">
		               		<div className="card">
		               			<img src={loanUsers} />
		               			<p className="first-text">users with loans</p>
		               			<p className="total">2,453</p>
		               		</div>
		               </div>
		               <div className="col-lg-3 col-md-6 col-sm-6">
		               		<div className="card">
		               			<img src={savingsUsers} />
		               			<p className="first-text">users with savings</p>
		               			<p className="total">2,453</p>
		               		</div>
		               </div>
		            </div>
		         </div>
		      </div>


		      	<section className="table-section">
				    {loading ? (
				       	<div>Loading...</div> // Render the loader when loading is true
				   	) : (
				    <table className="table">
					  <thead>
					      <th scope="col">organization</th>
					      <th scope="col">username</th>
					      <th scope="col">email</th>
					      <th scope="col">phone number</th>
					      <th scope="col">date joined</th>
					      <th scope="col">status</th>
					      <th></th>
					  </thead>

					  {paginateData(filteredUsers).map((item, index) => {
	        			return (
						  <tbody key={item.id}>
						    <tr >
						      <td>{item.orgName}</td>
						      <td>{item.userName}</td>
						      <td>{item.email}</td>
						      <td>{item.phoneNumber}</td>
						      <td>{formatTime(item.createdAt)}</td>
						      <td><span className="badge badge-pill" style={{ color: getStatusColor(item.lastActiveDate) }} >{getStatus(item.lastActiveDate)}</span></td>
						      <td>

						      	<div id="container">
								    <div id="menu-wrap">
								      <input type="checkbox" className="toggler" />
								      <div className="dots">
								        <div></div>
								      </div>
								      <div className="menu">
								        <div>
								          <ul>
								            <li>
									            <Link data-item-id={item.id} to={`/dashboard/users/${item.id}`} key={item.id}>
								            		<a href="#" className="link">
										            	<img src={viewDetail} />view details
										            </a>
									            </Link>
										    </li>
								            <li><a href="#" className="link"><img src={blacklistUser} />blacklist user</a></li>
								            <li><a href="#" className="link"><img src={activateUser} />activate user</a></li>
								          </ul>
								        </div>
								      </div>
								    </div>
								</div>

						      </td>				      
						  	</tr>
					  	  </tbody>
					  )
			          })}
					</table>
					)}	
			  	  </section>


			  	  {/*<div className="pagination">
			      	<button
			        	onClick={handlePreviousPage}
			        	disabled={currentPage === 1}
				    >
			        	Previous
			      	</button>
			      	<span>{currentPage}</span>
			      	<button
			        	onClick={handleNextPage}
			        	disabled={currentPage === totalPages}
			      	>
			        	Next
			      	</button>
			      </div>*/}

			      <div className="pagination">
				    <button
				        onClick={handlePreviousPage}
				        disabled={currentPage === 1}
				    >
			        	Previous
			      </button>
			      {pageNumbers.map((pageNumber) => (
			        <button
			          key={pageNumber}
			          onClick={() => setCurrentPage(pageNumber)}
			          className={pageNumber === currentPage ? "active" : ""}
			        >
			          {pageNumber}
			        </button>
			      ))}

			      <button
			        onClick={handleNextPage}
			        disabled={currentPage === totalPages}
			      >
			        Next
			      </button>
			    </div>



			    {/*filter*/}

			    {/*{filteredUserss.map((filtered) => {
			    	return (
			    		<>
			    			<p>{filtered.orgName}</p>
				    		<p>{filtered.userName}</p>
				    		<p>{filtered.email}</p>
			    		</>
			    	)
			    })}*/}





		      {/*<!-- /#page-content-wrapper -->*/}
		   	</div>

		</HelmetProvider>
	)
}

export default Dashboard