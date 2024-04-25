import { useForm } from "react-hook-form"
export default function AddProduct() {
    const { handleSubmit, register, formState: { errors } } = useForm()
    const addProduct = (data) => {
        fetch("http://localhost:2000/products/", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((data) => {console.log(data)
            window.location.href = "/"
        }
            )
    }
    return (
        <>
            <h1>Add product</h1>
            <form onSubmit={handleSubmit(addProduct)} style={{ display: "flex", flexDirection: "column" }}>
                <label>Name:</label>
                <input type="text" {...register("name", { required: true })}/>
                {errors.name?.type === "required" && (<span style={{color:"red"}}>This field is required</span>)}
                <label>Detail:</label>
            <input type="text"  {...register("detail", { required: true })}/>
                {errors.detail?.type === "required" && (<span style={{color:"red"}}>This field is required</span>)}
                <label>Hero:</label>
                <input type="text"  {...register("hero", { required: true })}/>
                {errors.hero?.type === "required" && (<span style={{color:"red"}}>This field is required</span>)}
                <label>Price:</label>
                <input type="number"  {...register("price",{ required: true })}/>
                {errors.price?.type === "required" && (<span style={{color:"red"}}>This field is required</span>)}
                <label>Image:</label>
                <input type="text"  {...register("image",{ required: true })}/>
                {errors.image?.type === "required" && (<span style={{color:"red"}}>This field is required</span>)}
                <input type="submit" />
            </form>
        </>
    )
}