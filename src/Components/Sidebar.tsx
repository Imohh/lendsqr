import React from 'react'
import '../styles/sidebar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import switchOrganizations from '../images/sidebar/switch-organization.png'
import users from '../images/sidebar/users.png'
import guarantors from '../images/sidebar/guarantors.png'
import loans from '../images/sidebar/loans.png'
import decisionModels from '../images/sidebar/decision-models.png'
import savings from '../images/sidebar/savings.png'
import loanRequests from '../images/sidebar/loan-products.png'
import whitelist from '../images/sidebar/whitelist.png'
import karma from '../images/sidebar/karma.png'
import organization from '../images/sidebar/organization.png'
import savingsProducts from '../images/sidebar/savings-product.png'
import feesAndCharges from '../images/sidebar/fees-and-charges.png'
import transactions from '../images/sidebar/transactions.png'
import services from '../images/sidebar/services.png'
import serviceAccount from '../images/sidebar/service-account.png'
import settlements from '../images/sidebar/settlements.png'
import reports from '../images/sidebar/reports.png'
import preferences from '../images/sidebar/preferences.png'
import feesAndPricing from '../images/sidebar/fees-and-pricing.png'
import auditLogs from '../images/sidebar/audit-logs.png'
import logout from '../images/sidebar/logout.png'



const Sidebar = () => {
	return (
		<>


		      {/*<!-- Sidebar -->*/}
		      	<div id="sidebar-wrapper">
		         <ul className="sidebar-nav nav-pills nav-stacked" id="menu">
		         	<li className="switch">
		         		<div className="dropdown">
						  <a className=" dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    <span className="pull-left"><img src={switchOrganizations} /></span>
						    switch organizations
						  </a>

						  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
						    <a className="dropdown-item" href="#">Action</a>
						    <a className="dropdown-item" href="#">Another action</a>
						    <a className="dropdown-item" href="#">Something else here</a>
						  </div>
						</div>
					</li>

			        <label>customers</label>
		            <li className="active">
		               <a href="#"><span className="pull-left"><img src={users} /></span> users</a>
		            </li>
		            <li>
		               <a href="#"><span className="pull-left"><img src={guarantors} /></span>guarantors</a>
		            </li>
		            <li>
		               <a href="#"><span className="pull-left"><img src={loans} /></span>loans</a>
		            </li>
		            <li>
		               <a href="#"> <span className="pull-left"><img src={decisionModels} /></span>decision models</a>
		            </li>
		            <li>
		               <a href="#"><span className="pull-left"><img src={savings} /></span>savings</a>
		            </li>
		            <li>
		               <a href="#"><span className="pull-left"><img src={loanRequests} /></span>loan requests</a>
		            </li>
		            <li>
		               <a href="#"><span className="pull-left"><img src={whitelist} /></span>whitelist</a>
		            </li>
		            <li>
		               <a href="#"><span className="pull-left"><img src={karma} /></span>karma</a>
		            </li>

			        <label>businesses</label>
		            <li>
		               <a href="#"><span className="pull-left"><img src={organization} /></span> organization</a>
		            </li>
		            <li>
		               <a href="#"><span className="pull-left"><img src={loanRequests} /></span>loan products</a>
		            </li>
		            <li>
		               <a href="#"><span className="pull-left"><img src={savingsProducts} /></span>savings product</a>
		            </li>
		            <li>
		               <a href="#"> <span className="pull-left"><img src={feesAndCharges} /></span>fees and charges</a>
		            </li>
		            <li>
		               <a href="#"><span className="pull-left"><img src={transactions} /></span>transactions</a>
		            </li>
		            <li>
		               <a href="#"><span className="pull-left"><img src={services} /></span>services</a>
		            </li>
		            <li>
		               <a href="#"><span className="pull-left"><img src={serviceAccount} /></span>service account</a>
		            </li>
		            <li>
		               <a href="#"><span className="pull-left"><img src={settlements} /></span>settlements</a>
		            </li>
		            <li>
		               <a href="#"><span className="pull-left"><img src={reports} /></span>reports</a>
		            </li>

			        <label>settings</label>
		            <li>
		               <a href="#"><span className="pull-left"><img src={preferences} /></span>preferences</a>
		            </li>
		            <li>
		               <a href="#"><span className="pull-left"><img src={feesAndPricing} /></span>fees and pricing</a>
		            </li>
		            <li>
		               <a href="#"><span className="pull-left"><img src={auditLogs} /></span>audit logs</a>
		            </li>

		         	<li className="logout">
		         		<a href="#"><span className="pull-left"><img src={logout} /></span>logout</a>
		         	</li>

		         	<li className="version">
		         		<a href="/login"><span className="pull-left"></span>v1.2.0</a>
		         	</li>

		        </ul>


		      </div>

		      









		</>
	)
}

export default Sidebar