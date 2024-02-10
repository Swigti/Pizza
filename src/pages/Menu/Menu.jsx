import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import Search from "../../components/Search/Search";
import Card from "../../components/Card/Card";
import axios from "axios";
import { useGetProductsQuery } from "../../store/product";

const Menu = () => {
  // const [product, setProduct] = useState([]);
  // const getAllProduct = async () => {
  //   const res = await axios("http://localhost:3000/products");
  //   setProduct(res.data);
  //   // console.log(product);
  // };
  // useEffect(() => {
  //   getAllProduct();
  // }, []);
  const [category , setCategory] = useState('All')
  const {data=[], isLoading} = useGetProductsQuery({category})
  
  if (isLoading) {
    return <h2>loading...</h2>
 }
  return (
    <div className="menu">
      <div className="menu__header">
        <Title title="Menu" />
        <div>
            <h2>{category}</h2>
            <div>
               <button className={category == 'All' ? "btn":"nobtn"} onClick={()=>setCategory('All')}>All</button>
               <button className={category == 'pizza' ? "btn":"nobtn"} onClick={()=>setCategory('pizza')}>pizza</button>
               <button className={category == 'salad' ? "btn":"nobtn"} onClick={()=>setCategory('salad')}>salad</button>
               <button className={category == 'takos' ? "btn":"nobtn"} onClick={()=>setCategory('takos')}>takos</button>
            </div>
        </div>
        <Search />
      </div>
      <div className="menu__products">
        {data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            price={item.price}
            rating={item.rating}
            title={item.title}
            description={item.ingridents}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
