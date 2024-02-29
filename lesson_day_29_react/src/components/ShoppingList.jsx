import data from '../assets/product.json'

function Shoppinglist() {
    const products = data.products
    console.log(products)
    return (
        <>
            <h1>Shopping list</h1>
            <div className='grid grid-cols-3 gap-4'>
                {products.map((product) => (
                    <Product
                        title={product.title}
                        thumbnail={product.thumbnail}
                        price={product.price}
                        stock={product.stock}
                        rating={product.rating}
                        brand={product.brand}
                    />
                ))}

            </div>
        </>
    )
}
function Product({ title, thumbnail, price, stock, rating, brand, img }) {
    return (
        <>
            <div className='max-w-350 bg-green'>
                <h1>{title}</h1>
                <img src={thumbnail} alt={title} className=''/>
                <div className='flex'>
                    <p className='m-2'>Price: {price}</p>
                    <p className='m-2'>Stock: {stock}</p>
                    <p className='m-2'>Ratinf: {rating}</p>
                </div>
                <div>Brand : {brand}</div>
            </div>
        </>
    )
}
export { Shoppinglist }