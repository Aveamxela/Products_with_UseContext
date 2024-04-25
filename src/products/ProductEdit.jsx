import { useContext } from "react";
import { useForm } from "react-hook-form"
import ProductsContext from "../context/ProductsContext";

export default function ProductEdit() {
    const { selectedProduct } = useContext(ProductsContext)
    const { id, name, detail, hero, price, image } = selectedProduct;

    const { handleSubmit, register } = useForm()

    const updateProduct = (formData) => {
        fetch(`http://localhost:2000/products/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then((response) => {
                console.log(response)
                window.location.href = "/"
            }
            )
    }

    return (
        <>
            <h1>Edit product</h1>
            <form onSubmit={handleSubmit(updateProduct)} style={{ display: "flex", flexDirection: "column" }}>
                <label>Name:</label>
                <input type="text" {...register("name")} defaultValue={name} />
                <label>Detail:</label>
                <input type="text" {...register("detail")} defaultValue={detail} />
                <label>Hero:</label>
                <input type="text" {...register("hero")} defaultValue={hero} />
                <label>Price:</label>
                <input type="text" {...register("price")} defaultValue={price} />
                <label>Image:</label>
                <input type="text" {...register("image")} defaultValue={image} />
                <input type="submit" />
            </form>
        </>
    )
}