import { useContext, useState } from 'react';
import ProductAdd from './products/AddProduct';
import ProductList from './products/ProductList';
import ProductsContext from './context/ProductsContext';

function App() {
  const {setSelectedProduct} = useContext(ProductsContext)

  const [addProduct, setAddProduct]= useState(false)
  const [showProductList, setShowProductList]= useState(false)

  const handleClickProductList = () => {
    setShowProductList(true);
    setAddProduct(false)
    setSelectedProduct(null)
  };

  const handleClickAddProduct = () => {
    setShowProductList(false);
    setAddProduct(true)
  };
  return (
    <>
    <button onClick={handleClickProductList}>Tous les produits</button>
    <button onClick={handleClickAddProduct}>Ajouter un produit</button>

    {showProductList ? <ProductList /> : null}
    {addProduct ? <ProductAdd /> : null}


    
    </>
  );
}

export default App;
