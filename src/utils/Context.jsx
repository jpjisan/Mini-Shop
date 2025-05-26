import React, { createContext, useEffect, useState } from 'react'
import axios from './axios';

export const ProductContext = createContext();

function Context(props) {
    const [products, setProducts] = useState( JSON.parse(localStorage.getItem("products") ||null));
    console.log(products);
    
    const getProducts = async () => {
        try {
            const { data } = await axios("/products");
            localStorage.setItem('products', JSON.stringify(data));
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
    );
}

export default Context;