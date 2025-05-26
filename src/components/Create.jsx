import React, { useContext, useState } from 'react'
import { nanoid } from "nanoid";
import { ProductContext } from '../utils/Context';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [products, setProducts] = useContext(ProductContext);
    const [title, setTitle] = useState('')
    const [imgLink, setImgLink] = useState('')
    const [category, setCategory] = useState('')
    const [rate, setRate] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: nanoid(),
            title,
            image: imgLink,
            category,
            rating: { rate: parseFloat(rate) },
            price: parseFloat(price),
            description
        }
        console.log(newProduct);
        

        setProducts([...products, newProduct]);
        localStorage.setItem('products', JSON.stringify([...products, newProduct]));
        navigate('/');
        // console.log(products);
    };

    return (
        <div className="w-[80%] mx-auto mt-10">
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2 items-center">
                <h2 className="text-2xl font-bold mb-5 text-center">Add New Product</h2>
                <div className='w-full flex flex-col items-center'>
                    <label htmlFor="title" className=" mb-1  font-medium">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g. Smartphone X"
                        className="w-1/2 px-3 py-2 border rounded-md"
                        required
                    />
                </div>
                <div className='w-full flex flex-col items-center'>
                    <label htmlFor="imgLink" className="block mb-1 font-medium">Image Link</label>
                    <input
                        type="url"
                        id="imgLink"
                        name="imgLink"
                        onChange={(e) => setImgLink(e.target.value)}
                        placeholder="https://example.com/image.jpg"
                        className="w-1/2 px-3 py-2 border rounded-md"
                        required
                    />
                </div>
                <div className='w-full flex flex-col items-center'>
                    <label htmlFor="category" className="block mb-1 font-medium">Category</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="eg -mens clothing -women's clothing -electronics"
                        className="w-1/2 px-3 py-2 border rounded-md"
                        required
                    />
                </div>
                <div className='w-1/2 flex gap-1'>
                    <div className='w-1/2 flex flex-col items-center'>
                        <label htmlFor="rating" className="block mb-1 font-medium">Rate</label>
                        <input
                            type="number"
                            id="rating"
                            name="rate"
                            onChange={(e) => setRate(e.target.value)}
                            placeholder="e.g. 4.5"
                            className="w-full px-3 py-2 border rounded-md"
                            required
                            min="0"
                            max="5"
                            step="0.1"
                        />
                    </div>
                    <div className='w-1/2 flex flex-col items-center'>
                        <label htmlFor="price" className="block mb-1 font-medium">Price</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="99.99"
                            className="w-full px-3 py-2 border rounded-md"
                            required
                            min="0"
                            step="0.01"
                        />
                    </div>
                </div>
                <div className='w-full flex flex-col items-center'>
                    <label htmlFor="description" className="block mb-1 font-medium">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter product description here..."
                        className="w-1/2 h-15 px-3 py-2 border rounded-md"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="w-1/2 mt-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                    Add Product
                </button>
            </form>
        </div>
    )
}

export default Create