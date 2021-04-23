import  {Switch, Route} from 'react-router-dom';
//page components
import Homepage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import ProductPage from '../pages/ProductPage';

const AppRoutes = () => {
    return (
        <div>
            <Switch>
                <Route path='/' exact component={Homepage}/>
                <Route path='/products/:productId'  component={ProductPage} />
                <Route path='/cart' component={CartPage}/>
                <Route path='/checkout' component={CheckoutPage}/>
            </Switch>
        </div>

    )
}
export default AppRoutes;