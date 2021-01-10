import './styles.css';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { useEffect, useState } from 'react';
import { Product } from './types';
import { fetchProducts } from '../api';
import { error } from 'console';
function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetchProducts()
            .then(Response => setProducts(Response.data))
            .catch(error => console.log(error))
    }, []);
    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products} />
        </div>
    )
}
export default Orders;