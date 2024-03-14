import React from 'react'
import { Link, useParams, Outlet } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

const Product = () => {
    const { id } = useParams();
    const url = "http://localhost:3000/products/" + id;    
    const {data: product, loading, error} = useFetch(url);

  return (
    <div>
      <p>Product id: {id}</p>
      {error && <p>An error occurred</p>}
      {loading && <p>Loading</p>}
      {product && (
        <div>
            <h3>{product.name}</h3>
            <h5>$ {product.price}</h5>
            <Link to={`/products/${product.id}/info`}>More info</Link>
        </div>
      )}
      <Outlet />
    </div>
  )
}

export default Product
