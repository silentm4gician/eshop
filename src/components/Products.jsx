import './Products.css'
import { useCart } from '../hooks/useCart.js'

    export default function Products ({ products }) {
    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='products'>
        <ul>
            {products.map(product => {
            const isProductInCart = checkProductInCart(product)

            return (
                <li key={product.id}>
                <img
                    src={product.thumbnail}
                    alt={product.title}
                />
                <div>
                    <strong>{product.title}</strong> - ${product.price}
                </div>
                <div>
                    <button
                    style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }} onClick={() => {
                        isProductInCart
                        ? removeFromCart(product)
                        : addToCart(product)
                    }}
                    >
                    {
                        isProductInCart
                        ? 'X'
                        : 'ADD'
                    }
                    </button>
                </div>
                </li>
            )
            })}
        </ul>
        </main>
    )
    }