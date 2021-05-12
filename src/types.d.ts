/**
 * {
                    id:1,
                    title:'...',
                    price:'...',
                    category:'...',
                    description:'...',
                    image:'...'
                },
 * 
 */

type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;

}
//define state type
type InitialStateType={
    products: Product[];
    cart: Product[];
    cart: CartItem[];
    product: Product | undefined;
    getProducts: () => void;
    getSingleProduct: (productId:number) => void ;
    addToCart:(product: Product) =>  void;
    is_loading: boolean;
}
type CartItem = {
    id: number;
    quantity: number;
    product:Product;
}