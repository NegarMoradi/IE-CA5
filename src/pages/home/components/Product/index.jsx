
import './product.css';
import image from '../../../../assets/png/mobile.png';

const Product = ({product}) => {
    return(
        <div class="col-xxl-3 col-xl-6 col-lg-6">
            <div class="item pt-3">
                <p class="item-title">{product.name}</p>
                <p class="item-count">{product.inStock} left in stock</p>
                <img class="w-100" src={image} alt="item"/>
                <div class="item-details d-flex justify-content-between align-items-center m-2">
                    <p class="mb-0">{product.price}$</p>
                    <button>add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product;