import {useContext, useEffect} from 'react';
import {GlobalContext} from '../context/GlobalContext';
import {useParams} from 'react-router-dom';
const ProductPage = () => {
    const {product,getSingleProduct} = useContext(GlobalContext);
    const {productId} = useParams< {productId: string}>();
    // console.log('params', params);
    useEffect (() => {
        getSingleProduct(+productId);

    },[productId])
    return (
        <div id='product'>
            <div className='row text-center'>
                <div className='col'>
                    <h2>Product page{product?.title}</h2>
                </div>
            </div>
        </div>
    )
}
export default ProductPage;