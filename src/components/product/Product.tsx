import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";


interface Product {
  id: number;
  images: string[];
  title: string;
  description: string;
  price: number;
}

interface ProductState {
  data: Product[] | null;
  currentPage: number;
  totalProducts: number;
  totalPages: number;
  limit: number;
  isLoading: boolean;
}

const API_URL: string = "https://dummyjson.com/products/";

class Product extends Component<{}, ProductState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: null,
      currentPage: 1,
      totalProducts: 0,
      totalPages: 0,
      limit: 52,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchProducts(this.state.currentPage);
  }

  fetchProducts = (page: number) => {
    const { limit } = this.state;
    const skip = (page - 1) * limit;

    this.setState({ isLoading: true });

    axios
      .get(`${API_URL}?limit=${limit}&skip=${skip}`)
      .then((res) => {
        this.setState({
          data: res.data.products,
          totalProducts: res.data.total,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };



  renderPagination = () => {
    const {  totalPages } = this.state;
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
    null
    );
  };

  render() {
    const { data, isLoading } = this.state;


    const loadingCards = Array.from({ length: 40 }, (_, index) => (
        <div
            key={index}
            className="bg-slate-400 rounded-lg shadow-lg overflow-hidden transform transition duration-300 opacity-60 animate-pulse"
        >
        
        </div>
    ));

    if (isLoading) {
        return (
            <div className="bg-slate-900 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {loadingCards}
            </div>
        );
    }

    return (
        <div className="bg-slate-300 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 container mx-auto">
                {data?.map((product: Product) => (
                    <div
                        key={product.id}
                        className="bg-gray-100  shadow-lg overflow-hidden justify-center"
                    >
                          <Link
                                to={`/product/${product.id}`}
                                className="text-yellow-400 hover:text-yellow-500 font-semibold transition-colors duration-300"
                            >
                        <img
                            className="w-full object-contain duration-200 hover:scale-105 h-[200px]"
                            src={product.images[0]}
                            alt={product.title}
                        />
                            </Link>
                        <div className="p-6">
                          
                                <h2 className=" font-bold w-full ">
                                    {product.title}
                                </h2>
                                <p className='text-xl font-medium text-gray-400 '>{product.category}</p>
                <div className='flex gap-2 text-center '>
                <FaStar className='text-yellow-300 mt-[2px]'/> 
                <p className='font-bold text-yellow-300'>{product.rating}</p>
                </div>
                <h3 className='text-xl font-bold text-red-600'>{product.price} $</h3>
                <button className='bg-green-500 w-full rounded-[10px] mt-2 py-1'>CART</button>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
}

}

export default Product;