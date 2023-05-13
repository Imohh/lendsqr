import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import '../styles/detail.scss'

interface Product {
  id: string;
  email: string;
  userName: string;
  // Add more properties as needed
}


function Detail () {


  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loan, setLoan] = useState(false)
  const [bank, setBank] = useState(false)
  const [documents, setDocuments] = useState(false)




  useEffect(() => {
    // Fetch product data from the API based on the ID
    fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
      	setProduct(data)
      	localStorage.setItem('apiData', JSON.stringify(data));
      });
  }, [id]);


	const storedDataString = localStorage.getItem('apiData');
	if (storedDataString) {
	  const storedData = JSON.parse(storedDataString);
	} else {
	  console.log('No data found in local storage');
	}


  if (!product) {
    return <div>Loading...</div>;
  }



	return (
		<>

			{/*<Navbar showSearch={false} />*/}
		   	<div id="wrapper">
		      <Sidebar />

				<h2>Detail Page</h2>

				<button>general details</button>
				<button onClick={() => setDocuments(true)}>documents</button>
				<button onClick={() => setBank(true)}>bank details</button>
				<button onClick={() => setLoan(true)}>loans</button>


				{documents && 
					<section>
					    <h1>documents</h1>
					    <p>documents</p>
			    	</section>
				}

			    {bank && <section>
				    <h1>bank detail</h1>
				    <p>bank detail</p>
			    </section>}

			    {loan && <section>
				    <h1>loan</h1>
				    <p>loan</p>
			    </section>}

			    <section>
				    <h1>{product.email}</h1>
				    <p>{product.userName}</p>
			    </section>
			</div>

		</>
	)
}

export default Detail