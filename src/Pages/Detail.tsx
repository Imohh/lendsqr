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



  useEffect(() => {
    // Fetch product data from the API based on the ID
    fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }



	return (
		<>

			<Navbar />
		   	<div id="wrapper">
		      <Sidebar />

				<h2>Detail Page</h2>

				<div>
				    <h1>{product.email}</h1>
				    <p>{product.userName}</p>
			    </div>
			</div>

		</>
	)
}

export default Detail