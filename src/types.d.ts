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
    product: Product | undefined;
    getProducts: () => void;
    getSingleProduct: (productId:number) => void ;
}