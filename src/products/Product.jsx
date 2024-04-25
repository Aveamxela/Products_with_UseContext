import { useContext, useState } from "react";
import ProductEdit from "./ProductEdit";
import ProductsContext from "../context/ProductsContext";

export default function Product () {
    const {selectedProduct} = useContext(ProductsContext)
    const { id, name, detail, hero, price, image } = selectedProduct;

    const [editButton, setEditButton]= useState(false)

    const handleEditButton = () => {
        setEditButton(true)
        console.log(editButton);
    }
  
    const handleDeleteButton = (productId) => {
            fetch(`http://localhost:2000/products/${productId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => res.json())
                .then((data) => {
                    console.log(data);
                    window.location.href = "/"
                })
        }
    

    return(
        <>
        {editButton === false ?(
            <>
        <div>
            <h2>{name}</h2>
            <p>{detail}</p>
            <p>{hero}</p>
            <p>{price}</p>
            <img src={image} alt="" />
        </div>
        <button onClick={() =>handleDeleteButton(id)}>Supprimer le produit</button>
        <button onClick={handleEditButton}>Editer le produit</button>
        </>
        ) : 
        (
        <ProductEdit/> )
}
        </>
    )
}