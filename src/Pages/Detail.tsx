import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import '../styles/detail.scss'
import backArrow from '../images/dashboard/arow-left.png'
import star from '../images/dashboard/star.png'
import stars from '../images/dashboard/star-border.png'

interface User {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
  };
  guarantor:{
		firstName: string;
		lastName: string;
		phoneNumber: string;
		gender: string;
		address:string;
	},
	accountBalance: string;
	accountNumber: string;
	socials:{
		facebook: string;
		instagram: string;
		twitter: string;
	},
	education:{
		level: string;
		employmentStatus: string;
		duration: string;
		sector: string;
		officeEmail: string;
		monthlyIncome:[];
		loanRepayment: string;
	},
	id:string;

  // Add more properties as needed
}


function Detail () {


  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loan, setLoan] = useState(false)
  const [bank, setBank] = useState(false)
  const [documents, setDocuments] = useState(false)




  useEffect(() => {
    // Fetch users data from the API based on the ID
    fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
      	setUser(data)
      	localStorage.setItem('apiData', JSON.stringify(data));
      });
  }, [id]);


	const storedDataString = localStorage.getItem('apiData');
	if (storedDataString) {
	  const storedData = JSON.parse(storedDataString);
	} else {
	  console.log('No data found in local storage');
	}


  if (!user) {
    return <div>Loading...</div>;
  }



	return (
		<>

			{/*<Navbar showSearch={false} />*/}
		   	<div id="wrapper" className="wrap-content">
		      <Sidebar />


		      <div className="top-section">
		      	<div className="container">
		      		<div className="row">
		      			<div className="col-lg-12 sub-top">
		      				<p className="back-text"><a href=""><img src={backArrow} />back to users</a></p>
		      			</div>

			      			<div className="col-lg-6 user-details">
					      			<ul className="detail-ul">
					      				<li><p className="user-details-text">user details</p></li>
					      			</ul>
			      			</div>

			      			<div className="col-lg-6">
				      			<ul className="detail-ul">
				      				<li className="detail-li"><button>blacklist user</button></li>
				      				<li className="detail-li"><button className="activate-button">activate user</button></li>
				      			</ul>
			      			</div>

		      		</div>
		      	</div>
		      </div>

		      <div className="detail-intro">
		      	<div className="container">
		      		<div className="row">
		      			<div className="col-lg-12">
		      				<div className="image">
		      					<img src={user.profile.avatar} />
		      					<div className="detail-name">
			      					<p className="detail-fullname">{user.profile.firstName} {user.profile.lastName}</p>
			      					<p className="detail-tag">{user.accountNumber}</p>
										</div>
		      				</div>
		      				<div className="user-tier">
		      					<p>user's tier</p>
		      					<div className="image-container">
				      				<img src={star} />
				      				<img src={stars} />
				      				<img src={stars} />
				      			</div>
		      				</div>

		      				<div className="account">
		      					account balance
		      				</div>
		      			</div>

		      			<div className="col-lg-12">
		      				<ul className="nav nav-pills mb-3 detail-nav" id="pills-tab" role="tablist">
									  <li className="nav-item">
									    <a 
									    	className="nav-link active" 
									    	id="pills-general-tab" data-toggle="pill" 
									    	href="#pills-general" role="tab" 
									    	aria-controls="pills-general" 
									    	aria-selected="true">
									    	general details
									    </a>
									  </li>
									  <li className="nav-item">
									    <a 
									    	className="nav-link" 
									    	id="pills-documents-tab" 
									    	data-toggle="pill" 
									    	href="#pills-documents" 
									    	role="tab" 
									    	aria-controls="pills-documents" 
									    	aria-selected="false">
									    	documents
									    </a>
									  </li>
									  <li className="nav-item">
									    <a 
									    	className="nav-link" 
									    	id="pills-bank-tab" 
									    	data-toggle="pill" 
									    	href="#pills-bank" 
									    	role="tab" 
									    	aria-controls="pills-bank" 
									    	aria-selected="false">
									    	bank details
									    </a>
									  </li>
									  <li className="nav-item">
									    <a 
									    	className="nav-link" 
									    	id="pills-loans-tab" 
									    	data-toggle="pill" 
									    	href="#pills-loans" 
									    	role="tab" 
									    	aria-controls="pills-loans" 
									    	aria-selected="false">
									    	loans
									    </a>
									  </li>
									  <li className="nav-item">
									    <a 
									    	className="nav-link" 
									    	id="pills-savings-tab" 
									    	data-toggle="pill" 
									    	href="#pills-savings" 
									    	role="tab" 
									    	aria-controls="pills-savings" 
									    	aria-selected="false">
									    	savings
									    </a>
									  </li>
									  <li className="nav-item">
									    <a 
									    	className="nav-link" 
									    	id="pills-app-tab" 
									    	data-toggle="pill" 
									    	href="#pills-app" 
									    	role="tab" 
									    	aria-controls="pills-app" 
									    	aria-selected="false">
									    	app and system
									    </a>
									  </li>
									</ul>
		      			</div>

		      		</div>
		      	</div>
		      </div>

				

			    



					<div className="tab-content" id="pills-tabContent">
					  <div className="tab-pane fade show active" id="pills-general" role="tabpanel" aria-labelledby="pills-general-tab">
					  	<section className="general-details">
					  		<div className="personal-info">
						  		<p className="heading-text">personal information</p>
					  			<ul className="nav nav-pills mb-3 general-nav" id="pills-tab" role="tablist">
					  				<li className="nav-item user-details">
					  					<p>full name</p>
					  					<p>{user.profile.firstName} {user.profile.lastName}</p>
					  				</li>
					  				<li className="nav-item user-details">
					  					<p>phone number</p>
					  					<p>{user.profile.phoneNumber}</p>
					  				</li>
					  				<li className="nav-item user-details">
					  					<p>email address</p>
					  					<p>{user.email}</p>
					  				</li>
					  				<li className="nav-item user-details">
						  				<p>bvn</p>
						  				<p>{user.profile.bvn}</p>
						  			</li>
					  				<li className="nav-item user-details">
					  					<p>gender</p>
					  					<p>{user.profile.gender}</p>
					  				</li>
					  			</ul>
									{/*<p>{user.profile.maritalStatus}</p>*/}
									{/*<p>{user.children}</p>
									<p>{user.apartment}</p>*/}
								</div>
					    </section>
					    <section className="general-details">
					  		<div className="personal-info">
						  		<p className="heading-text">education and employment</p>
					  			<ul className="nav nav-pills mb-3 general-nav" id="pills-tab" role="tablist">
					  				<li className="nav-item user-details">
					  					<p>level of education</p>
					  					<p>{user.education.level} {user.profile.lastName}</p>
					  				</li>
					  				<li className="nav-item user-details">
					  					<p>employment status</p>
					  					<p>{user.education.employmentStatus}</p>
					  				</li>
					  				<li className="nav-item user-details">
					  					<p>sector of employment</p>
					  					<p>{user.education.sector}</p>
					  				</li>
					  				<li className="nav-item user-details">
						  				<p>duration of employment</p>
						  				<p>{user.education.duration}</p>
						  			</li>
					  				<li className="nav-item user-details">
					  					<p>office email</p>
					  					<p>{user.education.officeEmail}</p>
					  				</li>
					  				<li className="nav-item user-details">
					  					<p>monthly income</p>
					  					<p>{user.education.monthlyIncome}</p>
					  				</li>
					  				<li className="nav-item user-details">
					  					<p>loan repayment</p>
					  					<p>{user.education.loanRepayment}</p>
					  				</li>
					  			</ul>
								</div>
					    </section>
					    <section className="general-details">
					  		<div className="personal-info">
						  		<p className="heading-text">socials</p>
					  			<ul className="nav nav-pills mb-3 general-nav" id="pills-tab" role="tablist">
					  				<li className="nav-item user-details">
					  					<p>twitter</p>
					  					<p>{user.socials.twitter}</p>
					  				</li>
					  				<li className="nav-item user-details">
					  					<p>facebook</p>
					  					<p>{user.socials.facebook}</p>
					  				</li>
					  				<li className="nav-item user-details">
					  					<p>instagram</p>
					  					<p>{user.socials.instagram}</p>
					  				</li>
					  			</ul>
								</div>
					    </section>
					    <section className="general-details">
					  		<div className="personal-info">
						  		<p className="heading-text">guarantor</p>
					  			<ul className="nav nav-pills mb-3 general-nav" id="pills-tab" role="tablist">
					  				<li className="nav-item user-details">
					  					<p>full name</p>
					  					<p>{user.guarantor.firstName} {user.guarantor.lastName}</p>
					  				</li>
					  				<li className="nav-item user-details">
					  					<p>phone number</p>
					  					<p>{user.guarantor.phoneNumber}</p>
					  				</li>
					  				<li className="nav-item user-details">
					  					<p>email address</p>
					  					<p>{user.guarantor.gender}</p>
					  				</li>
					  				<li className="nav-item user-details">
					  					<p>relationship</p>
					  					<p>{user.guarantor.address}</p>
					  				</li>
					  			</ul>
								</div>
					    </section>
					  </div>
					  <div className="tab-pane fade" id="pills-documents" role="tabpanel" aria-labelledby="pills-documents-tab">
					  	<section>
								<h1>second section</h1>
								<p>{user.userName}</p>
					    </section>
					  </div>
					  <div className="tab-pane fade" id="pills-bank" role="tabpanel" aria-labelledby="pills-bank-tab">
					  	<section>
								<h1>third section</h1>
								<p>{user.userName}</p>
					    </section>
					  </div>
					  <div className="tab-pane fade" id="loans-bank" role="tabpanel" aria-labelledby="pills-loans-tab">
					  	<section>
								<h1>third section</h1>
								<p>{user.userName}</p>
					    </section>
					  </div>
					  <div className="tab-pane fade" id="pills-savings" role="tabpanel" aria-labelledby="pills-savings-tab">
					  	<section>
								<h1>third section</h1>
								<p>{user.userName}</p>
					    </section>
					  </div>
					  <div className="tab-pane fade" id="pills-app" role="tabpanel" aria-labelledby="pills-app-tab">
					  	<section>
								<h1>app and savings</h1>
								<p>{user.userName}</p>
					    </section>
					  </div>
					</div>


			</div>

		</>
	)
}

export default Detail