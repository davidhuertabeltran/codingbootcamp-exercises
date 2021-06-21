import Product from './Product';
import {products} from '../products.js';
import Search from "./Search";

function ProductList() {
    return (
        <div id="main">
            <Search />
           
            <div className="content">
                <h1>Products</h1>

                <div className="product-list">

                    <Product productInfo={products[0]}/>
                    <Product productInfo={products[1]}/>
                    <Product productInfo={products[2]}/>
                    <Product productInfo={products[3]}/>
                    <Product productInfo={products[4]}/>
                    <Product productInfo={products[5]}/>

                </div>

            </div>  

        </div>
    )
}

export default ProductList;