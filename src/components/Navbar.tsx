import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            {/*logo*/}
            <Link to='/' className='navbar-brand'>Shopsy</Link>
            {/*menu*/}
            <div className='collapse navbar-collapse'>
            <div className='navbar-nav'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/cart'>Cart</Link>
                <Link className='nav-link' to='/checkout'>Checkout</Link>
                <Link className='nav-link' to='/products/1'>Product</Link>
            </div>

            </div>
            
            {/*Cart Icon */}
            <div className ='sh-cart-icon'>
                <div className='navbar-nav'>
                <Link to='/cart' className='nav-link'>Cart</Link>
                </div>
                </div> 
        </nav>
    )
}
export default Navbar;