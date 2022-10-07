function Clothes ({itemsForSale}) {

    return (<div className='products'>
        {itemsForSale.map((element => {
        const {id, name, term, price, image } = element;

    return (<div key={ id } className='product-card'>
            <img src={ image } width="350px" height="450px" alt="Clothes" />
        <div className="product-info">
            <h3>{ name }</h3>
            <h4>$ { price }</h4>
        </div>
        </div>
    )            
            }))}
    </div>
    )
}
export default Clothes;