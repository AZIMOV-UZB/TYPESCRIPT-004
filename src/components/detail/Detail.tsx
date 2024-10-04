import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 

interface ProductDetail {
    id: number;
    images: string[];
    title: string;
    description: string;
    price: number;
}

const API_URL: string = "https://dummyjson.com/products/";

const Detail: FC = () => {
    const { id } = useParams<{ id: string }>(); 
    const [product, setProduct] = useState<ProductDetail | null>(null);

    useEffect(() => {
        axios
            .get(`${API_URL}${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    if (!product) return <div>Loading</div>;

    return (
        <div className=' bg-slate-200'>
        <div className="container  text-black flex flex-wrap justify-between
        ">
                <div className=''> 
                    <img className=" h-[350px] w-[340] object-cover " src={product.images[0]} alt={product.title} />
               </div>
            <div className='w-[450px] py-6'>
                <h2 className="text-3xl font-bold mb-2 mt-8">{product.title}</h2>
                <p className="text-xl mb-4">Price: {product.price} $</p>
                <p className="mb-6">{product.description}</p>
                <p >{product.description}</p>
                </div>
       
                </div>
        </div>
    );
};

export default Detail;
