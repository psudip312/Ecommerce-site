import React, { useEffect, useState } from 'react'
import Hero from '../components/Header/Hero/hero'
import Products from '../components/Header/Products/products'
import { FeatureCard } from '../components/FeatureCard/FeatureCard'
import StatCard from '../components/Header/Products/StatCard/statCard'
const Home = () => {
  const [products,setProducts]=useState([]);
  useEffect(()=>{
   const fetchProducts=async()=>{
    const response=await fetch('https://fakestoreapi.com/products')
    const data=await response.json()
    setProducts(data);
   }
   fetchProducts()
  },[])
  console.log("aako products",products)

  return (
    <>
    <Hero/>
    <h2 className="text-5xl text-center mt-20 font-bold">Products</h2>
    {products.length > 0 ? (
      <Products products={products} />
    ) : (
      <div>loading</div>
    )}
    <Products/>
    <h2 className="text-5xl text-center mt-20 font-bold">Features</h2>
    <FeatureCard/>
    <StatCard/>
    </>
   
  )
}

export default Home