import { createContext,  useState } from "react";

const ProductsContext = createContext()

export const Provider = ({ children }) => {

    const [selectedProduct, setSelectedProduct] = useState(null);

    const fetchProduct = (productId) => {
        fetch(`http://localhost:2000/products/${productId}`, {
            method: 'GET',
        }
        )
            .then(res => res.json())
            .then(data => setSelectedProduct(data.data))
    }

    const allProducts = {
        fetchProduct,
        selectedProduct,
        setSelectedProduct
    }

    return (
        <ProductsContext.Provider value={allProducts}>
            {children}
        </ProductsContext.Provider>

    )
}
export default ProductsContext