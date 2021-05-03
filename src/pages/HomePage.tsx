import {useEffect, useContext} from 'react';
import {GlobalContext} from '../context/GlobalContext';
import {Link} from 'react-router-dom';
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
                                <div className='card h-100'>
                                    {/* image top*/}
                                    <div className='sh-card-img'>
                                        <div className='sh-bg-img' style = {{ backgroundImage: `url(${product.image})`}}>
                                            </div>
                                    </div>
                                      {/* card body */}
                                      <div className='card-body'>
                                          <h5 className='card-title'>
                                              <Link to={`/products/${product.id}`}>{product.title}</Link></h5>
                                          <div className='d-flex justify-content-between align-items-center'>
                                          <strong>${product.price}</strong> 
                                          <span className='badge badge-warning'>
                                              {product.category}
                                          </span>

                                          </div>
                                          
                                      </div>
                                        {/* add to cart button */}
                                        <div className='card-footer'>
                                            <div className='btn btn-block btn-primary'>
                                                Add To Cart 
                                                </div>
                                        </div>
                                 </div>

                            </div>
                            
                        )

                    })}
              
            </div>
        </div>
    )
}
export default HomePage;