import {useEffect, useContext} from 'react';
import {GlobalContext} from '../context/GlobalContext';
import ProductCard from '../components/ProductCard';
import '../App.css';

const HomePage = () => {
    const { getProducts, products} = useContext(GlobalContext)

    // console.log('context',context.heading)

    useEffect(() => {
      getProducts() ;
    },[])

  
    return (
        <div id='home'>
            <div className='row text-center'>
                <div className='col'>
                    <h2>Home page</h2>
                    <h3>You have {products.length} items to sell</h3>
                </div>
            </div>
            <div className='row '>
                <div className='col-md-8 offset-md-2'>
                    {/* <div className='form-group'>
                        <input 
                        type='text' 
                        className='form-control' 
                        value={heading} 
                        onChange={(e) => updateHeading(e.target.value)}
                        />

                    </div> */}
                   
                </div>
            </div>
            <div className='row'>
               
                    {products.map((product, index) => {
                        return(
                            <div className= 'col-sm-12 col-md-3 mb-3' key={index}>
                                <ProductCard product={product} />
                      

                            </div>
                            
                        )

                    })}
              
            </div>
        </div>
    )
}
export default HomePage;