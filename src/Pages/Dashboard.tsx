import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
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
	const [error, setError] = useState({})
	const [show, setShow] = useState<boolean>(false)
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [currentPage, setCurrentPage] = useState<number>(1);
  	const [totalPages, setTotalPages] = useState<number>(0);

  const itemsPerPage = 10; // Number of items to display per page

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  // format time to readable format
  const formatTime = (time: string) => {
    const date = new Date(time);
    return date.toLocaleString();
  };

  const getStatus = (lastActiveDate: string): string => {
  const currentDate = new Date();
  const providedDate = new Date(lastActiveDate);

  // Calculate the difference in years
  const yearDiff = currentDate.getFullYear() - providedDate.getFullYear();

	  if (yearDiff > 10) {
	    return 'Pending';
	  } else if (providedDate.getFullYear() > 2023) {
	    return 'Active';
	  } else {
	    return 'Unknown';
	  }
  };

  // const hideSidebar = () => {
  // 	setShow(true)
  // }


  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredUsers = data.filter((user) =>
    user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.orgName.toLowerCase().includes(searchTerm.toLowerCase())
  );

 // const handlePageChange = (page: number) => {
 //    setCurrentPage(page);
 //  };

 //  const renderPagination = () => {
 //    const pages = Array.from(Array(totalPages).keys()); // Generate an array of page numbers

 //    return (
 //      <div>
 //        {pages.map((page) => (
 //          <button key={page} onClick={() => handlePageChange(page + 1)}>
 //            {page + 1}
 //          </button>
 //        ))}
 //      </div>
 //    );
 //  };




	return (
		<>
			<Navbar onSearch={handleSearch}/>
		   	<div id="wrapper">
		      <Sidebar />

		      {/*<input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />*/}



		      <div id="page-content-wrapper">
		         <div className="container xyz">
		            <div className="row">
		               <div className="col-lg-12">
		               		<p className="users-text">users</p>
		               </div>

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


		      <section className="table-section table-responsive">
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

				  {filteredUsers.map((item, index) => {
        			return (
					  <tbody key={item.id}>
					    <tr >
					      <td>{item.orgName}</td>
					      <td>{item.userName}</td>
					      <td>{item.email}</td>
					      <td>{item.phoneNumber}</td>
					      <td>{formatTime(item.createdAt)}</td>
					      <td><span className="badge badge-pill badge-primary">{getStatus(item.lastActiveDate)}</span></td>
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

				{/*{renderPagination()}*/}
			  </section>





		      {/*<!-- /#page-content-wrapper -->*/}
		   	</div>

		</>
	)
}

export default Dashboard