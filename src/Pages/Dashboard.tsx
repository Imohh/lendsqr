import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link} from 'react-router-dom';
import '../styles/dashboard.scss'
import logo from '../images/logo.svg'
import users from '../images/dashboard/glyph1.png'
import activeUsers from '../images/dashboard/glyph2.png'
import loanUsers from '../images/dashboard/glyph3.png'
import savingsUsers from '../images/dashboard/glyph4.png'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Detail from './Detail'

export interface User{
	id: number,
  email: string,
  phoneNumber: number,
  orgName: string,
  userName: string,
  createdAt: string
}

const Dashboard = () => {
	const url = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"

	const [data, setData] = useState<User[]>([])
	const [error, setError] = useState({})
	const [show, setShow] = useState<boolean>(false)

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

  const formatTime = (time: string) => {
    const date = new Date(time);
    return date.toLocaleString(); // Adjust the format as per your requirements
  };

  // const hideSidebar = () => {
  // 	setShow(true)
  // }



	return (
		<>
			<Navbar />
		   	<div id="wrapper">
		      <Sidebar />

		      
		      <div id="page-content-wrapper">
		         <div className="container-fluid xyz">
		            <div className="row">
		               <div className="col-lg-12">
		               		<p>users</p>
		               </div>

		               <div className="col-lg-3">
		               		<div className="card">
		               			<img src={users} />
		               			<p className="first-text">users</p>
		               			<p className="total">2,453</p>
		               		</div>
		               </div>
		               <div className="col-lg-3">
		               		<div className="card">
		               			<img src={activeUsers} />
		               			<p className="first-text">active users</p>
		               			<p className="total">2,453</p>
		               		</div>
		               </div>
		               <div className="col-lg-3">
		               		<div className="card">
		               			<img src={loanUsers} />
		               			<p className="first-text">users with loans</p>
		               			<p className="total">2,453</p>
		               		</div>
		               </div>
		               <div className="col-lg-3">
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

				  {data.map((item, index) => {
        			return (
					  <tbody>
					    <tr >
					      <td>{item.orgName}</td>
					      <td>{item.userName}</td>
					  	  <Link data-item-id={item.id} to={`/products/${item.id}`} key={item.id}>
					      	<td>{item.email}</td>
					      </Link>
					      <td>{item.phoneNumber}</td>
					      <td>{formatTime(item.createdAt)}</td>
					      <td>blacklisted</td>
					      <td><div className="test"></div></td>				      
					  	</tr>
				  	  </tbody>
				  )
		          })}
				</table>
			  </section>





		      {/*<!-- /#page-content-wrapper -->*/}
		   	</div>

		</>
	)
}

export default Dashboard