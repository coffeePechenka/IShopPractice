import React, { useEffect } from 'react'
import './SingleProduct.css'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../features/api/apiSlice'
import { ROUTES } from '../../utils/routes'
import Product from '../Products/Product/Product'

export default function SingleProduct() {

    const { id } = useParams()
    const navigate = useNavigate()

    const { data, isLoading, isFetching, isSuccess, isError, error } = useGetProductQuery({ id })


    useEffect(() => {
        if(!isFetching && !isLoading && !isSuccess){
          console.error("Failed to fetch product hi.")
          navigate(ROUTES.ERROR)
        }
    }, [isLoading, isFetching, isSuccess, navigate])    

  return (
    // !data ? (
    //   <section className='preloader'>Loading...</section>
    // ) : (
      <div className='singleProduct'>
        <Product 
        title={'Bouncing sneaker Hermès'} 
        price={599} 
        description={"Sneaker in air mesh and suede goatskin. Light sole with contrasting design for a versatile and modern look."}/>
      </div>
    )

    
  // )
}
