function Product(props) {
    return (
        <>
            <div className="product">
                <img src={`${props.productInfo.img_url}`} alt={`${props.productInfo.name}`}></img>
                <div className="name">{props.productInfo.name}</div>
            </div>
        </>
    )
}

export default Product;