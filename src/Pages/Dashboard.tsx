import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link} from 'react-router-dom';
import '../styles/dashboard.scss'
import users from '../images/dashboard/glyph1.png'
import activeUsers from '../images/dashboard/glyph2.png'
import loanUsers from '../images/dashboard/glyph3.png'
import savingsUsers from '../images/dashboard/glyph4.png'
import viewDetail from '../images/dashboard/view-detail.png'
import activateUser from '../images/dashboard/activate-user.png'
import blacklistUser from '../images/dashboard/blacklist-user.png'
import filter from '../images/dashboard/filter.png'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import DashboardFilterForm from '../Components/DashboardFilterForm'

export interface User{
	id: number,
  email: string,
  phoneNumber: number,
  orgName: string,
  userName: string,
  createdAt: string,
  lastActiveDate: string,
  // status: string
}

const Dashboard = () => {
	// const url = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"

	const [data, setData] = useState<User[]>([])
	const [loading, setLoading] = useState<boolean>(true);
	const [searchTerm, setSearchTerm] = useState<string>('');
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);
 	const [currentPage, setCurrentPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>(0);
	const itemsPerPage = 9; // Number of items to display per page
	const [filteredData, setFilteredData] = useState<User[]>([]);
	const [showFilterForm, setShowFilterForm] = useState<boolean>(false);
	const [userCount, setUserCount] = useState<number>(0);
	

	


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
    setUserCount(totalItems);
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

	  if (parsedDate.getFullYear() <= year2000) {
	    return 'blacklisted';
	  } else if (parsedDate.getFullYear() <= 2023) {
	    return 'active';
	  } else if (parsedDate.getFullYear() <= tenYearsAgo) {
	    return 'pending';
	  }

	  return 'unknown';
  };


  // status color
	  const getStatusColor = (status: string): string => {
	    if (status === 'active') {
	      return '#39CD62';
	    } else if (status === 'inactive') {
	      return '#545F7D';
	    } else if (status === 'blacklisted') {
	      return '#E4033B';
	    } else if (status === 'pending') {
	      return '#E9B200';
	    }
	    return 'red'; // Default color if status doesn't match any condition
	  };

	  const getStatusBackgroundColor = (status: string): string => {
	    if (status === 'active') {
	      return 'rgba(57, 205, 98, 0.06)';
	    } else if (status === 'inactive') {
	      return 'rgba(84, 95, 125, 0.06)';
	    } else if (status === 'blacklisted') {
	      return 'rgba(228, 3, 59, 0.1)';
	    } else if (status === 'pending') {
	      return 'rgba(233, 178, 0, 0.1)';
	    }
	    return 'black'; // Default color if status doesn't match any condition
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



	// filter form
	const handleFilter = (filteredData: User[]) => {
    	setFilteredData(filteredData);
  	};

  	//hide or show filter form
  	const toggleFilterForm = () => {
	    setShowFilterForm(!showFilterForm);
	};



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
		               <div className="col-lg-3 col-md-6 col-sm-6">
		               		<div className="card">
		               			<img src={users} alt="users"/>
		               			<p className="first-text">users</p>
		               			<p className="total">{userCount}</p>
		               		</div>
		               </div>
		               <div className="col-lg-3 col-md-6 col-sm-6">
		               		<div className="card">
		               			<img src={activeUsers} alt="active users" />
		               			<p className="first-text">active users</p>
		               			<p className="total">2,453</p>
		               		</div>
		               </div>
		               <div className="col-lg-3 col-md-6 col-sm-6">
		               		<div className="card">
		               			<img src={loanUsers} alt="loan users" />
		               			<p className="first-text">users with loans</p>
		               			<p className="total">2,453</p>
		               		</div>
		               </div>
		               <div className="col-lg-3 col-md-6 col-sm-6">
		               		<div className="card">
		               			<img src={savingsUsers} alt="savings users"/>
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
					      <th onClick={toggleFilterForm} scope="col">organization<img src={filter} alt="filter" /></th>
					      <th onClick={toggleFilterForm} scope="col">username<img src={filter} alt="filter" /></th>
					      <th onClick={toggleFilterForm} scope="col">email<img src={filter} alt="filter" /></th>
					      <th onClick={toggleFilterForm} scope="col">phone number<img src={filter} alt="filter" /></th>
					      <th onClick={toggleFilterForm} scope="col">date joined<img src={filter} alt="filter" /></th>
					      <th onClick={toggleFilterForm} scope="col">status<img src={filter} alt="filter" /></th>
					      <th></th>
					  </thead>

					  {paginateData(filteredUsers).map((item, index) => {
	        			return (
						  <tbody key={item.id}>
						    <tr >
						      <td>{item.orgName}</td>
						      <td>{item.userName}</td>
						      <td>{item.email}</td>
						      <td>{String(item.phoneNumber).replace(/[^\d()]/g, '')}</td>
						      <td>{formatTime(item.createdAt)}</td>
						      <td><span 
						      		style={{ 
						      			color: getStatusColor(getStatus(item.lastActiveDate)), 
						      			background: getStatusBackgroundColor(getStatus(item.lastActiveDate)),
						      			borderRadius: "100px", 
						      			padding: "5px 10px" }}>
						      				{getStatus(item.lastActiveDate)}
						      		</span>
						      </td>
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
										            	<img src={viewDetail} alt="view detail"/>view details
										            </a>
									            </Link>
										    </li>
								            <li><a href="#" className="link"><img src={blacklistUser} alt="blacklist user"/>blacklist user</a></li>
								            <li><a href="#" className="link"><img src={activateUser} alt="activate user" />activate user</a></li>
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
					{showFilterForm && <DashboardFilterForm data={data} onFilter={handleFilter} />}
			  	  </section>


			  	  

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

			    
			    <ul>
			        {filteredData.map((user) => (
			          <li key={user.id}>{user.orgName}</li>
			        ))}
			    </ul>

		      {/*<!-- /#page-content-wrapper -->*/}
		   	</div>

		</HelmetProvider>
	)
}

export default Dashboard