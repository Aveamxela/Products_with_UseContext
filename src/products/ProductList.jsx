import { useContext, useEffect, useState } from "react";
import Product from "./Product";
import ProductsContext from '../context/ProductsContext';


export default function ProductList() {

    const { fetchProduct, selectedProduct } = useContext(ProductsContext)
    const [products, setProducts] = useState([])

    const handleClick = (productId) => {
        fetchProduct(productId)
    }
    useEffect (() => {
        fetch("http://localhost:2000/products", {
        method: 'GET',
    }
    )
        .then(res => res.json())
        .then(data => setProducts(data.data))
    }, [])

    return (
        <>
            {selectedProduct === null ||selectedProduct.length === 0 ? (
                <>
                    <h1>ProductList</h1>

                    {products.map((product) => (
                        <div key={product.id} onClick={() => handleClick(product.id)}>
                            <h2>{product.name}</h2>
                            <p>{product.price}</p>
                            <img src={product.image} alt="" />
                        </div>
                    ))}
                </>
            )
                : (
                    <Product />
                )}


        </>
    )
}